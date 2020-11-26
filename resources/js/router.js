import Vue from 'vue';
import Router from "vue-router";

import Homepage from './pages/Homepage.vue';
import BulltenBorad from './pages/BulletenBoard.vue';
import List from './pages/List.vue';
import MyPage from './pages/MyPage.vue';
import Support from './pages/Support.vue';
import Register from './pages/Register.vue';
import Login from './pages/Login.vue';

import Board from './pages/Board.vue';

//ページコンポーネントのインポート

Vue.use(Router);

export default new Router ({
    routes: [
        {
            path: '/',
            naem: 'board',
            component: Board
        },
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
            path: '/register',
            name: 'register',
            component: Register,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        }

    ]
});
