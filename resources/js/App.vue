<template>
  <div>
    <header :app="this" />

    <spinner v-if="loading" />
    <div v-else-if="initiated">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
  import Header from './components/Header';
  import Footer from './components/Footer';

  export default {
    name: 'App',
    components: { 
      // eslint-disable-next-line vue/no-unused-components
      Header,
      Footer,
    },
    data() {
      return {
        user: null,
        loading: false,
        initiated: false,
        // eslint-disable-next-line no-undef
        req: axios.create({
          // eslint-disable-next-line no-undef
          baseUrl: BASE_URL
        })
      };
    },
    methods: {
      init() 
      {

        this.loading = true;

        this.req.get('auth/init').then(response => {
          this.user = response.data;
          this.loading = false;
          this.initiated = true;
        });
      }
    }
  };
</script>
