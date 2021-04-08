<template>
  <v-main v-if="isLogin">
    <MyPage />
  </v-main>

  <v-main
    v-else
  >
    <transition name="fade">
      <div
        id="aaa"
        class="grey lighten-2 text-center"
      >
        <v-icon
          size="70"
        >
          mdi-pencil
        </v-icon>
        ✖︎ 
        <v-icon
          size="70"
        >
          mdi-laptop
        </v-icon>
        <h1
          id="title"
          class="pt-3"
        >
          Dictation Manager
        </h1>
        <p class="mb-0">
          Dictation Manager is a tool for English learners.
          It helps you to improve your English.
        </p>
        <p>
          Dictation Manager は英語学習者のためのツールです。
          あなたの英語力を高めます。
        </p>
        <v-btn
          color="primary"
          href="/login"
        >
          Let's Get Started
        </v-btn>
      </div>
    </transition>
  </v-main>
</template>

<script>
import MyPage from "../pages/MyPage";

export default {
  components: {
    MyPage
  },
  computed: {
    isLogin () {
      return this.$store.getters['auth/check'];
    },
  },
};
</script>

<style>
  #aaa {
    background-color: #EEEEEE;
    padding-top: 150px;
  }

  .v-icon {
    width: 200px;
  }

  .v-main {
    width: 100%;
  }

  .v-btn {
    margin-bottom: 200px;
  }

  #title {
    font-size: 40px;
    font-family: 'Montserrat', sans-serif;
  }

  p {
    padding-top: 10px;
    font-size: 15px;
    font-family: 'Montserrat', sans-serif;
  }

</style>