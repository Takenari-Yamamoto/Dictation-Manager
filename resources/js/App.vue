<template>
  <div>
    <v-app>
      <Header />
      <router-view />
      <Footer />
    </v-app>
  </div>
</template>

<script>
  import Message from './components/Message.vue';
  import Header from './components/Header';
  import Footer from './components/Footer';
  
  import { INTERNAL_SERVER_ERROR } from './util';

  export default {
    name: 'App',
    components: {
      Message,
      Header,
      Footer,
    },
    computed: {
      errorCode () {
        return this.$store.state.error.code;
      }
    },
    watch: {
    //データの変更を監視して、それをトリガーに非同期処理や複雑な処理を行う必要がある時に使える
      errorCode: {
        handler (val) {
          // オブジェクトの監視をするときはhandkerが必要
          if (val === INTERNAL_SERVER_ERROR) {
            this.$router.push('/500');
          }
        },
        immediate: true
        // trueの場合、初期読み込み時（dataと同等になるタイミング）に handler に指定された関数がすぐ実行される
        // つまり created で呼び出すのと同じことになる
      },
      $route () {
        this.$store.commit('error/setCode', null);
      }
    }
  };
</script>