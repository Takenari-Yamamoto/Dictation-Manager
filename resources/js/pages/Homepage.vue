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
          <div class="upload_dectation">
            <p>Upload File You Wanna Dictate</p>
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <!-- {{ csrf_field() }} -->
              <v-file-input
                accept="movie/*"
                label="File input"
              />
              
              <v-btn
                color="success"
                class="mr-4"
                @submit.prevent="upload"
              >
                submit
              </v-btn>
            </v-form>
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