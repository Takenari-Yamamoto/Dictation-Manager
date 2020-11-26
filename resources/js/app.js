import Vue from 'vue';
import App from './App.vue';
import router from './router'; 
import vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import '@mdi/font/css/materialdesignicons.css';
import Vuetify from 'vuetify';

Vue.config.productionTip = false;
Vue.use(vuetify);
Vue.component('spinner', require('vue-simple-spinner'));

new Vue ({
  router,
  vuetify: new Vuetify(),
  render: h => h(App)
}).$mount("#app");