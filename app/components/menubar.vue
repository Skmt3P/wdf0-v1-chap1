<template>
  <section class="level is-mobile">
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">{{ returnName }}</p>
        <a><p class="link is-info">{{ returnName2 }}</p></a>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">じょうほう</p>
        <p class="link is-info">INFO</p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">いーえす</p>
        <p class="link is-info">ES2018</p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">あんぎゅらー</p>
        <p class="link is-info">Angular.js</p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">りあくと</p>
        <p class="link is-info">React.js</p>
      </div>
    </div>
    <div class="level-item has-text-centered">
      <div>
        <p class="heading">びゅー</p>
        <p class="link is-info">Vue.js</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Menubar',
  computed: {
    returnName: function() {
      return this.$clientConstant.test1
    },
    returnName2: function() {
      return this.$clientConstant.test1
    }
  }
}
</script>

<style scoped>
</style>
