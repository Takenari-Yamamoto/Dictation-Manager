<template>
  <v-main>
    <v-list
      three-line
    >
      <p class="ml-5">
        おすすめ動画
      </p>
      <template v-for="(value, key) in recommend_video">
        <v-card
          :key="key"
          class="mx-auto mt-5"
          max-width="90%"
          outlined
        >
          <v-list-item
            three-line
          >
            <youtube
              ref="youtube"
              :video-id="value.id.videoId"
              width="300px"
              height="200px"
              @playing="playingVideo()"
            />
            <v-list-item-content class="ml-5">
              <h2>
                {{ value.snippet.title }}
              </h2>
              <p>
                {{ value.snippet.description }}
              </p>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </template>
    </v-list>
  </v-main>
</template>

<script>
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