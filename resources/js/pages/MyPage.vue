<template>
  <v-main>
    <v-container v-if="isLogin">
      <v-row>
        <v-col cols="6">
          <h2>
            {{ username }} さんのディクテーション一覧
          </h2>
        </v-col>
        <v-col cols="2">
          <ul>
            <li><button @click="sort()">更新順</button></li>
          </ul>
        </v-col>
      </v-row>
      
      <v-row class="your_list">
        <v-col
          v-for="(dictation, key) in dictations"
          :key="key"
          cols="6"
          sm="4"
        >
          <v-card
            id="detail"
            class="mx-auto font-weight-medium"
            max-width="344"
            outlined
            @click="editDictation(dictation.id)"
          > 
            <v-list-item
              three-line
              class="grey--text mb-2 title"
            >
              <v-list-item-content>
                <p id="title">
                  {{ dictation.title }}
                </p>
                </br>
                <p id="date">
                  Updated at : {{ dictation.updated_at }}
                </p>

                <audio
                  controls
                  :src="url(dictation.id)"
                />
              </v-list-item-content>
            </v-list-item>
            <v-dialog
              v-model="dialog"
              width="500"
            >
              <template #activator="{ on, attrs }">
                <v-icon
                  id="delete_button"
                  medium
                  v-bind="attrs"
                  v-on="on"
                >
                  mdi-delete
                </v-icon>
              </template>
  
              <v-card>
                <v-card-text
                  class="pt-10"
                  justify="center"
                >
                  Are you sure you want to delete this file?
                </v-card-text> 
                <v-card-actions>
                  <v-btn
                    id="delete_button"
                    color="primary"
                    text
                    @click="deleteDictation(dictation.id)"
                  >
                    Delete
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    
    <v-container v-else>
      <TopPage />
    </v-container>
  </v-main>
</template>

<script>
import axios from 'axios';
import TopPage from "../pages/TopPage";
// alter table dictations modify content LONGBLOB(4294967295);
  export default {
    components: {
      TopPage
    },
    data: function() {
      return {
        dictations: [],
        username: this.$store.getters['auth/username'],
        dialog: false,
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
          console.log(res.data);
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
      },
      sort() {
        const pairs = Object.entries(this.dictations);
        pairs.sort((a, b) => new Date(a.updated_at) - new Date(b.updated_at));
        this.dictations = Object.fromEntries(pairs);
        console.log(this.dictations);
      }
    }
  };
</script>

<style>
#detail:hover {
 background-color:#CCCCCC;
 cursor: pointer;
 transition: 0.5s ;
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

#delete_button:hover {
  color: red;
}

audio {
  width: 70%;
  padding: 10px;
}

h2 {
  font-family: sans-serif;
  font-weight: lighter;
  padding-bottom: 15px;
}

#title {
  font-size: 18px;
}

#date {
  font-size: 15px;
  font-weight: 300;
}

</style>