import Vue from 'vue'
import VueRouter from 'vue-router'
import {vuexOidcCreateRouterMiddleware} from 'vuex-oidc'
import store from '../store'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/sign-in-callback',
    name: 'SignInCallback',
    component: () => import(/* webpackChunkName: "sign-in-callback" */ '../views/oidc/SignInCallback'),
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
router.beforeEach(vuexOidcCreateRouterMiddleware(store))

export default router
