<template>
  <v-main>
    <v-list
      three-line
    >
      <p>おすすめ動画</p>
      <template v-for="(value, key) in recommend_video">
        <v-card
          :key="key"
          class="mx-auto"
          max-width="90%"
          outlined
        >
          <v-list-item
            two-line
          >
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">
                {{ value.snippet.title }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ value.snippet.description }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar
              tile
            />
            <youtube
              ref="youtube"
              :video-id="value.id.videoId"
              width="300px"
              height="200px"
              @playing="playingVideo()"
            />
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