<template>
  <v-container>
    <div id="app">
      <v-row>
        <v-col cols="7">
          <div
            class="editor"
            @click.selected.prevent="selected"
          >
            <quill-editor
              ref="quillEditor"
              v-model="content"
              options="editorOption"
            />
          </div>
          <v-btn
            class="ma-2"
            color="success"
          >
            Save
            <template #loader>
              <span>Loading...</span>
            </template>
          </v-btn>
        </v-col>
        <v-col cols="3">
          <div id="selectedWord">
            Word You Select : {{ selectedText }}
          </div>
          <div class="dectation_post">
            <p>Upload File You Wanna Dictate</p>
            <form
              action="/upload"
              method="get"
              enctype="multipart/form-data"
            >
              <!-- {{ csrf_field() }} -->
              <input
                type="file"
                name="file"
              >
              <button type="submit">
                保存
              </button>
            </form>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sapiente sint, nulla, nihil repudiandae commodi voluptatibus Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sapiente sint, nulla, nihil repudiandae commodi voluptatibus ',
      editorOption: {
        theme: 'snow'
      },
      selectedText: "",
      dictation: null
    };
  },
  methods: {
    selected: function() {
      this.selectedText = window.getSelection().toString();
    },
    onFileChange (event) {
      this.dictation = event.target.files[0];
    },
    reset () {
      this.dictation = null;
      this.$el.querySelector('input[type="file"]').value = null;
    },
    async submit () {
      const formData = new FormData();
      formData.append('dictation', this.dictation);
      const response = await axios.post('/api/dictations', formData);

      this.reset();
      this.$submit('input', false);

      if (response.status !== CREATED) {
        this.$store.commit('error/setCode', response.status);
        return false;
      }

      this.$store.commit('message/setContent', {
        content: 'ファイルが投稿されました',
        timeout: 6000
      });

    }
  }
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
</style>