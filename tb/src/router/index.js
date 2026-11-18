import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const year = y => () => import(/* webpackChunkName: "memories" */ `../views/TbYear${y}.vue`)

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/faq', name: 'faq', component: () => import(/* webpackChunkName: "faq" */ '../views/AboutView.vue') },
  { path: '/about', redirect: '/faq' },
  { path: '/memories', redirect: '/yr2023' },
  { path: '/yr2020', name: 'yr2020', component: year(20) },
  { path: '/yr2022', name: 'yr2022', component: year(22) },
  { path: '/yr2023', name: 'yr2023', component: year(23) },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, saved) {
    if (saved) return saved
    if (to.hash) return { selector: to.hash, offset: { x: 0, y: 72 }, behavior: 'smooth' }
    return { x: 0, y: 0 }
  }
})

export default router
