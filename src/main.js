import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import './style/index.css';
import setRem from "./setRem";
Vue.use(ElementUI)

Vue.config.productionTip = false;

window.addEventListener("resize", function () {
  setRem(750, 100);
});

if (process.env.NODE_ENV === 'development') {
  require('./mock')
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
