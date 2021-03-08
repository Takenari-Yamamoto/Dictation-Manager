import Vue from 'vue';
import Vuex from 'vuex';

import auth from './auth';
import dictation from './dictation';
import error from './error';
import message from './message';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
    dictation,
    error,
    message,
  }
});

export default store;