import axios from 'axios';

export default {
    //data
    state: {
      dictation: [],
    },
    // computed
    getters: {
      
    },
    // methods
    mutations: {
      
    },
    //非同期のメソッド
    actions: {
      //投稿詳細の表示
      request () {
        axios
          .get('/api/dictation/'+ this.$route.params['dictationId'])
          .then((res)=>{
            console.log(res.data);
            this.dictation = res.data;
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
        axios
          .post('/api/dictation/'+ this.$route.params['dictationId'], {
            content: this.dictation.content,
            title: this.dictation.title,
            selected_videoId: this.dictation.selected_videoId,
            _method: 'put'
          })
          .then((res) => {
            let response = res.data;
            console.log(this.selected_videoId);
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
    }
};
