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
            id="detail"
            class="mx-auto font-weight-medium"
            max-width="344"
            outlined
            @click="editDictation(dictation.id)"
          > 
            <v-list-item three-line class="grey--text mb-2 title">
              <v-list-item-content>
                {{ dictation.title }}

                <audio
                  controls
                  :src="url(dictation.id)"
                />
              </v-list-item-content>
            </v-list-item>

            <v-card-actions>
              <v-icon
                id="delete_button"
                medium
                @click="deleteDictation(dictation.id)"
              >
                mdi-delete
              </v-icon>
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
import axios from 'axios';

  export default {
    data: function() {
      return {
        dictations: [],
        username: this.$store.getters['auth/username'],
      };
    },
    computed: {
      isLogin () {
        return this.$store.getters['auth/check'];
      },
      
    },
    created () {
      this.requestAll();
    },
    methods: {
      //自分の投稿一覧取得
      requestAll: function(){
        axios.get('/api/dictation').then((res)=>{
          this.dictations = res.data;
        });
      },
      //Dictationの削除
      deleteDictation (dictationId) {
        axios.post('/api/dictation/'+dictationId, {
          _method: 'delete'
        })
        .then(res => {
          console.log(res.data);
          this.$router.go({path: this.$router.currentRoute.path, force: true});
        })
        ;
      },
      //editで詳細ページへ
      editDictation: function(dictationId) {
        axios.get('/Dictation/+ dictationId',{
          id: dictationId
        }).then(()=>{
          this.$router.push('/Dictation/'+ dictationId);    
        });
      },
      //詳細に保存された音声を取得
      url(id) {
        return "https://dictationmanager.s3-ap-northeast-1.amazonaws.com/dictation/"+this.username+"/"+id+".mp3"; 
      }
    },
  };
</script>

<style>
#detail:hover {
 background-color: gold;
 cursor: pointer;
}

#detail {
  position: relative;
  /*要素内の余白は消す*/
  padding:0;
}

#delete_button {
  position: absolute;
  bottom: 0;
  right: 0;
}
audio {
  width: 70%;
  padding: 10px;
}
</style>