<template>
  <div
    class="editor"
  >
    <v-text-field
      v-model="dictation.title"
      label="Title"
      :rules="[rules.max_70]"
      :error="errors.title"
      :error-messages="messages.title"
      counter="70"
      @keydown="clearError('title')"
      @input="updateDictation()"
    />
    <div
      id="editor"
    >
      <quill-editor
        id="text_editor"
        ref="quillEditor"
        v-model="dictation.content"
        :options="editorOption"
        @input="updateDictation()"
      />
    </div>
    <div>
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
      dictation: [],
      dictationContent:"",
      editorOption: {
        theme: 'snow',
      },
      selected_videoId: '',
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
  mounted () {
    this.$emit('catch-dictation', this.dictation);
  },
  created() {
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
    // 更新
    updateDictation () {
      Object.keys(this.errors).forEach((key) => {
        this.errors[key] = false;
        this.messages[key] = null;
      }),
      axios
      .post('/api/dictation/'+ this.$route.params['dictationId'], {
        content: this.dictation.content,
        title: this.dictation.title,
        selected_videoId: this.dictation.selected_videoId,
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
    click() {
      console.log("ok");
    }
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

  .ql-toolbar {
    position: sticky;
    top: 0;
    z-index: 5;
    background-color: white;
  }

</style>