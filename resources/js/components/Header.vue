<template class="header">
  <v-app-bar
    app
    color="primary"
    class="white--text"
  >
    <RouterLink
      class="navbar__brand"
      to="/"
    >
      Dictation Manager
    </RouterLink>
    <div class="navbar__menu">
      <router-link
        v-if="isLogin"
        to="/list"
        class="navbar__item white--text text-decoration-none"
      >
        WORD LIST
      </router-link>
      <router-link
        v-if="isLogin"
        class="navbar__item white--text text-decoration-none"
        to="/support"
      >
        SUPPORT
      </router-link>
      <router-link
        v-if="isLogin"
        id="create_button"
        class="text-decoration-none ml-10"
        to="/Dictation"
      >
        <v-btn
          color="warning"
          dark
          @click="createDictation()"
        >
          CREATE NEW DICTATION!!
        </v-btn>
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
      };
      // eslint-disable-next-line no-undef
      axios.post('/api/dictation', dictation).then(res => {
        this.$router.push('/Dictation/'+ res.data.id);
      });
    },
    
  }
};
</script>
