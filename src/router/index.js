import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/python-course/basics',
      name: 'python-basics',
      component: () => import('../views/PythonBasicsView.vue')
    },
    {
      path: '/python-course/data-structures',
      name: 'python-data-structures',
      component: () => import('../views/PythonDataStructuresView.vue')
    },
    {
      path: '/python-course/functions',
      name: 'python-functions',
      component: () => import('../views/PythonFunctionsView.vue')
    }
  ]
})

export default router