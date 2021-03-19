<template>
  <v-form
    ref="form"
    lazy-validation
    method="post"
  >
    <!-- 選択されたyoutube再生 -->
    <div
      v-if="dictation.selected_videoId !== null"
      class="youtube"
    >
      <youtube
        ref="youtube"
        :video-id="dictation.selected_videoId"
        :width="350"
        height="250"
        @playing="playingVideo()"
      />
      <v-btn
        color="error"
        @click="deleteMovie(); alert_delete()"
      >
        Delete Movie
      </v-btn>
    </div>
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
              color="primary"
              @click="search_video()"
            >
              検索
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
                <v-list-item-content>
                  <v-list-item-title class="headline mb-1">
                    {{ value.snippet.title }}
                  </v-list-item-title>
                  <v-list-item-subtitle>{{ value.snippet.description }}</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar
                  tile
                />
                <youtube
                  ref="youtube"
                  :video-id="value.id.videoId"
                  width="150px"
                  height="100px"
                  @playing="playingVideo()"
                />
              </v-list-item>

              <v-card-actions>
                <v-btn @click="get_videoId(value.id.videoId); alert_save()">
                  videoId取得
                </v-btn> 
              </v-card-actions>
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
Vue.use(VueSwal);
 
Vue.use(VueYoutube);
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
      Dictation: this.dictation
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
     // 選択した動画を削除
    deleteMovie() {
      this.dictation.selected_videoId = null;
    },
    alert_delete () {
     this.$swal('完全に削除するには Update ボタンを押してください');
    },
    //選択した動画の video_Id を取得
    get_videoId(videoId) {
      console.log(videoId);
      // eslint-disable-next-line vue/no-mutating-props
      this.dictation.selected_videoId = videoId;
      console.log(this.dictation.selected_videoId);
    },
    alert_save () {
     this.$swal('選択した動画を保存するには Update ボタンを押してください');
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
.video {
  padding-top: 100px;
}
@media screen and (max-width: 600px) {
  #youtube_icon {
    display: none;
  }
}
</style>