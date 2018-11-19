import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/tshirtz',
      name: 'tshirtz',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Tshirtz.vue')
    },
    {
    path: '/admin',
    name: 'admin',
    component: () => import('./views/Admin.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('./components/Detail.vue')
  },
  {
    path: '/admin/products',
    name: '/list',
    component: () => import('./components/List.vue')
  },
  {
    path: '/admin/products/add',
    name: '/add',
    component: () => import('./components/Add.vue')
  }
  ]
})
