<template class="header">
  <v-app-bar
    app
    color="primary"
    class="white--text header_items"
  >
    <RouterLink
      id="nav_title"
      class="navbar__brand"
      to="/"
    >
      Dictation Manager
    </RouterLink>
    <v-spacer />
    <div class="navbar__menu">
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
      
      <!-- ログインしていないときの表示↓ -->
      <div
        v-else
        class="navbar__item"
      >
        <RouterLink
          class="button button--link"
          to="/login"
        >
          Login / Register
        </RouterLink>
      </div>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  data: function() {
      return {
        dictations: [],
      };
    },
  computed: {
    isLogin () {
      return this.$store.getters['auth/check'];
    },
    username () {
      return this.$store.getters['auth/username'];
    }
  },
  methods: {
    createDictation: function() {
      const dictation = {
        content: '',
        title: 'no title',
        // selected_videoId: ''
      };
      // eslint-disable-next-line no-undef
      axios
        .post('/api/dictation', dictation)
        .then(res => {
        this.$router.push('/Dictation/'+ res.data.id);
      });
    },
    // ALTER TABLE dictations RENAME COLUMN selectted_videoId TO selected_videoId
  }
};
</script>

<style>

.v-toolbar__content {
  width: 80%;
  margin: 0 auto;
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
