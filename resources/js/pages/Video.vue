

<template>
  <v-form
    ref="form"
    lazy-validation
    method="post"
  >
    <!-- 選択されたyoutube再生 -->
    <youtube
      ref="youtube"
      :video-id="selected_videoId"
      :width="350"
      height="250"
      @playing="playingVideo()"
    />
    <div>
      <button
        v-if="playing"
        @click="pauseVideo"
      >
        pause
      </button>
      <button
        v-else
        @click="playVideo"
      >
        play
      </button>
    </div>
    <!-- youtube upload -->
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
          <img
            id="youtube_icon"
            src="https://freeiconshop.com/wp-content/uploads/edd/youtube-flat.png"
            alt="youtube"
            width="48px"
          >
        </div>
      </template>
      <v-card>
        <input
          id="keyword"
          v-model="keyword"
          size="40"
          placeholder="検索キーワードを入力"
        >
        <v-btn @click="search_video()">
          検索
        </v-btn>
        <v-list>
          <li v-for="(value, key) in videos">
            {{ value.snippet.title }} </br></br>
            {{ value.snippet.thumbnails.default.url }} </br></br>
            {{ value.snippet.description }} </br></br>
            <!-- youtube再生 -->
            <youtube
              ref="youtube"
              :video-id="value.id.videoId"
              :width="400"
              height="250"
              @playing="playingVideo()"
            />
            <div>
              <button
                v-if="playing"
                @click="pauseVideo"
              >
                pause
              </button>
              <button
                v-else
                @click="playVideo"
              >
                play
              </button>
            </div>
            <v-btn @click="get_videoId(value.id.videoId)">
              videoId取得
            </v-btn> 
          </li>
        </v-list>
      </v-card>
    </v-dialog>
  </v-form>
</template>

<script>
import axios from 'axios';
import Vue from 'vue';
import VueYoutube from 'vue-youtube';
 
Vue.use(VueYoutube);

export default {
  name: "SearchVideo",
  props:{
    dictation: {
      type: null,
      required: true,
      default: () => {},
    }
  },
  data() {
    return {
      results: null,
      videos: [],
      dialog: false,
      keyword: "",
      videoId: '',
      selected_videoId: '',
      playing: false,
    };
  },
  computed:{
    player(){
      return this.$refs.youtube.player;
    }
  },
  created() {
    console.log(this.dictation);
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
        this.videoId = res.data.id.videoId;
        console.log(this.videos);
        // for (let i = 0; i < res.data.length; i++) {
        //   console.log(res.data[i].snippet.title);
        // }
      });
    },
    //選択した動画の video_Id を取得
    get_videoId(videoId) {
      console.log(videoId);
      this.dictation.selected_videoId = videoId;
    },
    playVideo(){  // 再生処理
      this.player.playVideo();
      this.playing = true;
    },
    pauseVideo(){ // 停止処理
      this.player.pauseVideo();
      this.playing = false;
    },
    playingVideo(){
      console.log('play start!');
    }
  }
  
};
</script>

<style>
#youtube_icon {
  padding-top: 5px;
}

.video {
  padding-top: 100px;
}
@media screen and (max-width: 600px) {
  #youtube_icon {
    display: none;
  }
}
</style>