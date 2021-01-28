<template>
  <div></div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    name: 'SignInCallback',
    methods: {
      ...mapActions([
        'oidcSignInCallback',
      ]),
    },
    mounted() {
      this.oidcSignInCallback()
        .then((redirectPath) => {
          this.$router.push(redirectPath)
        })
        .catch((error) => {
          console.log(error)
          this.$router.push('/oidc-callback-error')
        })
    },
  }
</script>

<style scoped>

</style>
