<template>
  <v-container>
    <div
      id="app"
      class="editor"
    >
      <quill-editor
        ref="quillEditor"
        v-model="content"
        options="editorOption"
      />
    </div>
  </v-container>
</template>

<script type="text/javascript">

export default {
  el:'#app',
  data() {
    return {
      content: 'Hello contents',
      editorOption: {
        theme: 'snow'
      }
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

.editor {
  padding-top: 100px;
}
.v-textarea textarea {
  font-size: 20px;
  line-height: 60px !important;
}

#selected {
  font-size: 25px;
  font-family: 'Roboto Condensed', sans-serif;
}
.red {
  color:yellow;
}
button{
  display: block;
  width: 200px;
  height: 30px;
  margin-top: 10px;
}
</style>