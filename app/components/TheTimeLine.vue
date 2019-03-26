<template lang="html">
  <div 
    class="timeline" 
    style="padding-top: 0;">
    <TheTimeLinePostArea 
      v-if="!!user" 
      class="post-area" />
    <ul
      :style="{
        'margin-top': !!user ? 'auto' : '32px',
        'padding-bottom': '16px'
      }"
      class="posts"
    >
      <transition-group name="post">
        <AppPost
          v-for="post in posts"
          v-if="post.user"
          :post="post"
          :key="post.id"
          class="post"
        />
      </transition-group>
    </ul>
  </div>
</template>

<script>
import AppPost from '~/components/AppPost.vue'
import { mapGetters } from 'vuex'
import TheTimeLinePostArea from '~/components/TheTimeLinePostArea.vue'

export default {
  components: {
    AppPost,
    TheTimeLinePostArea
  },
  computed: {
    ...mapGetters(['user', 'posts'])
  }
}
</script>

<style scoped>
.post-enter-active {
  animation: slideIn 0.3s linear;
}

.posts {
  background: #fff;
  padding-top: 12px;
  border: solid 1px #e6e6e6;
}

@keyframes slideIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
