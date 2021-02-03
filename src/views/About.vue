<template>
  <div class="about">
    <h1 v-if="oidcIsAuthenticated">登录状态才能看到这句话</h1>
    <button v-if="!oidcIsAuthenticated" @click="authenticateOidc">Sign In</button>
    <button v-if="oidcIsAuthenticated" @click="signOut">Sign out</button>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'About',
    data() {
      return {}
    },
    computed: {
      ...mapGetters('oidcStore', {
        oidcIsAuthenticated: 'oidcIsAuthenticated',
      }),
    },
    methods: {
      ...mapActions('oidcStore', {
        authenticateOidc: 'authenticateOidc',
        signOutOidc: 'signOutOidc',
        signOutOidcSilent: 'signOutOidcSilent',
        removeOidcUser: 'removeOidcUser',
      }),
      signOut() {
        this.removeOidcUser().then(() => {
          this.signOutOidcSilent()
          this.$router.go(0)
        })
      },
    },
  }
</script>
