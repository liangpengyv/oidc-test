import Vue from 'vue'
import Vuex from 'vuex'
import {vuexOidcCreateStoreModule} from 'vuex-oidc'
import {oidcSettings} from '../config/oidc'

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
        },
        userUnloaded: () => {
          console.log('OIDC 用户已卸载')
        },
        accessTokenExpiring: () => {
          console.log('OIDC 访问令牌即将过期')
        },
        accessTokenExpired: () => {
          console.log('OIDC 访问令牌已经过期')
        },
        silentRenewError: () => {
          console.log('OIDC 静默续订失败')
        },
        userSignedOut: () => {
          console.log('OIDC 用户已注销')
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
