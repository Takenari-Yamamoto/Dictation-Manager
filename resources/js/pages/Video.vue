

<template>
  <v-form
    ref="form"
    lazy-validation
    method="post"
  >
    <v-dialog
      v-model="dialog"
      width="600px"
    >
      <template #activator="{ on, attrs }">
        <!-- youtube upload -->
        <div
          id="icon"
          v-bind="attrs"
          v-on="on"
        >
          <img
            id="youtube_icon"
            src="https://freeiconshop.com/wp-content/uploads/edd/youtube-flat.png"
            alt="youtube"
            width="48px"
          >
        </div>
      </template>
      <v-card>
        <input
          id="keyword"
          v-model="keyword"
          size="40"
          placeholder="検索キーワードを入力"
        >
        <v-btn @click="search_video()">
          検索
        </v-btn>
        <v-list>
          <li v-for="(value, key) in videos">
            {{ value.snippet.title }} </br>
            {{ value.snippet.description }} </br></br>
          </li>
        </v-list>
      </v-card>
    </v-dialog>
  </v-form>
</template>

<script>
import axios from 'axios';
export default {
  name: "SearchVideo",
  data() {
    return {
      results: null,
      videos: [],
      dialog: false,
      keyword: ""
    };
  },
  methods: {
    search_video () {
      console.log(this.keyword);
      axios.get("/api/searchVideo", {
        params: {
          keyword: this.keyword
        }
      })
      .then((res) => {
        this.videos = res.data;
        console.log(this.videos);
        // for (let i = 0; i < res.data.length; i++) {
        //   console.log(res.data[i].snippet.title);
        // }
      });
    },
  },
  
};
</script>

<style>
#youtube_icon {
  padding-top: 5px;
}

.video {
  padding-top: 100px;
}
@media screen and (max-width: 600px) {
  #youtube_icon {
    display: none;
  }
}
</style>