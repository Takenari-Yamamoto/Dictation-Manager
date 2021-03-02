<template>
  <v-footer
    color="primary"
    dark
    app
  >
    Dictation Manager
    <button
      v-if="isLogin"
      class="button button--link"
      @click="logout"
    >
      Logout
    </button>
    <RouterLink
      v-else
      class="button button--link"
      to="/login"
    >
      Login / Register
    </RouterLink>
  </v-footer>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
  computed: {
    ...mapState({
      apiStatus: state => state.auth.apiStatus
    }),
    ...mapGetters({
      isLogin: 'auth/check'
    })
  },
  methods: {
    async logout () {
      await this.$store.dispatch('auth/logout');
      if (this.apiStatus) {
        this.$router.push('');
      }
    }
  }
};
</script>