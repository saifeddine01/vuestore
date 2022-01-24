import { createRouter, createWebHistory } from 'vue-router';
import Crud from '../views/Crud.vue';

const routes = [
  {
    path: '/',
    name: 'Crud',
    component: Crud,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
