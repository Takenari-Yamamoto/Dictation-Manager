<template>
  <v-main>
    <v-container v-if="isLogin">
      <v-row>
        <v-col
          cols="12"
          sm="4"
        >
          <h2>
            {{ username }}'s Dictations
          </h2>
        </v-col>
        <v-col
          cols="6"
          sm="2"
        >
          <button @click="sortByDate()">
            Sort by Date
          </button>
        </v-col>
        <v-col
          cols="6"
          sm="2"
        >
          <button @click="sortByTitle()">
            Sort by Title
          </button>
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
          > 
            <v-list-item
              three-line
              class="grey--text mb-2 title"
              @click="editDictation(dictation.id)"
            >
              <v-list-item-content>
                <p id="dictation_title">
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
            <v-icon
              @click="deleteConfirm(dictation.id)"
            >
              mdi-delete
            </v-icon>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- 削除確認ダイアログを追加 -->
    <v-dialog
      v-model="deleteDialog"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">
          Comfirmation
        </v-card-title>
        <v-card-text>Are you sure you want to delete this file?</v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="green darken-1"
            text
            @click="deleteDialog = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="deleteItem(deleteID)"
          >
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-main>
</template>

<script>
import axios from 'axios';
// alter table dictations modify content LONGBLOB(4294967295);
  export default {
    data: function() {
      return {
        dictations: [],
        username: this.$store.getters['auth/username'],
        dialog: false,
        items: [],
        deleteDialog: false,	// 追加：初期値は非表示
        deleteID: null,			// 追加：削除Itemのid
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
      // 削除確認ダイアログ表示を追加
      deleteConfirm(id) {
        this.deleteDialog = true;
        this.deleteID = id;
      },
      //Dictationの削除
      deleteItem (id) {
        axios.post('/api/dictation/'+id, {
          _method: 'delete',
        })
        .then(res => {
          // console.log(res.data);
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
        console.log(dictationId);
      },
      //詳細に保存された音声を取得
      url(id) {
        return "https://dictationmanager.s3-ap-northeast-1.amazonaws.com/local/"+this.username+"/"+id+".mp3"; 
      },
      sortByDate() {
        this.dictations = Object.values(this.dictations)
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
      },
      sortByTitle() {
        this.dictations = Object.values(this.dictations)
          .sort(function(a, b) {
            if (a.title > b.title) {
              return 1;
            } else {
              return -1;
            }
          });
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

#dictation_title {
  font-size: 18px;
}

#date {
  font-size: 15px;
  font-weight: 300;
}

</style>