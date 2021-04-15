<template>
  <v-main v-if="isLogin">
    <MyPage />
  </v-main>

  <v-main
    v-else
  >
    <transition appear>
      <div
        id="toppage_main"
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
          id="login_btn"
          color="primary"
          href="/login"
          large
        >
          今すぐ始める
        </v-btn>
      </div>
    </transition>
    <div id="support">
      <Support />
    </div>
  </v-main>
</template>

<script>
import MyPage from "../pages/MyPage";
import Support from "../pages/Support";

export default {
  components: {
    MyPage,
    Support
  },
  computed: {
    isLogin () {
      return this.$store.getters['auth/check'];
    },
  },
};
</script>

<style>
  #toppage_main {
    padding-top: 150px;
  }

  .v-main {
    width: 100%;
  }

  #login_btn {
    margin-bottom: 200px;
  }

  .v-enter-active, .v-leave-active {
    transition: opacity 2.5s;
  }

  .v-enter, .v-leave-to {
    opacity: 0;
  }

  #title {
    font-size: 40px;
    font-family: 'Montserrat', sans-serif;
  }

  #toppage_main p {
    padding-top: 10px;
    font-size: 15px;
    font-family: 'Montserrat', sans-serif;
  }

  #support {
    margin: 50px;
  }

  @media screen and (max-width: 600px) {

    #title {
      font-size: 25px;
    }

    #toppage_main p {
      font-size: 12px;
    }

    #login_btn {
      width: 5px;
      font-size: 9px;
    }

  }

</style>