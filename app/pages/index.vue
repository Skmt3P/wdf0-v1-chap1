<template>
  <div class="container">
    <div 
      v-if="isLoaded" 
      class="columns">
      <TheUserInfo class="column is-narrow is-3" />
      <TheTimeLine class="column is-narrow is-9" />
    </div>
  </div>
</template>

<script>
import auth from '~/plugins/auth'
import TheTimeLine from '~/components/TheTimeLine.vue'
import TheUserInfo from '~/components/TheUserInfo.vue'
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
    TheTimeLine,
    TheUserInfo
  },
  computed: {
    ...mapGetters(['user', 'users', 'posts', 'isLoaded'])
  },
  async mounted() {
    let user
    if (!this.user) user = await auth()
    await Promise.all([
      this.user
        ? Promise.resolve()
        : this.$store.dispatch('SET_CREDENTIAL', { user: user || null }),
      this.posts.length
        ? Promise.resolve()
        : this.$store.dispatch('INIT_POSTS'),
      this.users.length ? Promise.resolve() : this.$store.dispatch('INIT_USERS')
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
  display: flex;
  align-items: flex-start;
  /* flex-direction: column; */
}
</style>
