<template>
  <v-app>
    <v-footer
      color="primary"
      dark
      app
    >
      Dictation Manager
      <button
        class="button button--link"
        @click="logout"
      >
        Logout
      </button>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  methods: {
    async logout () {
      await this.$store.dispatch('auth/logout');

      this.$router.push('/login');
    }
  }
};
</script>