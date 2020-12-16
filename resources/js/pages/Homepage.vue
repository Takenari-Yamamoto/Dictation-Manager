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
        </v-col>
        <v-col cols="3">
          <div id="selectedWord">
            Word You Select : {{ selectedText }}
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script type="text/javascript">

export default {
  el:'#app',
  data() {
    return {
      content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sapiente sint, nulla, nihil repudiandae commodi voluptatibus Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sapiente sint, nulla, nihil repudiandae commodi voluptatibus ',
      editorOption: {
        theme: 'snow'
      },
      selectedText: ""
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