<template>
  <v-main>
    <p class="ml-5 mt-5">
      おすすめ動画
    </p>
    <template v-for="(value, key) in recommend_video">
      <v-card
        :key="key"
        class="mx-auto"
        max-width="80%"
        outlined
      >
        <v-row>
          <v-col
            md="6"
            sm="12"
          >
            <youtube
              id="rec_youtube"
              ref="youtube"
              class="mr-0 ml-5"
              :video-id="value.id.videoId"
              width="400px"
              height="200px"
              @playing="playingVideo()"
            />
          </v-col>
          <v-col
            md="6"
            sm="12"
          >
            <div id="movie_title">
              <p>
                {{ value.snippet.title }}
              </p>
            </div>
            <div id="movie_description">
              <p>{{ value.snippet.description }}</p>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </template>
  </v-main>
</template>

<script>
import axios from 'axios';
import Vue from 'vue';
import VueYoutube from 'vue-youtube';
Vue.use(VueYoutube);

export default {
  data () {
    return {
      tabs: null,
      recommend_video: []
    };
  },
  created() {
    this.get_video();
  },
  methods: {
    get_video () {
      axios.get("/api/searchVideo", {
        params: {
          keyword: "Ted Ed",
        }
      })
      .then((res) => {
        this.recommend_video = res.data;
        console.log(this.recommend_video);
      });
    },
  }
};
</script>

<style>

@media screen and (max-width: 600px) {
 #rec_youtube {
   width: 300px;
 }
}

@media screen and (max-width: 430px) {
 #rec_youtube {
   width: 120px;
 }
}

</style>