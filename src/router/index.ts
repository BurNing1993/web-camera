import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/home.vue'
import Camera from '../views/camera.vue'
import Upload from '../views/upload.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/camera',
    name: 'camera',
    component: Camera,
  },
  {
    path: '/upload',
    name: 'upload',
    component: Upload,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router;

