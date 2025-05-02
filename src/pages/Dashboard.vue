<script setup>

import DonutChart from "@/components/DonutChart.vue";
import Linechart from "@/components/Linechart.vue";
import {onMounted, ref, watch} from "vue";
import AreaChart from "@/components/AreaChart.vue";
const products = ref([
  { id: 1, name: "iphone 16", category: "Smartphone", price: 99.99, stock: "In Stock", image: "/src/assets/images/16.png" },
  { id: 2, name: "iphone 15", category: "Smartphone", price: 600, stock: "In Stock", image: "/src/assets/images/16.png" },
  { id: 3, name: "iphone 15", category: "Smartphone", price: 1500, stock: "In Stock", image: "/src/assets/images/16.png" },
  { id: 4, name: "iphone 15", category: "Smartphone", price: 901, stock: "In Stock", image: "/src/assets/images/16.png" },
  { id: 5, name: "iphone 15", category: "Smartphone", price: 98.99, stock: "In Stock", image: "/src/assets/images/16.png" },
  { id: 6, name: "iphone 15", category: "Smartphone", price: 99.99, stock: "Pre-order", image: "/src/assets/images/16.png" },
  { id: 7, name: "iphone 15", category: "Smartphone", price: 99.99, stock: "Backordered", image: "/src/assets/images/16.png" },
  { id: 8, name: "iphone 15", category: "Smartphone", price: 99.99, stock: "Backordered", image: "/src/assets/images/16.png" },
  { id: 9, name: "iphone 15", category: "Smartphone", price: 99.99, stock: "Pre-order", image: "/src/assets/images/16.png" },
]);
const users = ref([
  { id: 1, name: "Ali Rezaei", email: "ali@example.com", role: "Admin", status: "Active", avatar: "/src/assets/images/8.png" },
  { id: 2, name: "Sara Ahmadi", email: "sara@example.com", role: "User", status: "Inactive", avatar: "/src/assets/images/10.png" },
  { id: 3, name: "Mohammad Karimi", email: "m.karimi@example.com", role: "Moderator", status: "Active", avatar: "/src/assets/images/9.png" },
  { id: 4, name: "Mohammad Karimi", email: "m.karimi@example.com", role: "Moderator", status: "Active", avatar: "/src/assets/images/11.png" },
]);

const series = [
  {
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  },
  {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  },
  {
    name: 'Free Cash Flow',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }
];

const chartOptions = {
  chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      borderRadius: 5,
      borderRadiusApplication: 'end'
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
  },
  yaxis: {
    title: {
      text: '$ (thousands)'
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      }
    }
  }
};
import { useThemeStore } from '@/stores/themeStore'
const themeStore = useThemeStore()

</script>

<template>
  <div class="bg-zinc-100 dark:bg-zinc-900 text-white" >
  <div class="h-screen">
  <div class="grid grid-cols-5 p-4 h-screen gap-2">

    <div class="col-span-1 border border-gray-200 bg-white rounded-lg p-4 flex flex-col dark:bg-zinc-900 ">
      <div>
        <div class="text-2xl font-bold text-gray-800 relative mb-4 dark:text-gray-100">
          Dashboard Admin
          <hr class="border-t-2 border-blue-600 w-10 mt-2">
        </div>
        <nav>
          <ul class="flex flex-col gap-2">
            <router-link
                to="/dashboard"
                class="flex items-center gap-3 p-3 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition dark:text-gray-100 ">
              <i class="ki-filled ki-category text-lg"></i>
              <span>Dashboard</span>
            </router-link>

            <router-link
                to="/orders"
                class="flex items-center gap-3 p-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition dark:text-gray-100 dark:hover:text-zinc-800">
              <i class="ki-filled ki-security-user text-lg"></i>
              <span>Orders</span>
            </router-link>

            <router-link
                to="/product"
                class="flex items-center gap-3 p-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition dark:text-gray-100 dark:hover:text-zinc-800">
              <i class="ki-filled ki-data text-lg"></i>
              <span>Product Manager</span>
            </router-link>

            <router-link
                to="/logs"
                class="flex items-center gap-3 p-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition dark:text-gray-100 dark:hover:text-zinc-800">
              <i class="ki-filled ki-electricity text-lg"></i>
              <span>System Logs</span>
            </router-link>
          </ul>
        </nav>
      </div>
    </div>


    <div class="col-span-4 flex flex-col gap-2 h-[calc(100vh-2rem)] px-5 no-scrollbar overflow-auto dark:bg-zinc-900 text-gray-800 dark:text-gray-100">
      <div class="w-full">
      <p class="font-bold text-[25px]">Dashboard Overview</p>
        <span
            @click="themeStore.themeChange"
            class="border border-zinc-400 !bg-zinc-600 w-[80px] h-[35px] rounded-full fixed right-10 top-[18px]"
        >
    <i
        class="fa-duotone fa-moon fa-flip-horizontal absolute top-[4px] right-[2px] text-[25px]"
    ></i>
    <span
        :class="[
        'w-[28px] h-[28px] rounded-full bg-white absolute z-10 top-[3px] transition-all duration-300 ease-in-out',
        themeStore.isDark ? 'left-[47px]' : 'left-[2px]'
      ]"
    ></span>
  </span>
      </div>
      <div class="grid grid-cols-3 gap-x-4">
        <div class="col-span-1 bg-white rounded-lg p-4 flex items-center gap-4 h-[100px] dark:bg-zinc-900 dark:border dark:border-gray-100">
          <span class="flex justify-center items-center w-[35px] h-[35px] bg-[#dbeafe] rounded-md"><i class="fa-solid fa-dollar-sign text-blue-500"></i></span>
          <div class="flex flex-col">
            <span class="text-[#707280] text-[13px]">Today's Sales</span>
            <span class="font-bold text-[17px]">$1,250</span>
            <span class="text-[#10b991] text-[13px]">+12.5% from yesterday</span>
          </div>
        </div>
        <div class="col-span-1 bg-white rounded-lg p-4 flex items-center gap-4 h-[100px] dark:bg-zinc-900 dark:border dark:border-gray-100">
          <span class="flex justify-center items-center w-[35px] h-[35px] bg-[#d1fae5] rounded-md"><i class="fa-solid fa-bag-shopping text-[#059669]"></i></span>
          <div class="flex flex-col">
            <span class="text-[#707280] text-[13px]">Number of Orders</span>
            <span class="font-bold text-[17px]">320</span>
            <span class="text-[#10b991] text-[13px]">+8.1% from yesterday</span>
          </div>
        </div>
        <div class="col-span-1 bg-white rounded-lg p-4 flex items-center gap-4 h-[100px] dark:bg-zinc-900 dark:border dark:border-gray-100">
          <span class="flex justify-center items-center w-[35px] h-[35px] bg-[#ede9fe] rounded-md"><i class="fa-solid fa-users text-[#7c3aed]"></i></span>
          <div class="flex flex-col">
            <span class="text-[#707280] text-[13px]">Active Users</span>
            <span class="font-bold text-[17px]">820</span>
            <span class="text-[#10b991] text-[13px]">+5.2% from yesterday</span>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-x-5">
        <div class="col-span-1 bg-white rounded-lg p-4 flex items-center gap-4 mt-4 justify-center dark:bg-zinc-900 dark:border dark:border-gray-100">
           <Linechart/>
        </div>
        <div class="col-span-1 bg-white rounded-lg p-4 flex items-center gap-4 mt-4 justify-center w-full relative dark:bg-zinc-900 dark:border dark:border-gray-100">
              <p class="absolute left-[15px] top-[16px]">Product Categories</p>
              <DonutChart/>
        </div>
      </div>
      <div class="flex-1 mt-5">
        <div class="relative flex-1 overflow-auto rounded-lg border h-[400px] no-scrollbar">
          <table class="min-w-full overflow-auto relative ">
            <thead class="sticky top-0 bg-zinc-200 z-10 dark:bg-zinc-900 text-gray-800 dark:text-gray-100">
            <tr>
              <th class="px-6 py-4 text-start">Product</th>
              <th class="px-6 py-4 text-start">Category</th>
              <th class="px-6 py-4 text-start">Price</th>
              <th class="px-6 py-4 text-start">Stock</th>
              <th class="px-6 py-4 text-start">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="product in products" :key="product.id" class="border-t hover:bg-gray-50 w-full text-[12px] bg-white dark:bg-zinc-700 text-gray-800 dark:text-gray-100">
              <td class="px-6 py-4 flex items-center gap-2">
                <img :src="product.image" alt="Product" class="w-10 h-10 rounded-full object-cover" />
                {{ product.name }}
              </td>
              <td class="px-6 py-4">{{ product.category }}</td>
              <td class="px-6 py-4">{{ product.price }}</td>
              <td class="px-6 py-4">
                              <span
                                  :class="product.stock === 'In Stock' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'"
                                  class="px-2 py-1 rounded-full text-xs font-semibold"
                              >
                                {{ product.stock }}
                              </span>
              </td>
              <td class="px-6 py-4">
                <button><i class="fa-thin fa-pen-to-square text-blue-600"></i> Edit</button>
                <button class="ms-5"><i class="fa-thin fa-trash text-red-600"></i> Delete</button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="flex justify-between gap-5 items-center w-full bg-white p-2 rounded-lg my-4 dark:bg-zinc-900 dark:border dark:border-zinc-100 dark:text-gray-100 ">
        <div id="chart" class="mt-5 pb-2 pt-3 px-2 rounded-lg w-[50%]">
          <apexchart type="bar" height="320" :options="chartOptions" :series="series" />
        </div>
          <div class="w-[50%] flex justify-center">
          <AreaChart/>
          </div>

        </div>
        <div class="relative flex-1 overflow-auto rounded-lg border h-[300px] no-scrollbar mt-5">
          <table class="min-w-full overflow-auto relative">
            <thead class="sticky top-0 bg-zinc-200 z-10 dark:bg-zinc-900 text-gray-800 dark:text-gray-100">
            <tr>
              <th class="px-6 py-4 text-start">User</th>
              <th class="px-6 py-4 text-start">Email</th>
              <th class="px-6 py-4 text-start">Role</th>
              <th class="px-6 py-4 text-start">Status</th>
              <th class="px-6 py-4 text-start">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in users" :key="user.id" class="border-t hover:bg-gray-50 w-full text-[12px] bg-white dark:bg-zinc-700 text-gray-800 dark:text-gray-100">
              <td class="px-6 py-4 flex items-center gap-2">
                <img :src="user.avatar" alt="User" class="w-10 h-10 rounded-full object-cover" />
                {{ user.name }}
              </td>
              <td class="px-6 py-4">{{ user.email }}</td>
              <td class="px-6 py-4">{{ user.role }}</td>
              <td class="px-6 py-4">
          <span
              :class="user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'"
              class="px-2 py-1 rounded-full text-xs font-semibold"
          >
            {{ user.status }}
          </span>
              </td>
              <td class="px-6 py-4">
                <button><i class="fa-thin fa-pen-to-square text-blue-600"></i> Edit</button>
                <button class="ms-5"><i class="fa-thin fa-trash text-red-600"></i> Delete</button>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  </div>
  </div>
  </div>
</template>

<style scoped>

</style>