<template>
  <v-main>
    <!-- マイページ説明 -->
    <div
      id="support1"
    >
      <h1 class="mt-5 ml-5">
        My Page
      </h1>
      <v-row>
        <v-col
          offset-md="1"
          md="7"
        >
          <img
            class="support_img mt-5"
            src="image/support1.jpg"
            alt="support1"
            width="90%"
          >
        </v-col>
        <v-col md="4">
          <div class="text">
            <p>① My Page : ログイン後に遷移する画像のページ</p>
            <p>② Create : 新規ディクテーションの作成</p>
            <p>③ List : ディクテーションの中でまとめた単語がまとめてあるページです</p>
            <p>④ Recommendation : ディクテーションに最適な動画をまとめています</p>
            <p>⑤ Support : 使い方をまとめている本ページです</p>
            <p>⑥ 作成したディクテーション一覧を表示してます</p>
          </div>
        </v-col>
      </v-row>
    </div>
    <!-- ディクテーション作成説明 -->
    <div
      id="support2"
    >
      <h1 class="mt-5 ml-5">
        ディクテーション作成
      </h1>
      <v-row>
        <v-col
          offset-md="1"
          md="7"
        >
          <img
            class="support_img mt-5"
            src="image/support2.jpg"
            alt="support1"
            width="90%"
          >
        </v-col>
        <v-col md="4">
          <div class="text">
            <p>① タイトル入力</p>
            <p>② 聞き取った音声はこちらのエディタに記述していきます。文字色や太さなども自由に変更できます</p>
            <p>③ 変更を加えて際には Update ボタンを押してください</p>
            <p>④ YouTube の検索ができます。YouTube 動画を音源にしてディクテーションできます</p>
            <p>⑤ MP3 のアップロード。お手持ちの音声ファイルを使いディクテーションできます</p>
            <p>⑥ 範囲選択した箇所が表示され、ボタンを押すと List へ保存されます</p>
          </div>
        </v-col>
      </v-row>
    </div>
    <!-- YouTube 検索説明 -->
    <div
      id="support3"
    >
      <h1 class="mt-5 ml-5">
        YouTube 動画をディクテーションする
      </h1>
      <v-row>
        <v-col
          offset-md="1"
          md="7"
        >
          <img
            class="support_img mt-5"
            src="image/support3.jpg"
            alt="support1"
            width="90%"
          >
        </v-col>
        <v-col md="4">
          <div class="text">
            <p>① 検索したいキーワードを入力します</p>
            <p>② ディクテーションしたい動画の videoId を取得します</p>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          offset-md="1"
          md="7"
        >
          <img
            class="support_img mt-5"
            src="image/support4.jpg"
            alt="support1"
            width="90%"
          >
        </v-col>
        <v-col md="4">
          <div class="text">
            <p>① videoId を取得した動画が表示されます</p>
            <p>② 取得した動画を保存するには Update ボタンを押してください</p>
            <p>③ 取得した動画を削除するには Delete ボタンを押して Update ボタンを押してください</p>
          </div>
        </v-col>
      </v-row>
    </div>
    <!-- MP3 upload -->
    <div
      id="support2"
    >
      <h1 class="mt-5 ml-5">
        MP3 アップロード
      </h1>
      <v-row>
        <v-col
          offset-md="1"
          md="7"
        >
          <img
            class="support_img mt-5"
            src="image/support5.jpg"
            alt="support1"
            width="90%"
          >
        </v-col>
        <v-col md="4">
          <div class="text">
            <p>① クリックすると自分のファイルからMP3をアップロードできます。選択したら Submit ボタンをクリック押してください</p>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          offset-md="1"
          md="7"
        >
          <img
            class="support_img mt-5"
            src="image/support6.jpg"
            alt="support1"
            width="90%"
          >
        </v-col>
        <v-col md="4">
          <div class="text">
            <p>① アップした音声はこちらに表示されます。（Update ボタンは押さなくて大丈夫です）</p>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-main>
</template>

<style>

  .v-main {
    margin : 0 auto;
    width: 90%;
  }

  .text {
    text-align: left;
  }

  .text p{
    font-size: 17px;
  }

</style>