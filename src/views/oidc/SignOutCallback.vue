<template>
  <div></div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    name: 'SignOutCallback',
    methods: {
      ...mapActions('oidcStore', {
        signOutOidcSilent: 'signOutOidcSilent',
      }),
    },
    mounted() {
      this.signOutOidcSilent()
    },
  }
</script>

<style scoped>

</style>
