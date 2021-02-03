
<template>
  <v-card>
    <input
      id="keyword"
      v-model="videos.keyword"
      size="40"
      placeholder="検索キーワードを入力"
    >
    <button @click="search_video(videos.keyword)">
      検索
    </button>
    <table
      v-show="results"
      cellspacing="0"
      cellpadding="5"
    >
      <tr>
        <th width="50">
          <font>No</font>
        </th>
        <th width="200">
          <font>Video</font>
        </th>
        <th width="700">
          <font>Contents</font>
        </th>
      </tr>

      <tr
        v-for="(movie, index) in results"
        :key="movie.id.videoId"
      >
        <!-- No -->
        <td
          valign="top"
          width="50"
        >
          {{ index + 1 }}
        </td>
        <!-- Video -->
        <td
          valign="top"
          width="300"
        >
          <a :href="'https://www.youtube.com/watch?v=' + movie.id.videoId">
            <img
              width="300"
              height="200"
              :src="movie.snippet.thumbnails.medium.url"
            >
          </a>
        </td>
        <!-- titleとdescription -->
        <td
          align="left"
          valign="top"
          width="700"
        >
          <font
            size="5"
            color="#c71585"
          >
            <b>{{ movie.snippet.title }}</b>
          </font>
          <br>
          {{ movie.snippet.description }}
        </td>
      </tr>
    </table>
  </v-card>
</template>

<script>
import axios from 'axios';

export default {
  name: "SearchVideo",
  data() {
    return {
      results: null,
      videos: [],
    };
  },
  methods: {
    search_video () {
      
      axios.get("/api/searchVideo", {
        keyword: this.videos.keyword
      })
      .then((res) => {
      console.log(res.data);
    });
    }
  },
  
};
</script>

<style>

.youtube_list {
  border-collapse: collapse;
  border: solid 2px #c71585;/*表全体を線で囲う*/
}
.youtube_list th {
  color: #fff0f5;/*文字色*/
  background: #ff69b4;/*背景色*/
  border: dashed 1px #c71585;
}

.youtube_list td {
  background: #fff0f5;
  border: dashed 1px #c71585;
}

.video {
  padding-top: 100px;
}

</style>