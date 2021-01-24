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
          v-for="word in words"
          :key="word.word"
        >
          <td>{{ word.word }}</td>
          <td>{{ word.classification }}</td>
          <td>{{ word.meaning }}</td>
          <td>{{ word.pronounciation }}</td>
        </tr>
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
        words:[]
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
      }
    },
  };
</script>

<style>
.list {
  padding-top: 100px
}
</style>