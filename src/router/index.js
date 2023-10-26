// Composables
import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import CompletedTasks from '@/views/CompletedTasks.vue'
import Login from '@/views/Login.vue'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: '/completati',
        name: 'CompletedTasks',
        component: CompletedTasks
      },
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
