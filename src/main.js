import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueApexCharts from 'vue3-apexcharts'
import { createPinia } from 'pinia'


const app = createApp(App)
app.use(router)
app.component('apexchart', VueApexCharts)
app.use(createPinia())
app.mount('#app')


