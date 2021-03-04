<template>
  <div
    v-if="isLogin"
    class="list"
  >
    <v-data-table
      :headers="headers"
      :items="words"
      mobile-breakpoint="0"
    >
      <!-- 単語 -->
      <template #item.word="props">
        <v-edit-dialog
          :return-value.sync="props.item.word"
          @save="save(props)"
          @cancel="cancel"
          @open="open"
          @close="close"
        >
          {{ props.item.word }}
          <template #input>
            <v-text-field
              v-model="props.item.word"
              label="Edit"
              single-line
              counter
            />
          </template>
        </v-edit-dialog>
      </template>
      <!-- 分類 -->
      <template #item.classification="props">
        <v-edit-dialog
          :return-value.sync="props.item.classification"
          large
          persistent
          @save="save(props)"
          @cancel="cancel"
          @open="open"
          @close="close"
        >
          <div>{{ props.item.classification }}</div>
          <template #input>
            <div class="mt-4 title">
              Update classification
            </div>
            <v-text-field
              v-model="props.item.classification"
              label="Edit"
              single-line
              counter
              autofocus
            />
          </template>
        </v-edit-dialog>
      </template>
      <!-- 意味 -->
      <template #item.meaning="props">
        <v-edit-dialog
          :return-value.sync="props.item.meaning"
          large
          persistent
          @save="save(props)"
          @cancel="cancel"
          @open="open"
          @close="close"
        >
          <div>{{ props.item.meaning }}</div>
          <template #input>
            <div class="mt-4 title">
              Update meaning
            </div>
            <v-text-field
              v-model="props.item.meaning"
              label="Edit"
              single-line
              counter
              autofocus
            />
          </template>
        </v-edit-dialog>
      </template>
      <!-- 発音 -->
      <template #item.pronunciation="props">
        <v-edit-dialog
          :return-value.sync="props.item.pronunciation"
          large
          persistent
          @save="save(props)"
          @cancel="cancel"
          @open="open"
          @close="close"
        >
          <div>{{ props.item.pronunciation }}</div>
          <template #input>
            <div class="mt-4 title">
              Update pronunciation
            </div>
            <v-text-field
              v-model="props.item.pronunciation"
              label="Edit"
              single-line
              counter
              autofocus
            />
          </template>
        </v-edit-dialog>
      </template>
      <!-- 削除ボタン -->
      <template #item.actions="props">
        <v-icon
          @click="deleteConfirm(props.item.id)"
        >
          mdi-delete
        </v-icon>
      </template>
    </v-data-table>

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

    <v-snackbar
      v-model="snack"
      :timeout="3000"
      :color="snackColor"
    >
      {{ snackText }}

      <template #action="{ attrs }">
        <v-btn
          v-bind="attrs"
          text
          @click="snack = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
  <div v-else>
    <AccessError />
  </div>
</template>

<script>
import AccessError from "../pages/errors/AccessError";
import axios from 'axios';
import Vuetify from 'vuetify/lib';

  export default {
    breakpoint: {
      mobileBreakpoint: 'col' // This is equivalent to a value of 960
    },
    components: {
      AccessError,
    },
    data () {
      return {
        //配列に格納
        words: [],
        snack: false,
        snackColor: '',
        snackText: '',
        pagination: {},
        headers: [
          {
            text: 'Word',
            align: 'start',
            sortable: false,
            value: 'word',
          },
          { text: 'Classification', value: 'classification' },
          { text: 'Meaning', value: 'meaning' },
          { text: 'Pronunciation', value: 'pronunciation' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
        deleteDialog: false,	// 追加：初期値は非表示
        deleteID: null,			// 追加：削除Itemのid
        //エラー情報初期化 
        errors: {
          word: false,
          classification: false,
          meaning: false,
          pronunciation: false
        },
        messages: {
          word: null,
          classification: null,
          meaning: null,
          pronunciation: null
        },
      };
    },
    computed: {
      isLogin () {
        return this.$store.getters['auth/check'];
      },
    },

    created () {
      this.requestMyWord();
    },
    
    methods: {
      //アップデート
      save (props) {
        this.snack = true;
        this.snackColor = 'success';
        this.snackText = 'Data saved';
        axios.post('/api/word/'+props.item.id, {
          id: props.item.id,
          word: props.item.word,
          classification: props.item.classification,
          meaning: props.item.meaning,
          pronunciation: props.item.pronunciation,
          _method: 'put'
        }).then(res => {
          console.log(props.item.id);
        });
      },
      cancel () {
        this.snack = true;
        this.snackColor = 'error';
        this.snackText = 'Canceled';
      },
      open () {
        this.snack = true;
        this.snackColor = 'info';
        this.snackText = 'Dialog opened';
      },
      close () {
        console.log('Dialog closed');
      },
      //単語一覧取得
      requestMyWord: function() {
        axios.get('/api/word').then((res)=>{
          this.words = res.data;
          console.log(res.data);
        });
      },
      // 削除確認ダイアログ表示を追加
      deleteConfirm(id) {
        this.deleteDialog = true;
        this.deleteID = id;
      },
      deleteItem (id) {
        axios.post('/api/word/'+id, {
          _method: 'delete'
        })
        .then(res => {
          this.$router.go({path: this.$router.currentRoute.path, force: true});
        });
      },
    },
  };
</script>

<style>

  .list {
    padding-top: 100px;
  }

</style>