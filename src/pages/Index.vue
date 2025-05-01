<script setup>

import TextInput from "@/components/TextInput.vue";
import {reactive, ref} from "vue";
const login = ref([
  { label: 'Username or Email', key: 'userName', required: true, minLength: 3 },
  { label: 'Password', key: 'password', required: true, minLength: 3 },

]);
const formData = reactive({
  userName: '',
  password: '',

});
const errors = reactive({
  userName: '',
  password: '',

});
const validateForm = () => {
  let isValid = true;
  login.value.forEach(field => {
    const value = formData[field.key];
    if (field.required && !value) {
      errors[field.key] = `Enter the ${field.label} is required.`;
      isValid = false;
    } else if (field.minLength && value.length < field.minLength) {
      errors[field.key] = `${field.label} Must be ${field.minLength} characters long.`;
      isValid = false;
    } else {
      errors[field.key] = '';
    }
  });
  return isValid;
};

const loginHandler = () => {
  if (validateForm()) {
    alert("You've already logged in.!");

  }
};

</script>

<template>
<div class="main w-full h-screen flex justify-center items-center">
 <div class="bg-[#f9fafb] w-[400px] h-[500px] flex gap-8 flex-col p-4 rounded-xl items-center justify-center">
   <div class="flex flex-col gap-1 items-center">
   <i class="fa-light fa-circle-user text-[#2563eb] text-[30px] mb-3"></i>
   <span class="text-[28px] text-gray-900 font-bold">Login to Your Account</span>
   <span class="text-[12px] text-slate-700">Welcome back! Please log in to continue.</span>
   </div>
     <div class="w-full flex flex-col gap-2">
       <div v-for="field in login" :key="field.key" class="flex flex-col gap-1">
         <label class="text-[12px] font-medium mt-1">{{ field.label }}:</label>
         <TextInput
             v-model="formData[field.key]"
             placeholder=""
             class="border border-gray-300 p-2"
         />
         <span v-if="errors[field.key]" class="text-[11px] text-red-400">{{ errors[field.key] }}</span>
       </div>
       <div class="flex justify-between w-full text-[12px] items-center">
         <div class="flex items-center gap-1">
           <input type="checkbox"
           class="custom-checkbox">
           <span>Remember me</span>
         </div>
         <span>Forgot your password?</span>
       </div>
   </div>
   <button @click="loginHandler" class="w-full bg-[#2563eb] py-3 rounded-lg text-[#ffffff] text-[14px]">Log In</button>
   <router-link to="/product">clickkkk</router-link>
 </div>
</div>
</template>

<style scoped>
.custom-checkbox {
  appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-inline-end: 6px;
  background-color: white;
  cursor: pointer;
}

.custom-checkbox:checked {
  background-color: #2563eb;
  border-color: #ffffff;
}
.main{
  background-image: url("/src/assets/images/afrah-puUx-3kFVbg-unsplash.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>