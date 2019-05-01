<template lang="html">
  <div class="container">
    <div class="columns">
      <div
        v-if="formattedPost"
        class="column is-three-fifths is-offset-one-fifth"
      >
        <h1 class="title text-is-centered">{{ post.name }}さんの投稿</h1>
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-left"/>
              <div class="media-content">
                <strong>TEST</strong>
              </div>
            </div>
            <div class="content"><p v-html="formattedPost" /></div>
          </div>
        </div>
        <i
          class="is-text-centered" 
          style="margin-top: 16px;">
          <nuxt-link to="/"> Back to Timeline </nuxt-link>
        </i>
      </div>
    </div>
  </div>
</template>

<script>
import h from 'htmlspecialchars'
import { link } from 'autolinker'
import { mapGetters } from 'vuex'

export default {
  layout: 'single',
  async asyncData({ params, store }) {
    await store.dispatch('INIT_SINGLE', params)
    return {
      id: params.id
    }
  },
  head() {
    return {
      title: `坂本さんの投稿 - 'Nuxt Firebase SNS Mock`,
      meta: [{ hid: 'description', name: 'description', content: 'ンゴー' }],
      link: [
        {
          rel: 'canonical',
          href: `https://nuxt-firebase-sns-example.potato4d.me/posts/${this.id}`
        }
      ]
    }
  },
  computed: {
    formattedPost() {
      return link(h(this.post ? this.post.title : ''))
    },
    ...mapGetters(['post'])
  }
}
</script>
