<template class="header">
  <v-app-bar
    app
    color="primary"
  >
    <RouterLink
      class="navbar__brand"
      to="/"
    >
      Dictation Manager
    </RouterLink>
    <div class="navbar__menu">
      <div
        v-if="isLogin"
        class="navbar__item"
      >
        <router-link
          to="/HomePage"
        >
          Home
        </router-link>
      </div>
      <div
        v-if="isLogin"
        class="navbar__item"
      >
        <router-link
          to="/mypage"
        >
          My Page
        </router-link>
      </div>
      <div
        v-if="isLogin"
        class="navbar__item"
      >
        <router-link
          to="/bulleten_board"
        >
          Bulletin Borad
        </router-link>
      </div>
      <div
        v-if="isLogin"
        class="navbar__item"
      >
        <router-link
          to="/list"
        >
          List
        </router-link>
      </div>
      <div
        v-if="isLogin"
        class="navbar__item"
      >
        <router-link
          to="/support"
        >
          Support
        </router-link>
      </div>
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
        class="navbar__item"
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

<style>
  .header {
    color: white;
  }
</style>