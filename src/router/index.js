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
    path: '/sign-out-callback',
    name: 'SignOutCallback',
    component: () => import(/* webpackChunkName: "sign-out-callback" */ '../views/oidc/SignOutCallback'),
  },
  // {
  //   path: '/oidc-silent-renew',
  //   name: 'OidcSilentRenew',
  //   component: () => import(/* webpackChunkName: "oidc-silent-renew" */ '../views/oidc/OidcSilentRenew'),
  // },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: () => import(/* webpackChunkName: "sign-in" */ '../views/SignIn'),
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
router.beforeEach(vuexOidcCreateRouterMiddleware(store, 'oidcStore'))

export default router
