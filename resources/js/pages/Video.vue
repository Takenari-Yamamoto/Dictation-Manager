<template>
  <v-form
    ref="form"
    lazy-validation
    method="post"
  >
    <v-dialog
      v-model="dialog"
      width="600px"
    >
      <template #activator="{ on, attrs }">
        <!-- youtube upload -->
        <div
          id="icon"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon
            id="youtube_icon"
            large
          >
            mdi-movie-edit
          </v-icon>
        </div>
      </template>
      <v-card>
        <v-text-field
          id="keyword"
          v-model="keyword"
          size="40"
          placeholder="検索キーワードを入力"
        >
          <template #append-outer>
            <v-btn
              id="search_button"
              color="primary"
              @click="search_video()"
            >
              Search
            </v-btn>
          </template>
        </v-text-field>
        <v-list three-line>
          <template v-for="(value, key) in videos">
            <v-card
              :key="key"
              class="mx-auto"
              max-width="100%"
              outlined
            >
              <v-list-item three-line>
                <youtube
                  ref="youtube"
                  :video-id="value.id.videoId"
                  width="150px"
                  height="100px"
                  @playing="playingVideo()"
                />
                <div
                  id="list_content"
                  class="ml-5"
                >
                  <div id="movie_title">
                    <p>
                      {{ value.snippet.title }}
                    </p>
                  </div>
                  <div id="movie_description">
                    <p>{{ value.snippet.description }}</p>
                  </div>
                  <div
                    id="get_button"
                    class="mb-2"
                  >
                    <v-btn @click="get_videoId(value.id.videoId);">
                      この動画でディクテーション
                    </v-btn> 
                  </div>
                </div>
              </v-list-item>
            </v-card>
          </template>
        </v-list>
      </v-card>
    </v-dialog>
  </v-form>
</template>

<script>
import axios from 'axios';
import Vue from 'vue';
import VueYoutube from 'vue-youtube';
import VueSwal from 'vue-swal';
// import VPip from 'v-pip';

Vue.use(VueSwal);
Vue.use(VueYoutube);
// Vue.use(VPip);

export default {
  name: "SearchVideo",
  props:{
    dictation: {
      type: null,
      default: () => {},
    },
  },
  data() {
    return {
      results: null,
      maxResults: 10,
      videos: [],
      dialog: false,
      keyword: "",
      videoId: '',
      playing: false,
      Dictation: this.dictation,
      isPip: false,
    };
  },
  computed:{
    player(){
      return this.$refs.youtube.player;
    }
  },
  methods: {
    //検索フォームから関連する動画を検索
    search_video () {
      console.log(this.keyword);
      axios.get("/api/searchVideo", {
        params: {
          keyword: this.keyword
        }
      })
      .then((res) => {
        this.videos = res.data;
        console.log(this.videos);
      });
    },
    //選択した動画の video_Id を取得
    get_videoId(videoId) {
      console.log(videoId);
      // eslint-disable-next-line vue/no-mutating-props
      this.dictation.selected_videoId = videoId;
      axios
      .post('/api/dictation/'+ this.$route.params['dictationId'], {
        content: this.dictation.content,
        title: this.dictation.title,
        selected_videoId: this.dictation.selected_videoId,
        _method: 'put'
      });
    },
    
    // 再生処理
    playVideo(){  
      this.player.playVideo();
      this.playing = true;
      console.log('play start!');
    },
    // 停止処理
    pauseVideo(){
      this.player.pauseVideo();
      this.playing = false;
    },
  }
  
};
</script>

<style>

#youtube_icon {
  padding-top: 5px;
}

#get_button {
  text-align: right;
}

#movie_title {
  margin-top: 5px;
  font-weight: bold;
  font-size: 18px;
}

@media screen and (max-width: 600px) {

  #movie_description {
    display: none;
  }

  #movie_title {
    font-size: 16px;
  }

  .youtube {
    display: none;
  }
  
}
</style>