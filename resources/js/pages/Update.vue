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
    <div>
      <v-btn
        class="ma-2 mb-10 update_button"
        color="info"
        @click="updateDictation(); snackbar = true"
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
      snackbar: false,
      text: 'Content is updated!!',
      timeout: 2000,
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
  .update_button {
    padding-bottom: 15px;
  }
</style>