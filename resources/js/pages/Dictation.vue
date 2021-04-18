<template>
  <v-container>
    <div id="app">
      <v-row id="dictation_main">
        <!-- エディター -->
        <v-col
          cols="12"
          sm="7"
          xs="12"
          @click.selected.prevent="selected"
        >
          <Update @catch-dictation="loadDictation" />
        </v-col>
        <!-- 右側に固定表示 -->
        <v-col
          id="right_side_col"
          cols="12"
          sm="4"
          xs="12"
        >
          <div
            class="right_side"
          >
            <audio
              v-if="mp3_url!==null"
              id="audio"
              controls 
              :src="mp3_url"
              controlslist="nodownload"
            />
            <youtube
              v-if="dictation.selected_videoId!==null"
              id="video"
              ref="youtube"
              :video-id="dictation.selected_videoId"
              :width="400"
              height="250"
              @playing="playingVideo()"
            />
            <div id="for_smartphone_right">
              <div
                class="upload_material"
              >
                <v-row>
                  <!-- Youtube用 -->
                  <v-col v-if="mp3_url===null">
                    <Video :dictation="dictation" />
                  </v-col>
                  <!-- MP3 -->
                  <v-col v-if="dictation.selected_videoId===null">
                    <MP3 />
                  </v-col>
                </v-row>
              </div>
              <div 
                class="word_add"
              >
                <v-row>
                  <!-- select word -->
                  <v-col>
                    <v-text-field
                      id="select_word_display"
                      v-model="selectedText"
                      label="Selected Word"
                      :rules="[rules.max_30]"
                      :error="errors.word"
                      :error-messages="messages.word" 
                      counter="30"
                      @keydown="clearError('word')"	
                    />
                  </v-col>
                  <v-col>
                    <v-icon
                      class="pt-5"
                      medium
                      @click="addToList();"
                    >
                      mdi-book-plus-multiple 
                    </v-icon>
                    <v-snackbar
                      v-model="snackbar"
                      :timeout="timeout"
                      class="text-center"
                    >
                      {{ text }}

                      <template #action="{ attrs }">
                        <v-btn
                          color="blue"
                          text
                          v-bind="attrs"
                          @click="snackbar = false"
                        >
                          Close
                        </v-btn>
                      </template>
                    </v-snackbar>
                  </v-col>
                </v-row>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
      <!-- スマホ用ハンバーガー右側 ここから -->
      <v-app-bar-nav-icon
        id="for_smartphone_right_icon"
        class="hidden-sm-and-up"
        @click="drawer = true"
      />
      <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary
        bottom
        height="160px"
      >
        <v-row>
          <!-- Youtube用 -->
          <v-col>
            <v-list-item>
              <Video :dictation="dictation" />
            </v-list-item>
          </v-col>
          <!-- MP3 -->
          <v-col>
            <v-list-item>
              <MP3 />
            </v-list-item>
          </v-col>
        </v-row>
        <v-list-item>
          <v-text-field
            v-model="selectedText"
            label="Selected Word"
            :rules="[rules.max_30]"
            :error="errors.word"
            :error-messages="messages.word" 
            counter="30"
            @keydown="clearError('word')"	
          />
          <v-icon
            class="pt-4 ml-5"
            medium
            @click="addToList();"
          >
            mdi-book-plus-multiple 
          </v-icon>
          <v-snackbar
            v-model="snackbar"
            :timeout="timeout"
            class="text-center"
            top
          >
            {{ text }}

            <template #action="{ attrs }">
              <v-btn
                color="blue"
                text
                v-bind="attrs"
                @click="snackbar = false"
              >
                Close
              </v-btn>
            </template>
          </v-snackbar>
        </v-list-item>
      </v-navigation-drawer>
    <!-- スマホ用ハンバーガーメニュー ここまで -->
    </div>
  </v-container>
</template>

<script type="text/javascript">
import axios from 'axios';
import Update from "../pages/Update";
import MP3 from "../pages/MP3";
import Video from "../pages/Video";
import drag from '@branu-jp/v-drag';

export default {
  directives: {
    drag
  },
  components: {
    Update,
    MP3,
    Video,
  },
  beforeRouteEnter: (to, from, next) => {
    axios.post("/api/checkDictationExist", {
      dictation_id: to.params['dictationId']
    }).then((response) => {
      if (response.data.length === 0) {
        next({path: '/Error'});
      } else {
        next();
      }
    });
  },
  beforeRouteUpdate: (to, from, next) => {
    axios.post("/api/checkDictationExist", {
      dictation_id: to.params['dictationId'],
    }).then((response) => {
      if (response.data.length === 0) {
        next({path: '/Error'});
      } else {
        next();
      }
    });
  },
  props: {
    dictationId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selectedText: "",
      dictation: [],
      username: this.$store.getters['auth/username'],
      snackbar: false,
      timeout: 2000,
      text: "",
      //エラー情報初期化 
      errors: {
        word: false
      },
      messages: {
        word: null
      },
      rules: {
        max_30: true
      },
      file: '',
      mp3_url: "",
      drawer: false,
      group: null,
    };
  },
  computed: {
    isLogin () {
      return this.$store.getters['auth/check'];
    },
  },
  watch: {
    group () {
      this.drawer = false;
    },
  },
  created() {
    this.loadDictation();
    this.mounted();
    this.request();
  },
  methods: {
    //個別投稿表示
    request () {
      axios.get('/api/dictation/'+ this.$route.params['dictationId'])
        .then((res)=>{
          this.dictation = res.data;
          const responseCode = res.status;
          if (responseCode === 403){
            this.$router.push('/403');
          } else {
            this.$emit('catch-dictation', this.dictation);
          }
        });
    },
    // 範囲選択した文字を表示
    selected () {
      this.selectedText = window.getSelection().toString();
    },
    // 単語帳に追加
    addToList () {
      // 全てのエラーをリセット
      Object.keys(this.errors).forEach((key) => {
        this.errors[key] = false;
        this.messages[key] = null;
      });
      const word = {
        word: this.selectedText,
      };
      axios
        .post('/api/word',word)
        .then((res) => {
          let response = res.data;
          if (response.status == 400) {
            // バリデーションエラー
            Object.keys(response.errors).forEach((key) => {
              this.errors[key] = true;
              this.messages[key] = response.errors[key];
            });
          } else {
            // 成功したらUserItemコンポーネントを表示
            this.text = 'Add to List!!';
            this.snackbar = true;
          }
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
    //エラー消去
    clearError(word) {
      this.errors[word] = false;
      this.messages[word] = null;
    },
    loadDictation(dictation) {
      this.dictation = dictation;
    },
    // S3から音源取得
    async mounted() {
      this.response = await axios.get("https://dictationmanager.s3-ap-northeast-1.amazonaws.com/local/"+this.username+"/"+this.$route.params['dictationId']+".mp3")
      .then((res) => {
        return res;
      }, this);
      if (this.response.status === 403) {
        console.log("エラー！");
        this.mp3_url = null;
        console.log(this.mp3_url);
      } else {
        console.log("取得した");
        this.mp3_url = this.response.config.url;
        console.log(this.mp3_url);
      }
    },
  }
};
</script>

<style>

#audio {
  width: 100%;
}

.upload_material {
  width: 200%;
}

#for_smartphone_right {
  width: 50%;
}

.right_side {
  position: sticky;
  top: 5em;
  margin-top:150px;
}

.word_add {
  width: 600px;
}

@media screen and (max-width: 600px) {

  #audio {
    width: 70%;
    position:fixed;
    left: 30px;
    bottom:60px;
    z-index: 6;
    background-color:#3293fa;
  }

  #add_button {
    width: 20px !important;
  }

  .right_side {
    margin: 0;
    padding: 0;
  }

  #for_smartphone_right_icon {
    position:fixed;
    right:30px;
    bottom:60px;
    z-index: 6;
    background-color:grey;
  }

  #for_smartphone_right {
    display: none;
  }

  .ql-toolbar {
    position: sticky;
    top: 0;
    z-index: 5;
    background-color: white;
  }
  
}
</style>