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
        to="/HomePage"
        class="navbar__item white--text text-decoration-none"
      >
        Home
      </router-link>
      <router-link
        v-if="isLogin"
        to="/mypage"
        class="navbar__item white--text text-decoration-none"
      >
        My Page
      </router-link>
      <router-link
        v-if="isLogin"
        to="/bulleten_board"
        class="navbar__item white--text text-decoration-none"
      >
        Bulletin Borad
      </router-link>
      <router-link
        v-if="isLogin"
        to="/list"
        class="navbar__item white--text text-decoration-none"
      >
        List
      </router-link>
      <router-link
        v-if="isLogin"
        class="navbar__item white--text text-decoration-none"
        to="/support"
      >
        Support
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
      <span
        v-if="isLogin"
        id="name"
        class="navbar__item text-right"
      >
        {{ username }} 
      </span>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  computed: {
    isLogin () {
      return this.$store.getters['auth/check'];
    },
    username () {
      return this.$store.getters['auth/username'];
    }
  }
};
</script>
