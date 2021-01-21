<template>
  <v-main>
    <h2 class="ml-10">
      {{ username }} さんのディクテーション一覧
    </h2>

    <v-container v-if="isLogin">
      <v-row>
        <v-col
          v-for="(dictation, key) in dictations"
          :key="key"
          cols="4"
        >
          <v-card
            class="mx-auto"
            max-width="344"
            outlined
          > 
            <v-list-item three-line>
              <v-list-item-content>
                {{ dictation.id }} : {{ dictation.content }}
              </v-list-item-content>
            </v-list-item>

            <v-card-actions>
              <v-btn
                color="error"
                dark
                rounded
                @click="deleteDictation(dictation.id)"
              >
                DELETE
              </v-btn>
              <v-btn
                right
                color="blue-grey"
                rounded
                @click="editDictation(dictation.id)"
              >
                EDIT
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    
    <v-container v-else>
      <div>ログインしてね</div>
    </v-container>
  </v-main>
</template>

<script>

  export default {
    data: function() {
      return {
        dictations: []
      };
    },
    computed: {
      isLogin () {
        return this.$store.getters['auth/check'];
      },
      username () {
        return this.$store.getters['auth/username'];
      }
    },
    created () {
      this.requestAll();
    },
    methods: {
      //自分の投稿一覧取得
      requestAll: function(){
        axios.get('/api/dictation').then((res)=>{
          console.log(res.data);
          this.dictations = res.data;
        });
      },
      //Dictationの削除（仮）
      deleteDictation: function(dictationId) {
        axios.post('/api/del',{
          id: dictationId
        }).then((res)=>{
          this.todos = res.data;
          this.$router.go({path: this.$router.currentRoute.path, force: true});
        });
      },
      //editで詳細ページへ
      editDictation: function(dictationId) {
        axios.get('/Dictation/+ dictationId',{
          id: dictationId
        }).then(()=>{
          this.$router.push('/Dictation/'+ dictationId);    
        });
      }
    },
  };
</script>