<template>
  <v-container>
    <div id="app">
      <v-row>
        <v-col 
          cols="12" sm="7"
          @click.selected.prevent="selected"
        >
          <Update />
        </v-col>
        <!-- 右側に固定表示 -->
        <v-col cols="7" sm="3" id="aaa">
          <div
            class="right_side pt-200 pl-30"
          >
            <audio
              id="audio"
              controls
              :src="url"
            />
            <div
              class="upload_material"
            >
              <v-row>
                <!-- Youtube用 -->
                <v-col>
                  <Video />
                </v-col>
                <v-col>
                  <MP3 />
                </v-col>
              </v-row>
            </div>
            <div 
              class="word_add"
            >
              <v-row>
                <!-- Youtube用 -->
                <v-col>
                  <v-text-field
                    v-model="selectedText"
                    label="Selected Word"
                    :rules="[rules.max_10]"
                    :error="errors.word"
                    :error-messages="messages.word" 
                    counter="10"
                    @keydown="clearError('word')"	
                  />
                </v-col>
                <v-col>
                  <v-btn
                    color="success"
                    @click="addToList();"
                  >
                    Add to List
                  </v-btn>
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
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script type="text/javascript">
import axios from 'axios';
import Update from "../pages/Update";
import MP3 from "../pages/MP3";
import Video from "../pages/Video";

export default {
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
        console.log(response.data.length);
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
        console.log(response.data.length);
      } else {
        next();
      }
    });
  },
  props: {
    // dictationId: String
    dictationId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      selectedText: "",
      dictation: null,
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
        max_10: true
      }
    };
  },
  computed: {
      isLogin () {
        return this.$store.getters['auth/check'];
      },
      url() {
        return "https://dictationmanager.s3-ap-northeast-1.amazonaws.com/local/"+this.username+"/"+this.$route.params['dictationId']+".mp3"; 
      }
  },
  
  methods: {
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
      axios.post('/api/word',word)
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
          console.log("成功！");
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
    },
    clearError(word) {
      this.errors[word] = false;
      this.messages[word] = null;
    },

    
  },
};
</script>

<style>

#audio {
  width: 200%;
  padding: 0;
}

.upload_material {
  width: 200%;
  margin: 0 auto;
}

.right_side {
  padding-top: 160px;
  padding-left: 30px;
  position: sticky;
  z-index: 5;
  top: 0;
}

.ql-toolbar{
  position: sticky;
  top: 0;
  z-index: 5;
  background-color: white;
}

.word_add {
  width: 200%;
}

@media screen and (max-width: 600px) {

  #aaa {
    padding: 0;
  }
  #audio {
    width: 180%;
    text-align: center;
    padding: 10px;
    position: fixed;
    z-index: 5;
    bottom: 0px;
  }
  .right_side {
    padding: 0;
  }

  .ql-toolbar{
  position: sticky;
  top: 0;
  z-index: 5;
  background-color: white;
}

  .word_add{
    display: none;
  }

}
</style>