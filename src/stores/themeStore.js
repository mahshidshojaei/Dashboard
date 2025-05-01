import { defineStore } from 'pinia'
import { ref, onMounted, watch } from 'vue'

export const useThemeStore = defineStore('theme', () => {
    const isDark = ref(false)

        const storedTheme = localStorage.getItem('theme')
        isDark.value = storedTheme === 'dark'

    const themeChange = () => {
        isDark.value = !isDark.value
    }

    watch(isDark, (val) => {
        localStorage.setItem('theme', val ? 'dark' : 'light')


        if (val) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, { immediate: true })

    return { isDark, themeChange }
})
