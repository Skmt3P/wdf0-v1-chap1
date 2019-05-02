// Context Injecting for Client side
import Vue from 'vue'

// Webアプリケーションで使用する定数を一元管理
Vue.prototype.$constant = {
  // TheNavbar.vue
  siteTitle: 'Oi-deyo JavaScript',
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
