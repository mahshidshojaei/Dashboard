<script setup>
import {onMounted, ref} from "vue";
import SelectInput from "@/components/SelectInput.vue";
import { useThemeStore } from '@/stores/themeStore'
const themeStore = useThemeStore()




const isMenuBarOpen = ref(false);
const menuBarOpen=()=>{
  isMenuBarOpen.value = !isMenuBarOpen.value;
}

</script>

<template>
  <div class="bg-zinc-100 dark:bg-zinc-900">
    <div class="grid grid-cols-5 p-4 min-h-screen  gap-2 overflow-hidden">
      <div class="sm:col-span-1 hidden border border-gray-200 bg-white rounded-lg p-4 sm:flex flex-col dark:bg-zinc-900">
        <div class="relative mb-6">
          <div class="text-2xl font-bold text-gray-800 dark:text-gray-100">Orders Management</div>
          <hr class="border-t-2 border-blue-600 w-10 mt-2">
        </div>

        <nav>
          <ul class="flex flex-col gap-2 ">
            <router-link
                to="/dashboard"
                class="flex items-center gap-3 p-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition dark:text-gray-100 dark:hover:text-zinc-800">
              <i class="ki-filled ki-category text-lg"></i>
              <span>Dashboard</span>
            </router-link>

            <router-link
                to="/orders"
                class="flex items-center gap-3 p-3 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition dark:text-gray-100">
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
      <div class="sm:col-span-4 col-span-5 flex flex-col gap-2 overflow-hidden h-[calc(100vh-2rem)]">
        <div class="w-full border border-white bg-white rounded-lg p-2 text-end dark:bg-zinc-900 dark:border-white flex justify-between items-center">
          <i @click="menuBarOpen" class="fa-light fa-bars  p-2 rounded-lg text-zinc-900 relative dark:text-white">
            <div
                v-if="isMenuBarOpen"
                class="absolute top-12 left-2 w-64 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-xl p-5 z-50"
            >
              <h2 class="text-sm text-start font-semibold px-2 pb-2 text-gray-900 dark:text-white">Product Manager</h2>

              <nav class="space-y-2">
                <router-link
                    to="/dashboard"
                    class="flex items-center gap-3 p-2 rounded-xl text-[11px] font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-700 transition"
                >
                  <i class="ki-filled ki-category text-[20px]"></i>
                  <span>Dashboard</span>
                </router-link>

                <router-link
                    to="/department"
                    class="flex items-center gap-3 p-2 rounded-xl text-[11px] font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-700 transition"
                >
                  <i class="ki-filled ki-security-user text-[20px]"></i>
                  <span>Department</span>
                </router-link>

                <router-link
                    to="/product"
                    class="flex items-center gap-3 p-2 rounded-xl text-[11px] font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-700 transition"
                >
                  <i class="ki-filled ki-data text-[20px]"></i>
                  <span>Product Manager</span>
                </router-link>

                <router-link
                    to="/logs"
                    class="flex items-center gap-3 p-2 rounded-xl text-[11px] font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-700 transition"
                >
                  <i class="ki-filled ki-electricity text-[20px]"></i>
                  <span>System Logs</span>
                </router-link>
              </nav>
            </div>

          </i>
          <i class="fa-solid fa-circle-user text-[28px] dark:text-white"></i>
          <span
              @click="themeStore.themeChange"
              class="border border-zinc-400 !bg-zinc-600 w-[80px] h-[35px] rounded-full fixed left-[325px] top-[25px]  hidden sm:flex"
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

        <div class="w-full border border-white bg-white rounded-lg p-2 flex gap-2 text-[14px] items-center dark:bg-zinc-900 dark:border-white dark:text-white">
          <i class="ki-filled ki-data"></i>
          <a href="#">Orders Management</a>
        </div>

        <div class="w-full border border-white bg-white rounded-lg p-4 overflow-hidden flex-1 flex flex-col dark:bg-zinc-900 dark:border-white dark:text-white">
          <div class="flex flex-col gap-4 overflow-hidden flex-1">
            <h1 class="text-xl font-semibold">Orders Management</h1>

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

          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<style scoped>


.no-scrollbar::-webkit-scrollbar {
  display: none;
}

</style>
