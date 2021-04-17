import Vue from 'vue';
import App from './App.vue';
import router from './router'; 
import vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import '@mdi/font/css/materialdesignicons.css';
import Vuetify from 'vuetify';
import "vuetify/dist/vuetify.css";
import store from './store';
import './bootstrap';
import VueResource from 'vue-resource';
import VueQuillEditor from 'vue-quill-editor';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import { VPip } from 'v-pip';

Vue.use(VueQuillEditor);
Vue.use(VueResource);
Vue.use(VPip);

Vue.config.productionTip = false;
Vue.use(vuetify);

const createApp = async () => {
  await store.dispatch('auth/currentUser');

  new Vue ({
    router,
    store,
    vuetify: new Vuetify(),
    render: h => h(App)
  }).$mount("#app");
};

createApp();