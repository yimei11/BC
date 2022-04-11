import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./rem";
import Vant from 'vant';
import 'vant/lib/index.css';
import plugins from "../src/plugins/myplugin"
Vue.use(plugins)
Vue.use(Vant)
Vue.config.productionTip = false;
if(process.env.NODE_ENV==='development'){
  require('./mock')
}
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
