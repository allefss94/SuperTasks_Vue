import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login'),
  },
  {
    path: '/cadastro',
    name: 'Sign-up',
    component: () => import('@/views/SignUp'),
  },
  {
    path: '/error',
    name: 'Erro',
    component: () => import('@/views/Error'),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/Dashboard'),
    children: [
      { path: '', component: () => import('@/components/AllTasks') },
      {
        path: 'novatarefa',
        component: () => import('@/components/NewTask'),
      },
      {
        path: 'pendentes',
        component: () => import('@/components/PendingTasks'),
      },
      {
        path: 'concluidas',
        component: () => import('@/components/FinishedTasks'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
