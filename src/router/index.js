import { createRouter, createWebHistory } from 'vue-router'

// Lazy load views
const routes = [
    {
        path: '/',
        component: () => import('@/layouts/Master.vue'),
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import('@/pages/Index.vue'),
            },
            {
                path: '/product',
                name: 'ProductManager',
                component: () => import('@/pages/ProductManager.vue'),
            },
            {
                path: '/new',
                name: 'NewProductManager',
                component: () => import('@/pages/CreateProduct.vue'),
            },
            {
                path: "/dashboard",
                name: "Dashboard",
                component: () => import('@/pages/Dashboard.vue'),
            },

        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
