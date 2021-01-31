import Vue from 'vue';
import Router from "vue-router";

import Dictation from './pages/Dictation.vue';
import BulltenBorad from './pages/BulletenBoard.vue';
import List from './pages/List.vue';
import MyPage from './pages/MyPage.vue';
import Support from './pages/Support.vue';
import Login from './pages/Login.vue';
import Video from './pages/Video.vue';
import Error from './pages/errors/Error.vue';

import store from './store';
import SystemError from './pages/errors/System.vue';

//ページコンポーネントのインポート

Vue.use(Router);

export default new Router ({
    mode: 'history',
    routes: [
        {
            path: '/Dictation/:dictationId',
            name: 'dictation.show',
            component: Dictation,
            props: true
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
            path: '',
            name: 'mypage',
            component: MyPage,
        },
        {
            path: '/support',
            name: 'support',
            component: Support,
        },
        {
            path: '/Video',
            name: 'Video',
            component: Video,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            beforeEnter (to, from, next) {
                if (store.getters['auth/check']) {
                    next('/');
                } else {
                    next();
                }
            }
        },
        {
            path: '/500',
            component: SystemError
        },
        {
            path: '*',
            name: 'Error',
            component: Error
        }
    ]
});
