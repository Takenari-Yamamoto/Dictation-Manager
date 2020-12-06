import Vue from 'vue';
import Router from "vue-router";

import Homepage from './pages/Homepage.vue';
import BulltenBorad from './pages/BulletenBoard.vue';
import List from './pages/List.vue';
import MyPage from './pages/MyPage.vue';
import Support from './pages/Support.vue';
import Login from './pages/Login.vue';

import store from './store';
import SystemError from './pages/errors/System.vue';

//ページコンポーネントのインポート

Vue.use(Router);

export default new Router ({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Homepage,
        },
        {
            path: '/list',
            name: 'list',
            component: List,
        },
        {
            path: '/bulleten_board',
            name: 'bulleten_board',
            component: BulltenBorad,
        },
        {
            path: '/mypage',
            name: 'mypage',
            component: MyPage,
        },
        {
            path: '/support',
            name: 'support',
            component: Support,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            beforeEnter (to, from, next) {
            // 定義されたルートにアクセスされてページコンポーネントが切り替わる直前に呼び出される関数
            // 第一引数 to はアクセスされようとしているルートのルートオブジェクト
            // 第二引数 from はアクセス元のルート
            // 第三引数 next はページの移動先（切り替わり先）を決めるための関数
                if (store.getters['auth/check']) {
                    next('/login');
                } else {
                    next();
                }
            }
        },
        {
            path: '/500',
            component: SystemError
        }
    ]
});
