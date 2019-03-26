<template lang="html">
  <li 
    v-if="post.user" 
    class="media">
    <figure class="media-left">
      <p class="image is-64x64"><img :src="post.user.icon" ></p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{{ post.user.name }}</strong> <br >
          <span 
            class="body" 
            v-html="formattedPost" />
        </p>
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
  computed: {
    formattedPost() {
      return link(h(this.post.body))
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
</style>
