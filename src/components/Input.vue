<script setup >
defineProps({
  placeholder: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <div class="sm:w-full relative w-full">
    <input :placeholder="placeholder" class="w-full p-2 text-[12px] border border-zinc-200 rounded-[8px] dark:bg-zinc-800 dark:border-white focus:!ring-blue-500" />
    <i class="fa-thin fa-magnifying-glass absolute right-[10px] top-[10px]"></i>
  </div>
</template>
