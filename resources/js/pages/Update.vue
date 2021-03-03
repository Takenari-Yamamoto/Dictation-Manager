<template>
  <div
    class="editor"
  >
    <v-text-field
      v-model="dictations.title"
      label="Title"
      :rules="[limit_length]"
      counter="70"
    />
    <quill-editor
      ref="quillEditor"
      v-model="dictations.content"
    />
    <div>
      <v-btn
        class="ma-2 mb-10 update_button"
        color="info"
        @click="updateDictation(); snackbar = false"
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
      timeout: 2000,
      limit_length: value => value.length <= 70 || "within 70 characters!!",
      snackbar: false,
    };
  },
  created() {
    this.request();
    this.show();
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
        text: this.text,
        _method: 'put'
      })
      .then((res) => {
        this.text = 'Content is updated!!';
        this.snackbar = true;
      })
      .catch((err) => {
        this.text = "Update is failed";
        this.snackbar = true;
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