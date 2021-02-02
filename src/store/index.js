import Vue from 'vue'
import Vuex from 'vuex'
import {vuexOidcCreateStoreModule} from 'vuex-oidc'
import {oidcSettings} from '../config/oidc'
import utility from '../config/utility'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',

  state: {},
  mutations: {},
  actions: {},
  modules: {
    oidcStore: vuexOidcCreateStoreModule(
      oidcSettings,
      {
        namespaced: true,
        publicRoutePaths: [
          '/',
        ],
      },
      {
        userLoaded: (user) => {
          console.log('OIDC 用户已加载', user)
          utility.setToken(user.access_token)
        },
        userUnloaded: () => {
          console.log('OIDC 用户已卸载')
        },
        accessTokenExpiring: () => {
          console.log('OIDC 访问令牌即将过期')
        },
        accessTokenExpired: () => {
          console.log('OIDC 访问令牌已经过期')
          window.localStorage.clear()
        },
        silentRenewError: () => {
          console.log('OIDC 静默续订失败')
          window.localStorage.clear()
        },
        userSignedOut: () => {
          console.log('OIDC 用户已注销')
          window.localStorage.clear()
        },
        // oidcError 和 automaticSilentRenewError 事件不是来自于客户端，而是在客户端实现的
        oidcError: (payload) => {
          console.log(`OIDC 发生错误`, payload)
        },
        automaticSilentRenewError: (payload) => {
          console.log('OIDC 自动静默续订失败', payload)
        },
      },
    ),
  },
})
