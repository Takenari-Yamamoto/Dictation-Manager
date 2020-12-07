<template>
  <v-app-bar
    color="primary"
    app
    dark
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
          class="white"
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
          class="white"
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
          class="white"
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
          class="white"
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
          class="white"
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
      <span v-if="isLogin" class="navbar__item">
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