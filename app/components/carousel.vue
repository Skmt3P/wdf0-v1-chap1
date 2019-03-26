<template>
  <div>
    <no-ssr>
      <carousel 
        ref = "mycarousel" 
        :autoplay="true"
        :navigation-enabled="true">
        <!-- <slide v-for = "slide in slides" :key="slide.id">
          <img v-bind:src="slide.slideUrl">
          <a v-if="slide.slideLink !== null" v-bind:href="slide.slideLink"></a>
        </slide> -->
        <!-- </carousel> -->
        <!-- <no-ssr> -->
        <!-- <carousel :per-page="1"> -->
        <!-- <slide v-for='i in 10' :key='slides.id'>Slide {{ slides.slide }}</slide> -->
        <slide>
          <span class = "label">test</span>
        </slide>
        <!-- <slide>
          <span class = "label">test1</span>
        </slide>
        <slide>
          <span class = "label">test2</span>
        </slide> -->
      </carousel>
    </no-ssr>
  </div> 
</template>

<script>
// import carousel from 'vue-carousel/src/Carousel.vue';
// import slide from 'vue-carousel/src/Slide.vue';
// import {Carousel, Slide} from 'vue-carousel';
export default {
  name: 'Carousel'
  // props: ['slides'],
  // data: function() {
  //   return {
  //     // showCarousel: false
  //   }
  // }
}
</script>

<style scoped>
</style>
