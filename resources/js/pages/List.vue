<template>
  <v-simple-table
    v-if="isLogin"
    class="list"
  >
    <template #default>
      <thead>
        <tr>
          <th class="text-left">
            Word
          </th>
          <th class="text-left">
            Classification
          </th>
          <th class="text-left">
            Meaning
          </th>
          <th class="text-left">
            Pronounciation
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(word, key) in words"
          :key="key"
        >
          <td>{{ word.word }}</td>
          <td>
            <select v-model="word.classification">
              <option
                disabled
              >
                Please select one
              </option>
              <option>Noun</option>
              <option>Verb</option>
              <option>Adjective</option>
              <option>Adverb</option>
              <option>Idiom</option>
            </select>
          </td>
          <td>
            <input
              v-model="word.meaning"
              type="text"
            >
          </td>
          <td>
            <input
              v-model="word.pronounciation"
              type="text"
            >
          </td>
        </tr>
        <v-btn
          class="ma-2"
          color="secondary"
          @click="updateMyWord()"
        >
          Update
        </v-btn>
      </tbody>
    </template>
  </v-simple-table>

  <div
    v-else
  >
    ログインしてね
  </div>
</template>

<script>
  export default {
    data () {
      return {
        words:[],
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
      this.requestMyWord();
    },
    methods: {
      // 自分の単語リストを取得
      requestMyWord: function() {
        axios.get('/api/word').then((res)=>{
          this.words = res.data;
          console.log(res.data);
        });
      },
      //更新
      updateMyWord: function() {
        axios.post('/api/word', {
          word: this.words.word,
          classification: this.words.classification,
          meaning: this.words.meaning,
          pronounciation: this.words.pronounciation,
          _method: 'put'
        })
        .then(res => {
          console.log(res.data);
        });
      }
    },
  };
  
</script>

<style>
.list {
  padding-top: 100px
}
</style>

