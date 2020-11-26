import Vue from 'vue'
import VueRouter from 'vue-router'
import defaultPage from '@/views/layout/default.vue';
import blankPage from '@/views/layout/blank.vue';
import index from '@/views/page/index.vue';
import goodsList from '@/views/page/goods-list.vue';
import changeCity from '@/views/page/change-city.vue';
import login from '@/views/page/login.vue';
import register from '@/views/page/register.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: defaultPage,
    redirect: '/index',//重定向到首页
    children: [
      {
        path: '/index',
        name: 'index',
        component: index//重定向到我这里哈哈哈
      },
      {
        path: 's/:name',
        name: 'goods',
        component: goodsList
      },
      {
        path: '/changecity',
        name: 'changecity',
        component: changeCity
      }
    ]
  },
  {
    path: '/blank',
    component: blankPage,
    children: [
      {
        path: '/login',
        name: 'login',
        component: login
      },
      {
        path: '/register',
        name: 'register',
        component: register
      },
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
