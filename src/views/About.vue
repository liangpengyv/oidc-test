<template>
  <div class="about">
    <h1>This is an about page</h1>
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
        removeOidcUser: 'removeOidcUser',
      }),
      signOut() {
        this.removeOidcUser().then(() => {
          console.log(this.$route)
        })
      },
    },
  }
</script>
