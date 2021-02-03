<template>
  <v-container>
    <div id="app">
      <v-row>
        <v-col cols="7">
          <Update />
        </v-col>
        <v-col cols="3">
          <div 
            class="word_add"
          >
            <input 
              id="selectedText"
              v-model="selectedText"
              @click="select_word()"
            >
            <v-btn
              color="success"
              @click="addToList()"
            >
              Add to List
            </v-btn>
          </div>
          <div
            class="updated_dictation"
          >
            <audio
              controls
              :src="url"
            />

            <div
              class="upload_dictation"
            >
              <v-form
                ref="form"
                lazy-validation
                method="post"
              >
                <!-- {{ csrf_field() }} -->
                <v-file-input
                  id="upload-file"
                  label="File input"
                />
                <v-dialog
                  v-model="dialog"
                  width="600px"
                >
                  <template #activator="{ on, attrs }">
                    <!-- youtube upload -->
                    <div
                      v-bind="attrs"
                      v-on="on"
                    >
                      <img
                        src="https://freeiconshop.com/wp-content/uploads/edd/youtube-flat.png"
                        alt="youtube"
                        width="50px"
                      >
                    </div>
                  </template>
                  <Video />
                </v-dialog>
                <v-btn
                  color="success"
                  class="mr-4"
                  @click="upload"
                >
                  submit
                </v-btn>
              </v-form>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script type="text/javascript">
import axios from 'axios';
import Video from "../pages/Video";
import Update from "../pages/Update";

export default {
  name: 'AwsS3Upload',
  components: {
    Video,
    Update,
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
      dialog: false,
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
  created() {
    axios.get('/api/searchYoutube')
        .then((response) => {
            console.log(response.data);
        });
  },
  methods: {
    // 範囲選択した文字を表示
    select_word: function() {
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
    //音声のアップロード
    async upload() { 
      const upload_files = document.getElementById('upload-file');
      const upload_file = upload_files.files[0];
      // 署名付きPOSTのAPI叩く
      let preSignedUrl = await this.getPresignedUrl();
      // S3へアップロード
      let uploadS3Path = await this.uploadS3(preSignedUrl, upload_file);
      console.log(uploadS3Path);
    },
    async getPresignedUrl() {
      let filename = this.username + '/' + this.$route.params['dictationId'];
      let filetype = 'audio/*';
      let fileext = 'mp3';
      try {
          const url = '/api/get-presigned-url?filename=' +  filename + '&filetype=' + filetype + '&fileext=' + fileext;
          let response = await axios.get(url);
          console.log('S3署名付きURL取得 成功');
          console.log(response);
          return response;
      } catch (error) {
          console.log('S3 署名付きURL取得 失敗');
      }
    },
    async uploadS3(presignedUrl, up_file) {
      let data = presignedUrl.data;
      try {
        var formdata = new FormData();
        for (let key in data.fields) {
            formdata.append(key, data.fields[key]);
        }
        formdata.append("file", up_file);
        const headers = {
            "content-type": "multipart/form-data",
        };
        let response = await axios.post(
          data.url,
          formdata,
          {
            headers: headers,
          }
        );
        console.log(response);
        return data.url + '/' + data.fields.key;
      } catch (error) {
          console.log('S3 アップロード エラー');
          console.log(error);
      }
    }, 
  },
};
</script>

<style>

#selectedWord {
  padding-top: 150px;
  font-size: 20px;
}

#selectedText {
  padding-top: 150px;
  font-size: 25px;
}

audio {
  width: 30%;
}
</style>