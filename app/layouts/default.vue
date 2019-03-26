<template>
  <div id="app">
    <div 
      v-if="!isLoaded" 
      class="wrapper wrapper-loading">
      <TheLoading />
    </div>
    <div 
      v-show="isLoaded" 
      class="wrapper wrapper-loaded">
      <TheNavbar />
      <nuxt />
    </div>
  </div>
</template>

<script>
import TheNavbar from '~/components/TheNavbar.vue'
import TheLoading from '~/components/TheLoading.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    TheLoading,
    TheNavbar
  },
  computed: {
    ...mapGetters(['isLoaded'])
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  padding: 32px;
}

.wrapper-loading {
  background: #fff;
  padding-top: 0;
}

.wrapper-loaded {
  background: #fafafa;
  padding-top: 0;
}

TheFooter {
  margin-bottom: 0;
  position: sticky;
}
</style>
