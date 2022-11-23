import Vue from 'vue';
import entry from './app.vue';
import VueRouter from 'vue-router';
import routes from './route.config';
import MainHeader from './components/header.vue';
import demoBlock from './components/demo-block.vue';
import SideNav from './components/side-nav';
import FooterNav from './components/footer-nav';
import title from './i18n/title';
// 引入自己的element-ui
import FosunHis from '../lib/fosun-his.common.js';
import hljs from 'highlight.js';
import '../lib/theme-chalk/index.css';
import './demo-styles/index.scss';
import './assets/styles/common.css';
import icon from './icon.json';
Vue.use(FosunHis);

Vue.use(VueRouter);
Vue.component('main-header', MainHeader);
Vue.component('demo-block', demoBlock);
Vue.component('side-nav', SideNav);
Vue.component('footer-nav', FooterNav);

Vue.prototype.$icon = icon; // Icon 列表页用

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
});


router.afterEach(route => {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
  const data = title[route.meta.lang];
  for (let val in data) {
    if (new RegExp('^' + val, 'g').test(route.name)) {
      document.title = data[val];
      return;
    }
  }
  document.title = 'FosunHis';
  ga('send', 'event', 'PageView', route.name);
});
new Vue({
  ...entry,
  router
}).$mount('#app');
