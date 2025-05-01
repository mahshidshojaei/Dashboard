<script setup>
import { ref } from 'vue'

const chartOptions = ref({
  chart: {
    type: 'donut'
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom',
        layout: 'horizontal'
      }
    }
  }]
})

const series = ref([44, 55, 41, 17, 15])
</script>

<template>
  <div class="w-[300px] flex justify-center h-[200]">
    <apexchart
        width="300"
        type="donut"
        :options="chartOptions"
        :series="series" />
  </div>
</template>
