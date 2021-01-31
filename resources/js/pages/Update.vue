<template>
  <div
    class="editor"
  >
    <v-text-field
      v-model="dictations.title"
      label="Title"
    />
    <quill-editor
      ref="quillEditor"
      v-model="dictations.content"
    />
    <v-btn
      class="ma-2 update_button"
      color="info"
      @click="updateDictation()"
    >
      UPDATE
    </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dictations: [],
      dictationsContent:"",
      editorOption: {
          theme: 'snow'
      },
    };
  },
  created() {
    this.request();
  },
  methods: {
    //内容取得
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
    // 更新
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
</style>