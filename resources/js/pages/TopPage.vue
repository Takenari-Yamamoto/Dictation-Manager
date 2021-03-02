<template>
  <div v-if="isLogin">
    <MyPage />
  </div>

  <div
    v-else
    class="main"
  >
    <img src="data:image/png;base64,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">
    <h1 id="title">
      Welcome to Dictation Manager !!
    </h1>
    <p>
      Dictation Manager is a tool for English learners. 
      It helps you to improve your English!!
    </p>
    <v-btn
      color="primary"
      href="/login"
    >
      Let's Get Started
    </v-btn>
  </div>
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
  .main {
    margin: auto;
    text-align: center;
  }
  #title {
    padding-top: 20px;
    font-size: 30px;
  }

  p {
    padding-top: 10px;
    font-size: 20px;
  }

</style>