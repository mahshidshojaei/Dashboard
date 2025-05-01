<script setup>

import Input from "@/components/Input.vue";
import TextInput from "@/components/TextInput.vue";
import SelectInput from "@/components/SelectInput.vue";
import CheckBox from "@/components/CheckBox.vue";
import XButton from "@/components/xButton.vue";
import {ref} from "vue";
import Modal from "@/components/Modal.vue";
const options = [
  { label: 'Smartphone', value: 1 },
  { label: 'Budget Phone', value: 2 },
  { label: 'Gaming Phone', value: 3 },
  { label: 'Rugged Phone', value: 4 },
  { label: 'Flagship', value: 5 },
];

const productName = ref('');
const category = ref('');
const price = ref('');
const stockQuantity = ref('');
const termsAccepted = ref(false);

const productData = ref([]);
const showModal = ref(false);

const saveProduct = () => {

  if (productName.value && category.value && price.value && stockQuantity.value) {

    productData.value.push({
      name: productName.value,
      category: category.value,
      price: price.value,
      stockQuantity: stockQuantity.value,
      termsAccepted: termsAccepted.value
    });


    showModal.value = !showModal.value;

    // پاک کردن مقادیر ورودی برای محصول بعدی
    productName.value = '';
    category.value = '';
    price.value = '';
    stockQuantity.value = '';
    termsAccepted.value = false;
  } else {

    alert('لطفاً تمامی فیلدها را پر کنید.');
  }
};
import { useThemeStore } from '@/stores/themeStore'
const themeStore = useThemeStore()
</script>

<template>
<div class="bg-zinc-100 dark:bg-zinc-900 dark:text-white flex flex-col gap-2 justify-center items-center h-screen">
  <div class="sm:w-[600px] w-[300px] flex justify-between px-1 items-center">
    <span>Add New Product</span>
    <router-link to="/product" class="fa-light fa-xmark"></router-link>
  </div>
  <div class="sm:w-[600px] w-[300px] bg-[#ffffff] flex flex-col p-5 gap-2 rounded-xl dark:bg-zinc-800">
    <div class="flex flex-col text-[14px]">
    <lable>Product Name</lable>
    <TextInput v-model="productName" class="border border-gray-300 h-[40px] p-2"/>
    </div>
    <div class="flex flex-col text-[14px]">
    <lable>Category</lable>
    <SelectInput v-model="category" :options="options" model-value="" title="Select Category" />
    </div>
    <div class="flex flex-col text-[14px]">
      <lable>Price</lable>
      <TextInput v-model="price" class="border border-gray-300 h-[40px] p-2" :placeholder="'$'"/>
    </div>
    <div class="flex flex-col text-[14px]">
      <lable>Stock Quantity</lable>
      <TextInput v-model="stockQuantity" class="border border-gray-300 h-[40px] p-2"/>
    </div>
    <div class="flex flex-col text-[14px]">
      <lable>Product Image</lable>
      <div class="w-full border border-dashed flex items-center justify-center flex-col p-6 rounded-lg">
        <i class="fa-solid fa-cloud-arrow-up text-zinc-500 text-[25px]"></i>
        <span class="text-[14px]"><span class="text-blue-500">Upload a file</span> or drag and drop</span>
        <span class="text-[10px] text-zinc-400">PNG, JPG, GIF up to 10MB</span>
      </div>
      <div class="flex py-4 items-start">
        <CheckBox  />
        <div class="flex flex-col text-[10px]">
        <span>I agree to the terms and conditions</span>
        <span class="text-zinc-500">By checking this box, you agree to our Terms of Service and Privacy Policy.</span>
        </div>
      </div>
      <div class="flex w-full gap-2">
        <xButton color="info" class="border border-blue-500 !text-blue-600 w-1/2  flex justify-center items-center gap-1 !leading-[1px]"><i class="fa-regular fa-eye text-blue-500"></i>Preview Product</xButton>
        <xButton @click="saveProduct" class="w-1/2 flex justify-center flex justify-center items-center gap-1 !leading-[1px]"><i class="fa-solid fa-floppy-disk"></i>Save Product</xButton>
      </div>
    </div>
  </div>
  <Modal :show="showModal" @close="showModal = false" :autoWidth="true" :closeable="true">
    <template #default>
      <div class="w-[500px] bg-white">
        <div class="flex flex-col">
          <span>Your New Product</span>

        </div>
      </div>
    </template>
  </Modal>
</div>
</template>

<style scoped>

</style>