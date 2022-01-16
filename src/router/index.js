import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/base1',
    name:'base1',
    component:()=>import(/* webpackChunkName: "about" */ "../components/BaseDesk.vue"),
  },
  {
    path: '/',
    name: 'Home',
    component:()=>import(/* webpackChunkName: "about" */ "../components/BaseDesk.vue"),
  },
  {
    path: '/childApp/*',
    name: 'about',
    // children: [{ path: 'home' }],
  },
  {
    path: '/childApp3/*',
    name: 'about',
    // children: [{ path: 'home' }],
  },
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes,
})

export default router
