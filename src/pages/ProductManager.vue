<script setup>
import Input from "@/components/Input.vue";
import CheckBox from "@/components/CheckBox.vue";
import Toggle from "@/components/Toggle.vue";
import XButton from "@/components/xButton.vue";
import {onMounted, ref} from "vue";
import SelectInput from "@/components/SelectInput.vue";
import { useThemeStore } from '@/stores/themeStore'
const themeStore = useThemeStore()

const mobileBrands = [
  "Apple", "Samsung", "Huawei", "Xiaomi", "OnePlus", "Oppo", "Sony", "LG",
  "Google", "Nokia", "Realme", "Asus", "Motorola", "Vivo", "HTC", "Lenovo",
  "Alcatel", "ZTE", "Tecno", "Infinix",
];

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

const deleteProduct=(id)=>{
  products.value=products.value.filter(product=>product.id !== id);
}
const options = [
  { label: 'Smartphone', value: 1 },
  { label: 'Budget Phone', value: 2 },
  { label: 'Gaming Phone', value: 3 },
  { label: 'Rugged Phone', value: 4 },
  { label: 'Flagship', value: 5 },
];

const isMenuBarOpen = ref(false);
const menuBarOpen=()=>{
  isMenuBarOpen.value = !isMenuBarOpen.value;
}
const brandListMobile=ref(false)
const showBrands=()=>{
  brandListMobile.value=!brandListMobile.value;
}
</script>

<template>
  <div class="bg-zinc-100 dark:bg-zinc-900">
  <div class="grid grid-cols-5 p-4 min-h-screen  gap-2 overflow-hidden">
    <div class="sm:col-span-1 hidden border border-gray-200 bg-white rounded-lg p-4 sm:flex flex-col dark:bg-zinc-900">
      <div class="relative mb-6">
        <div class="text-2xl font-bold text-gray-800 dark:text-gray-100">Product Manager</div>
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
              to="/department"
              class="flex items-center gap-3 p-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition dark:text-gray-100 dark:hover:text-zinc-800">
            <i class="ki-filled ki-security-user text-lg"></i>
            <span>Department</span>
          </router-link>

          <router-link
              to="/product"
              class="flex items-center gap-3 p-3 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition dark:text-gray-100">
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
        <a href="#">Product Manager</a>
      </div>

      <div class="w-full border border-white bg-white rounded-lg p-4 overflow-hidden flex-1 flex flex-col dark:bg-zinc-900 dark:border-white dark:text-white">
        <div class="flex flex-col gap-4 overflow-hidden flex-1">
          <h1 class="text-xl font-semibold">Product Management</h1>


            <div class="grid grid-cols-5 gap-4 flex-1 overflow-hidden">

              <div class="sm:col-span-4 col-span-5 flex flex-col gap-4 h-full overflow-hidden">
                <Input />
                <div class="flex flex-col sm:flex-row gap-2 sm:gap-0 w-full justify-between items-center">
                  <div class="flex flex-col gap-2">
                    <Toggle label="Show Special Discounted Items" class="w-[300px] justify-between" />
                    <Toggle label="Show Available Items" class="w-[300px] justify-between" />
                  </div>
                  <div class="w-full sm:flex sm:gap-2 sm:justify-end">
                  <SelectInput
                      :options="options"
                      title="Category"
                      class="sm:!w-[150px] w-full"
                      :confirmable="true"
                      :showDropdownIcon="false"
                  />
                  <router-link to="/new">
                    <xButton  class="sm:flex gap-2 items-center !p-[14px] w-[150px] justify-center hidden">
                      <i class="fa-thin fa-plus"></i> Add New Product
                    </xButton >
                  </router-link>
                  </div>
                  <div class="flex gap-2 sm:hidden">
                    <xButton @click="showBrands" class="flex gap-2 items-center !p-[14px] w-[150px] justify-center sm:hidden" color="outline">
                      <i class="ki-filled ki-setting-4"></i> Filter by Brand
                    </xButton >
                  <router-link to="/new">
                    <xButton  class="flex gap-2 items-center !p-[14px] w-[150px]  justify-center">
                      <i class="fa-thin fa-plus"></i> Add New Product
                    </xButton >
                  </router-link>
                </div>
                </div>
                <div class="flex-1 overflow-hidden">
                  <div class="rounded-lg shadow bg-white h-full">
                    <div class="relative flex-1 overflow-auto rounded-lg border h-full no-scrollbar">
                      <table class="min-w-full overflow-auto relative">
                        <thead class="sticky top-0 bg-white z-10 dark:bg-zinc-900 text-gray-800 dark:text-gray-100">
                        <tr>
                          <th class="px-6 py-4 text-start">Product</th>
                          <th class="px-6 py-4 text-start">Category</th>
                          <th class="px-6 py-4 text-start">Price</th>
                          <th class="px-6 py-4 text-start">Stock</th>
                          <th class="px-6 py-4 text-start">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="product in products" :key="product.id" class="border-t hover:bg-gray-50 w-full text-[12px] dark:bg-zinc-700 text-gray-800 dark:text-gray-100">
                          <td class="px-6 py-4 flex items-center gap-2 flex-col sm:flex-row">
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
                            <button @click="deleteProduct(product.id)" class="ms-5"><i class="fa-thin fa-trash text-red-600"></i> Delete</button>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div class="relative rounded-[8px] border border-zinc-200 p-2 sm:col-span-1 hidden sm:flex flex-col h-full overflow-hidden">
                <span class="sticky top-0 z-10 bg-white text-blue-600 font-semibold mb-2 dark:bg-zinc-900">Brands</span>
                <div class="no-scrollbar overflow-y-auto flex flex-col gap-2 flex-1">
                  <div v-for="(item, index) in mobileBrands" :key="index">
                    <CheckBox>{{ item }}</CheckBox>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
    <div
        v-if="brandListMobile"
        class="fixed inset-0 bg-black  bg-opacity-60 z-10"
        @click="brandListMobile = false"
    ></div>
    <div v-if="brandListMobile" class="bg-white w-full h-[450px] absolute bottom-0 rounded-t-xl border border-t-zinc-400 z-20 flex flex-col gap-2 p-4 dark:bg-zinc-900 dark:text-white">
      <Input/>
      <div class="relative rounded-[8px] border border-zinc-200 p-2  flex flex-col h-full overflow-hidden">
        <span class="sticky top-0 z-10 bg-white text-blue-600 font-semibold mb-2 dark:bg-zinc-900">Brands</span>
        <div class="no-scrollbar overflow-y-auto flex flex-col gap-2 flex-1">
          <div v-for="(item, index) in mobileBrands" :key="index">
            <CheckBox>{{ item }}</CheckBox>
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
