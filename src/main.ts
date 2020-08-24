import Vue from "vue";
import App from "./App.vue";
import VueI18n from "vue-i18n";
import i18n from "./i18n";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
Vue.use(VueI18n);

new Vue({
  i18n,
  vuetify,
  render: h => h(App)
}).$mount("#app");
