import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/yr2020',
    name: 'yr2020',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/TbYear20.vue')
    }
  },
  {
    path: '/yr2022',
    name: 'yr2022',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/TbYear22.vue')
    }
  },
  {
    path: '/yr2023',
    name: 'yr2023',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/TbYear23.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
