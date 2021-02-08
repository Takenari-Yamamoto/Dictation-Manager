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
        <v-col cols="7" sm="3">
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
                  />
                </v-col>
                <v-col>
                  <v-btn
                    color="success"
                    @click="addToList(); snackbar = true"
                  >
                    Add to List
                  </v-btn>
                  <v-snackbar
                    v-model="snackbar"
                    :timeout="timeout"
                    class="text-center"
                  >
                    Added to List!!

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
    };
  },
  computed: {
      isLogin () {
        return this.$store.getters['auth/check'];
      },
      url() {
        return "https://dictationmanager.s3-ap-northeast-1.amazonaws.com/dictation/"+this.username+"/"+this.$route.params['dictationId']+".mp3"; 
      }
  },
  
  methods: {
    // 範囲選択した文字を表示
    selected: function() {
      this.selectedText = window.getSelection().toString();
    },
    // 単語帳に追加
    addToList: function() {
      const word = {
        word: this.selectedText,
      };
      axios.post('/api/word',word).then(res => {
        console.log(res.data);
      });
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

@media screen and (max-width: 500px) {

  .right_side {
    padding-top: 0px;
    margin: 20px;
    padding-left: 0px;
  }


}
</style>