import { OK } from '../util';
import axios from 'axios';


const state = {
  user: null,
  apiStatus: null
};
  
const getters = {
  // state を加工した値を出力する
  // 必ず引数にstateを持つ
  check: state => !! state.user,
  username: state => state.user ? state.user.name : ''
};
  
const mutations = {
  // 同期処理のみ
  // stateの値を更新するために使用
  // 第一引数は必ずstate、ミューテーションを呼び出すときの実引数は仮引数では第二引数以降として渡される
  setUser (state, user) {
    state.user = user;
  },
    // context.commit('setUser', response.data) にあるresponse.dataが
    // setUserの第二引数にいき、それをstateの中のuserに定義してる
  setApiStatus (state, status) {
    state.apiStatus = status;
  }
};

const actions = {
  // 非同期処理が可能
  // Mutationに対してcommitを行うことで間接的に状態を変更
  async register (context, data) {
    // action の第一引数にはコンテキストオブジェクトが渡される
    // Promissのawait/catchパターン
    // リクエストをaxiosで送る
    const response = await axios.post('/api/register', data);
    context.commit('setUser', response.data);
    // mutationsを経由して(commit)stateを更新
    // response.data が setUser の第2引数にいく
    // 第一引数には mutations の関数
    // 第2引数には置き換えたい値をいれる
    // context オブジェクトとは？
    
  },
  async login (context, data) {
    context.commit('setApiStatus', null);
    const response = await axios.post('/api/login', data)
      .catch(err => err.response || err);
    
      if(response.status === OK) {
        context.commit('setApiStatus', true);
        context.commit('setUser', response.data);
        return false;
      }
      context.commit('setApiStatus', false);
      context.commit('error/setCode', response.status, { root: true });
  },
  async logout (context) {
    const response = await axios.post('/api/logout');
    context.commit('setUser', null);
  },
  async currentUser (context) {
    const response = await axios.get('/api/user');
    const user = response.data || null;
    context.commit('setUser', user);
  }
};

console.log(actions);

  export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
  };
  