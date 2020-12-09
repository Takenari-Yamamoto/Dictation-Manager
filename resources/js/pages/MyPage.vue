<template>
  <v-main>
    <v-container v-if="isLogin">
      <v-row>
        <v-col
          v-for="n in 24"
          :key="n"
          cols="4"
        >
          <v-card height="200" />
        </v-col>
      </v-row>
    </v-container>
    <v-container v-else>
      <div>ログインしてね</div>
    </v-container>
  </v-main>
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
    },
  };
</script>