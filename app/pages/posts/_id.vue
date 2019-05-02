<template lang="html">
  <div class="container">
    <div class="columns">
      <div
        v-if="formattedTitle && formattedUrl"
        class="column"
      >
        <article class="media">
          <figure class="media-left">
            <p class="image is-middle is-64x64"><img :src="img_src"></p>
          </figure>
          <div class="media-content context">
            <strong>{{ themeName }}</strong>
            <small class="text-right">{{ postDate }}</small>
            <br>
            <p 
              class="context"
              v-html="formattedTitle" />
            <p
              class="context"
              v-html="formattedUrl" />
          </div>
        </article>
        <br>
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
    themeName() {
      return this.post.themeName ? this.post.themeName : ''
    },
    postDate() {
      return this.post.date
        ? String(this.post.date).slice(0, String(this.post.date).indexOf('G'))
        : ''
    },
    img_src() {
      return require(`~/assets/img/${this.post.themeId}.png`)
    },
    formattedTitle() {
      return link(h(this.post ? `【${this.post.tag}】${this.post.title}` : ''))
    },
    formattedUrl() {
      return link(h(this.post ? `【URL】${this.post.url}` : ''))
    },
    ...mapGetters(['post'])
  }
}
</script>
<style scoped>
img {
  border-radius: 50%;
  overflow: hidden;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.media {
  background-color: white;
  border-width: 1px;
  border-color: gray;
  padding: 10px;
  border-radius: 10px 10px 10px 10px;
}

.body {
  display: inline-block;
  margin-top: 6px;
}

.context {
  overflow-wrap: break-word;
}

.text-right {
  float: right;
}
</style>
