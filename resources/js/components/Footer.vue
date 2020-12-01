<template>
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
<<<<<<< HEAD
      Logout
    </button>
  </v-footer>
=======
      Dictation Manager
      <button
        class="button button--link"
        @click="logout"
      >
        Logout
      </button>
    </v-footer>
  </v-app>
>>>>>>> de248c2e58efbd9400886f4cc138dd81860c7cc6
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