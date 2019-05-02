<template lang="html">
  <li 
    class="media">
    <figure class="media-left">
      <p class="image is-middle is-64x64"><img :src="img_src"></p>
    </figure>
    <div class="media-content">
      <div class="content">
        <div>
          <strong>{{ post.themeName }}</strong>
          <small class="text-right">{{ String(post.date.toDate()).slice(0,String(post.date.toDate()).indexOf('G')) }}</small>
        </div>
        <span 
          class="body" 
          v-html="formattedPost" />
      </div>
      <nav class="level is-mobile">
        <div class="level-left"/>
        <div class="level-right">
          <a class="level-item">
            <a
              :href="`/posts/${post.id}`"
              target="_blank"
              class="icon is-small"
            ><i class="fa fa-eye"/></a>
          </a>
        </div>
      </nav>
    </div>
  </li>
</template>

<script>
import h from 'htmlspecialchars'
import { link } from 'autolinker'

export default {
  props: {
    post: {
      type: Object,
      default() {}
    }
  },
  data() {
    return {
      img_src: require(`../assets/img/${this.post.themeId}.png`)
    }
  },
  computed: {
    formattedPost() {
      return link(h(`【${this.post.tag}】${this.post.title}`))
    }
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

.body {
  display: inline-block;
  margin-top: 6px;
}

.media {
  background-color: white;
  border-width: 1px;
  border-color: gray;
  padding: 10px;
  border-radius: 10px 10px 10px 10px;
}

.text-right {
  float: right;
}
</style>
