<template>
  <div class="margin-zero">
    <div class="container">
      <div class="columns">
        <TheTimeLine class="column is-middle" />
      </div>
    </div>
  </div>
</template>

<script>
import TheTimeLine from '~/components/TheTimeLine.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: 'https://skmt3p.com/'
        }
      ]
    }
  },
  components: {
    TheTimeLine
  },
  computed: {
    ...mapGetters(['posts', 'isLoaded'])
  },
  async mounted() {
    await Promise.all([
      this.posts.length ? Promise.resolve() : this.$store.dispatch('INIT_POSTS')
    ])
    this.loadComplete()
  },
  methods: {
    ...mapActions(['loadComplete'])
  }
}
</script>

<style scoped>
.container {
  width: 100% !important;
  margin: auto !important;
  display: flex;
  align-items: flex-start;
  /* flex-direction: column; */
}
</style>
