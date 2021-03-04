<template>
  <div
    class="editor"
  >
    <v-text-field
      v-model="dictations.title"
      label="Title"
      :rules="[rules.max_70]"
      :error="errors.title"
      :error-messages="messages.title"
      counter="70"
      @keydown="clearError('title')"
    />
    <quill-editor
      ref="quillEditor"
      v-model="dictations.content"
    />
    <div>
      <v-btn
        class="ma-2 mb-10 update_button"
        color="info"
        @click="updateDictation();"
      >
        UPDATE
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
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      dictations: [],
      dictationsContent:"",
      editorOption: {
        theme: 'snow'
      },
      //エラー情報初期化 
      text: "",
      errors: {
        title: false,
        content: false
      },
      messages: {
        title: null,
        content: null
      },
      timeout: 2000,
      snackbar: false,
      rules: {
        max_70: true,
      }
    };
  },
  created() {
    this.request();
  },
  methods: {
    request: function() {
      axios.get('/api/dictation/'+ this.$route.params['dictationId'])
        .then((res)=>{
          console.log(res.data);
          this.dictations = res.data;
          const responseCode = res.status;
          if (responseCode === 403){
            this.$router.push('/403');
          } else {
            console.log("成功");
          }
        });
    },
    // 更新
    updateDictation () {
      Object.keys(this.errors).forEach((key) => {
        this.errors[key] = false;
        this.messages[key] = null;
      }),
      axios.post('/api/dictation/'+ this.$route.params['dictationId'], {
        content: this.dictations.content,
        title: this.dictations.title,
        _method: 'put'
      })
      .then((res) => {
        let response = res.data;
          if (response.status == 400) {
            // バリデーションエラー
            Object.keys(response.errors).forEach((key) => {
              this.errors[key] = true;
              this.messages[key] = response.errors[key];
            });
          // 成功すると snackbar 表示
          } else {
             this.text = 'Content is updated!!';
             this.snackbar = true;
          }
      })
      .catch((error) => {
        console.log(error.response);
      });
    },
    clearError(dictation) {
      this.errors[dictation] = false;
      this.messages[dictation] = null;
    },
  }
};
</script>

<style>
  .editor  {
    padding-top: 100px;
  }
  .ql-editor {
    line-height: 300% !important;
    font-size: 20px !important;
  }
  .update_button {
    padding-bottom: 15px;
  }
</style>