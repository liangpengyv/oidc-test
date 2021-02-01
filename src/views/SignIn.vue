<template>
  <div>
    <h1>登入</h1>
    <el-input v-model="username" placeholder="请输入用户名"></el-input>
    <el-input v-model="password" placeholder="请输入密码" show-password></el-input>
    <el-button type="primary" @click="signIn">登入</el-button>
  </div>
</template>

<script>
  import accountService from '../service/personal-center/account.service'
  import LoginInputModel from '../model/personal-center/login-input-model'
  import oidc from 'oidc-client'
  import {oidcSettings} from '../config/oidc'

  const mgr = new oidc.UserManager(oidcSettings)

  export default {
    name: 'SignIn',
    data() {
      return {
        username: '',
        password: '',
      }
    },
    methods: {
      signIn() {
        const returnUrl = unescape(this.$route.fullPath.replace('/sign-in?returnUrl=', ''))
        console.log(returnUrl)
        const loginInputModel = new LoginInputModel(
          this.username,
          this.password,
          false,
          returnUrl,
          'login',
        )
        accountService.login(loginInputModel).then(response => {
          if (response.code === 200) {
            window.location.replace('http://localhost:12001' + returnUrl)
          } else {
            this.$message.error('登录失败，' + response.message)
          }
        })
      },
    },
  }
</script>

<style scoped>

</style>
