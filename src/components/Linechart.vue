<script setup>
import { ref } from 'vue'

const series = ref([
  {
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }
])

const chartOptions = ref({
  chart: {
    type: 'line',
    zoom: { enabled: false },
    toolbar: { show: false },
  },
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth' },
  title: {
    text: 'Product Trends by Month',
    align: 'left',
    style: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#ffffff'
    }
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'],
      opacity: 0.5
    }
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
  }
})
</script>

<template>
  <div class="w-full h-[200px]">
    <apexchart
        type="line"
        width="100%"
        height="100%"
        :options="chartOptions"
        :series="series"
    />
  </div>
</template>
