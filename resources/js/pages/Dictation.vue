<template>
  <v-container>
    <div id="app">
      <v-row>
        <v-col cols="7">
          <div
            class="editor"
            @click.selected.prevent="selected"
          >
            <v-text-field
              v-model="dictations.title"
              label="Title"
            />
            <quill-editor
              ref="quillEditor"
              v-model="dictations.content"
            />
          </div>
          <v-btn
            class="ma-2"
            color="info"
            @click="updateDictation()"
          >
            UPDATE
            <template #loader>
              <span>Loading...</span>
            </template>
          </v-btn>
        </v-col>
        <v-col cols="3">
          <input 
            id="selectedText"
            v-model="selectedText"
          >
          <v-btn
            color="success"
            @click="addToList()"
          >
            Add to List
          </v-btn>
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
import Video from "../pages/Video";
export default {
  name: 'AwsS3Upload',
  components: {
    Video
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
      dictations: [],
      dictationsContent:"",
      editorOption: {
        theme: 'snow'
      },
      selectedText: "",
      dictation: null,
      username: this.$store.getters['auth/username'],
      dialog: false,
      params: {
        q: "", // 検索クエリを指定します。
        part: "snippet",
        type: "",
        maxResults: "20", // 最大検索数
        key: ""
      }
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
    this.request();
  },
  methods: {
    //選択した文字列を取得
    selected: function() {
      this.selectedText = window.getSelection().toString();
    },
    //id毎に内容を取得
    request: function() {
      axios.get('/api/dictation/'+ this.$route.params['dictationId'])
        .then((res)=>{
          console.log(res.data);
          this.dictations = res.data;
          const responseCode = res.status;
          if (responseCode === 403){
            this.$router.push('/403');
          }
        });
    },
    //Dictationの更新
    updateDictation: function() {
      axios.post('/api/dictation/'+ this.$route.params['dictationId'], {
        content: this.dictations.content,
        title: this.dictations.title,
        _method: 'put'
      })
      .then((res) => {
        console.log(res);
      });
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
        console.log('S3 アップロード 開始');
        let response = await axios.post(
          data.url,
          formdata,
          {
            headers: headers,
          }
        );
        console.log('S3 アップロード 成功');
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
.editor  {
  padding-top: 100px;
}
#selectedWord {
  padding-top: 150px;
  font-size: 20px;
}
.ql-editor {
  line-height: 300% !important;
  font-size: 20px !important;
}
#selectedText {
  padding-top: 150px;
  font-size: 25px;
}

audio {
  width: 30%;
}
</style>