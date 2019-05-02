<template>
  <div id="app">
    <div class="wrapper">
      <TheNavbar />
      <nuxt />
    </div>
  </div>
</template>

<script>
import TheNavbar from '~/components/TheNavbar.vue'

export default {
  components: {
    TheNavbar
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  padding: 0px 32px 32px 32px;
}
</style>
