<<<<<<< HEAD
import axios from 'axios'

=======
>>>>>>> de248c2e58efbd9400886f4cc138dd81860c7cc6
const state = {
    user: null
  };
  
<<<<<<< HEAD
  const getters = {
    check: state => !! state/user,
    username: state => state.user ? state.user.name : ''
  };
=======
  const getters = {};
>>>>>>> de248c2e58efbd9400886f4cc138dd81860c7cc6
  
  const mutations = {
    setUser (state, user) {
      state.user = user;
    }
  };
  
  const actions = {
    async register (context, data) {
      const response = await axios.post('/api/register', data);
      context.commit('setUser', response.data);
    },
    async login (context, data) {
      const response = await axios.post('/api/login', data);
      context.commit('setUser', response.data);
    },
    async logout (context) {
      const response = await axios.post('/api/logout');
      context.commit('setUser', null);
    }
  };
  
  export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
  };