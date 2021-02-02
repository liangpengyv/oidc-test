<template>
  <div class="home">
    <p>这是一个开放访问的页面</p>
    <button v-if="!oidcIsAuthenticated" @click="authenticateOidc">Sign In</button>
    <button v-if="oidcIsAuthenticated" @click="signOutOidc">Sign out</button>
    <br/>
    <img alt="Vue logo" src="../assets/logo.png">
    <p v-if="oidcIsAuthenticated">这句话是登录后才会展示的受保护内容</p>
    <p>{{ $store.state.oidcStore.access_token }}</p>
    <p v-if="oidcUser">{{ oidcUser }}</p>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'Home',
    data() {
      return {}
    },
    computed: {
      ...mapGetters('oidcStore', {
        oidcIsAuthenticated: 'oidcIsAuthenticated',
        oidcUser: 'oidcUser',
      }),
    },
    methods: {
      ...mapActions('oidcStore', {
        authenticateOidc: 'authenticateOidc',
        signOutOidc: 'signOutOidc',
      }),
    },
  }
</script>

<style scoped>

</style>
