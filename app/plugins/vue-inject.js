// Context Injecting for Client side
import Vue from 'vue'

// test method
Vue.prototype.$clientInjectedFunction = string =>
  console.log('This is an example', string)

Vue.prototype.$constant = {
  // TheNavbar.vue
  siteTitle: 'Oi-deyo MACHIDA & SAGAMIHARA',
  test2: {
    test21: ['これはテス2-1', 'this is test2-1'],
    test22: 'test2-2 DAYO'
  },
  header: {
    label: ['HOME'],
    link: ['/']
  },
  menubar: {
    label: ['TOP', 'NOTICE', 'TOP'],
    ruby: ['トップ', 'お知らせ'],
    link: ['/']
  }
}
