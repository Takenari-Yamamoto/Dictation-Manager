<template>
  <v-tabs
    color="deep-purple accent-4"
    right
  >
    <p>Recommendation For ...</p>
    <v-tab>Beginner</v-tab>
    <v-tab>Intermediate</v-tab>
    <v-tab>Advanced</v-tab>

    <v-tab-item
      v-for="n in 3"
      :key="n"
    >
      <v-container fluid>
        <v-row>
          <v-col
            cols="12"
            md="3"
          >
            <v-img
              :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
              :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
              aspect-ratio="1"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-tab-item>
  </v-tabs>
</template>

<script>
import axios from 'axios';
import Vue from 'vue';
import VueYoutube from 'vue-youtube';

Vue.use(VueYoutube);

export default {
  name: "Recommend",
  data() {
    return {
      videoId: '',
      videos_for_beginners: [],
      videos_for_intermdediate: [],
      videos_for_advanced: [],
    };
  },
  created() {
    this.beginner();
  },
  methods: {
    beginner() {
      axios.get("/api/searchVideo", {
        params: {
          keyword: "Ted Ed"
        }
      })
      .then((res) => {
        this.videos_for_beginners = res.data;
        console.log(this.videos_for_beginners);
      });
    }
  }
};
</script>