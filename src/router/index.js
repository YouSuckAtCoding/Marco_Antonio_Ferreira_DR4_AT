import { createRouter, createWebHashHistory } from 'vue-router'
import AddLembrete from '../components/AddLembrete'
import Lembrete from '../components/Lembrete'
import LembreteList from '../components/LembreteList'


const routes = [
  {
    path: '/',
    alias: '/Lembrete',
    name: 'Lembretes',
    component: () => import("../components/LembreteList")
  },
  {
    path: '/add',
    name: 'add',
    component: () => import("../components/AddLembrete")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
