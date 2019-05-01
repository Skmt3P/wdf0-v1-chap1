<template>
  <nav class="navbg flex items-center justify-between flex-wrap p-6">
    <div class="block flex items-center flex-no-shrink text-white mr-6">
      <h1 class="font-semibold text-xl tracking-tight">{{ siteTitle }}</h1>
    </div>
    <div class="block sm:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white" 
        @click="toggle">
        <svg 
          class="fill-current h-3 w-3" 
          viewBox="0 0 20 20" 
          xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div>
      <div
        :class="open ? 'block': 'hidden'" 
        class="right-menu flex-grow sm:flex sm:items-center sm:w-auto">
        <li class="text-sm sm:flex-grow">
          <a 
            href="#responsive-header" 
            class="no-underline block mt-4 sm:inline-block sm:mt-0  mr-4">
            Top
          </a>
          <a 
            href="#responsive-header" 
            class="no-underline block mt-4 sm:inline-block sm:mt-0 s mr-4">
            Twitter
          </a>
          <!-- <a 
              href="#responsive-header" 
              class="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-lighter hover:text-white mr-4">
              About
            </a> -->
          <!-- <a 
              href="#" 
              class="no-underline inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal hover:bg-white mt-4 sm:mt-0">
              SWITCH
            </a> -->
        </li>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => {
    return {
      open: false
    }
  },
  asyncData: () => {
    return {
      siteTitle: ''
    }
  },
  created() {
    this.siteTitle = this.$constant.siteTitle
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  }
}
</script>

<style scoped lang="scss">
.navbg {
  background-color: $navbar-bgcolor;
}
.right-menu {
  float: right;
}
</style>
