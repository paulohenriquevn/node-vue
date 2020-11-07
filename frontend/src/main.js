import Vue from 'vue'
import store from "./store";
import router from "./router";
import App from './App.vue'
import {
  install,
} from 'element-ui';

import "element-ui/lib/theme-chalk/index.css";
import '@/assets/main.scss';

install(Vue);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
