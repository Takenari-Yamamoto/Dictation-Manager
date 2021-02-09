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
      <template #item.actions="props">
        <v-dialog
          v-model="dialog"
          width="500"
        >
          <template #activator="{ on, attrs }">
            <v-icon
              small
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
                @click="deleteWord(props)"
              >
                Delete
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </template>
    </v-data-table>

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
        dialog: false,
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
      deleteWord (props) {
        axios.post('/api/word/'+props.item.id, {
          _method: 'delete'
        })
        .then(res => {
          console.log(res.data);
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
/* 
@media screen and (max-width: 600px) {

  tr {
    float: left  !important;
  }

  .v-data-table__mobile-row {
    float: left !important;
  }

  .v-data-table__mobile-row__header{
    display: none !important;
  }
} */

  

</style>