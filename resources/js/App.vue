<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
  import Header from './components/Header';
  import Footer from './components/Footer';
  export default {
    name: 'App',
    components: {
      Header,
      Footer,
    },
    data() {
      return {
        listing : []
      };
    },
    mounted() {
      this.$http.get("/api/list").then(response => {
        this.listing = response.data;
      });
    }
  };
</script>