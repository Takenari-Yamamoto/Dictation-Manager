<template class="header">
  <header>
    <v-app-bar
      app
      color="primary"
    >
      
      <v-toolbar-title to="/">
        <RouterLink
          id="nav_title"
          class="navbar__brand"
          to="/"
        >
          Dictation Manager
        </RouterLink>
      </v-toolbar-title>
      <v-app-bar-nav-icon
        id="for_smartphone"
        class="hidden-sm-and-up"
        @click="drawer = true"
      />
      <!-- PC用表示 -->
      <!-- マイページへ -->
      <div
        id="pc_menu"
        class="hidden-xs-only"
      >
        <router-link
          v-if="isLogin"
          id="mypage"
          class="navbar__item white--text text-decoration-none"
          to="/"
        >
          <v-tooltip bottom>
            <template #activator="{ on, attrs }">
              <v-icon
                dark
                v-bind="attrs"
                v-on="on"
              >
                mdi-account
              </v-icon>
            </template>
            <span>My Page</span>
          </v-tooltip>
        </router-link>
        <!-- 新規作成 -->
        <router-link
          v-if="isLogin"
          id="create_button"
          class="navbar__item white--text text-decoration-none"
          to="/Dictation"
        >
          <v-tooltip bottom>
            <template #activator="{ on, attrs }">
              <v-icon
                dark
                v-bind="attrs"
                v-on="on"
                @click="createDictation()"
              >
                mdi-pencil
              </v-icon>
            </template>
            <span>Create New Dictation</span>
          </v-tooltip>
        </router-link>
        <!-- word list -->
        <router-link
          v-if="isLogin"
          to="/list"
          class="navbar__item white--text text-decoration-none"
        >
          <v-tooltip left>
            <template #activator="{ on, attrs }">
              <v-icon
                dark
                v-bind="attrs"
                v-on="on"
              >
                mdi-book-open-variant
              </v-icon>
            </template>
            <span>Word List</span>
          </v-tooltip>
        </router-link>
        <!-- recommend -->
        <router-link
          v-if="isLogin"
          to="/recommendation"
          class="navbar__item white--text text-decoration-none"
        >
          <v-tooltip left>
            <template #activator="{ on, attrs }">
              <v-icon
                dark
                v-bind="attrs"
                v-on="on"
              >
                mdi-thumb-up-outline
              </v-icon>
            </template>
            <span>Recommendation</span>
          </v-tooltip>
        </router-link>
        <!-- 説明書 -->
        <router-link
          v-if="isLogin"
          class="navbar__item white--text text-decoration-none"
          to="/support"
        >
          <v-tooltip bottom>
            <template #activator="{ on, attrs }">
              <v-icon
                dark
                v-bind="attrs"
                v-on="on"
              >
                mdi-help-circle-outline
              </v-icon>
            </template>
            <span>Support</span>
          </v-tooltip>
        </router-link>
      </div>
    </v-app-bar>
    <!-- スマホ用ハンバーガーメニュー ここから -->
    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group>
          <v-list-item to="/">
            <v-list-item-title>HOME</v-list-item-title>
          </v-list-item>
          <v-list-item @click="createDictation()">
            <v-list-item-title>Create</v-list-item-title>
          </v-list-item>
          <v-list-item to="/list">
            <v-list-item-title>List</v-list-item-title>
          </v-list-item>
          <v-list-item to="recommendation">
            <v-list-item-title>Recommendation</v-list-item-title>
          </v-list-item>
          <v-list-item to="support">
            <v-list-item-title>Support</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <!-- スマホ用ハンバーガーメニュー ここまで -->
  </header>
</template>

<script>
import axios from 'axios';

export default {
  data: function() {
      return {
        dictations: [],
        drawer: false
      };
    },
  computed: {
    isLogin () {
      return this.$store.getters['auth/check'];
    },
    username () {
      return this.$store.getters['auth/username'];
    },
  },
  methods: {
    createDictation () {
      const dictation = {
        content: '',
        title: 'no title',
      };
      axios
        .post('/api/dictation', dictation)
        .then(res => {
        this.$router.push('/Dictation/'+ res.data.id);
      });
    },
    // ALTER TABLE dictations RENAME COLUMN selectted_videoId TO selected_videoId
  },
  async logout () {
    await this.$store.dispatch('auth/logout');
    if (this.apiStatus) {
      this.$router.push('');
    }
  }
};
</script>

<style>

.v-toolbar__content {
  color: white;
  margin: 0 auto;
  width: 80%;
  justify-content: space-between;
}


.v-toolbar__title {
  overflow: visible !important;
  margin-right: 50px !important;
}

#nav_title {
  font-size: 15px;
}

@media screen and (max-width: 500px) {
  .v-toolbar__content {
    width: 100%;
    margin: 0 auto;
  }
}

</style>
