<template>
  <div>
    <apexchart width="380" type="polarArea" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script setup>
import VueApexCharts from "vue3-apexcharts";
import { ref } from 'vue'

const series = ref([42, 47, 52, 58, 65]);

const chartOptions = ref({
  chart: {
    type: 'polarArea',
    width: 380,
  },
  labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
  fill: {
    opacity: 1
  },
  stroke: {
    width: 1,
    colors: undefined
  },
  yaxis: {
    show: false
  },
  legend: {
    position: 'bottom'
  },
  plotOptions: {
    polarArea: {
      rings: {
        strokeWidth: 0
      },
      spokes: {
        strokeWidth: 0
      },
    }
  },
  theme: {
    monochrome: {
      enabled: true,
      shadeTo: 'light',
      shadeIntensity: 0.6
    }
  }
});
</script>
