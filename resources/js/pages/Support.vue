<template>
  <v-main
    id="support_main"
    class="text-center"
  >
    <!-- マイページ説明 -->
    <div
      id="support1"
    >
      <h1
        id="dictation_toha"
        class="mt-15"
      >
        ディクテーションとは？
      </h1>
      <img
        width="40%"
        src="https://irasutohonpo.com/wp-content/uploads/2018/03/%E5%8B%89%E5%BC%B7%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E4%BA%BA%E3%81%AE%E7%84%A1%E6%96%99%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%EF%BC%88%E7%94%B7%E6%80%A7%EF%BC%89.png"
      >
      <p
        id="dictation_exp"
        class="pt-10"
      >
        英語を聞きながら聞こえてくる英語を一語一句残らず書き取るだけの極めて単純な学習法です。
      </p>
      <h1 class="mt-15">
        My Page
      </h1>
      <img
        class="support_img mt-5"
        src="image/support1.jpg"
        alt="support1"
        width="90%"
      >
      <div class="text-center">
        <p>① My Page : ログイン後に遷移する画像のページ</p>
        <p>② Create : 新規ディクテーションの作成</p>
        <p>③ List : ディクテーションの中でまとめた単語がまとめてあるページです</p>
        <p>④ Recommendation : ディクテーションに最適な動画をまとめています</p>
        <p>⑤ Support : 使い方をまとめている本ページです</p>
        <p>⑥ 作成したディクテーション一覧を表示してます</p>
      </div>
    </div>
    <!-- ディクテーション作成説明 -->
    <div
      id="support2"
    >
      <h1 class="mt-15">
        ディクテーション作成
      </h1>
      <img
        class="support_img mt-5"
        src="image/support2.jpg"
        alt="support1"
        width="90%"
      >
      <div class="text">
        <p>① タイトル入力</p>
        <p>② 聞き取った音声はこちらのエディタに記述していきます。文字色や太さなども自由に変更できます</p>
        <p>③ 変更を加えて際には Update ボタンを押してください</p>
        <p> ④ YouTube の検索ができます。<a href="#youtube">YouTube 動画を音源にしてディクテーションできます</a></p>
        <p>⑤ MP3 のアップロード。<a href="#mp3">お手持ちの音声ファイルを使いディクテーションできます</a></p>
        <p>⑥ 範囲選択した箇所が表示され、ボタンを押すと List へ保存されます</p>
      </div>
    </div>
    <!-- YouTube 検索説明 -->
    <div
      id="youtube"
    >
      <h1 class="mt-15">
        YouTube 動画をディクテーションする
      </h1>
      <p class="mt-5">
        Dictation Manager では YouTube 音源をディクテーションすることもできます。<br>
      </p>
      <p>
        あなたの好きな海外スターの声を聞いて英語学習ができます。
      </p>
      <img
        class="support_img mt-5"
        src="image/support3.jpg"
        alt="support1"
        width="90%"
      >
      <div class="text">
        <p>① 検索したいキーワードを入力します</p>
        <p>② ディクテーションしたい動画の videoId を取得します</p>
      </div>
      <img
        class="support_img mt-5"
        src="image/support4.jpg"
        alt="support1"
        width="90%"
      >
      <div class="text">
        <p class="mt-5">
          ① videoId を取得した動画が表示されます
        </p>
        <p>② 取得した動画を保存するには Update ボタンを押してください</p>
        <p>③ 取得した動画を削除するには Delete ボタンを押して Update ボタンを押してください</p>
      </div>
    </div>
    <!-- MP3 upload -->
    <div
      id="mp3"
    >
      <h1 class="mt-15">
        MP3 アップロード
      </h1>
      <p class="mt-5">
        Dictation Manager ではMP3音源をディクテーションすることもできます。<br>
      </p>
      <p>
        TOEICなどのお手持ちの英語教材の音声をディクテーションすることも可能です。
      </p>
      <img
        class="support_img mt-5"
        src="image/support5.jpg"
        alt="support1"
        width="90%"
      >
      <div class="text">
        <p class="mt-5">
          ① クリックすると自分のファイルからMP3をアップロードできます。選択したら Submit ボタンをクリック押してください
        </p>
      </div>
      <img
        class="support_img mt-5"
        src="image/support6.jpg"
        alt="support1"
        width="90%"
      >
      <div class="text">
        <p class="mt-5">
          ① アップした音声はこちらに表示されます。（Update ボタンは押さなくて大丈夫です）
        </p>
      </div>
    </div>
  </v-main>
</template>

<style>

  .v-main {
    margin : 0 auto;
    width: 90%;
  }

  #dictation_toha {
    font-size: 40px
  }

  #dictation_exp {
    font-size: 20px
  }

  .support_img {
    width: 750px;
    height: 400px;
  }

  #support_main p {
    padding-top: 10px;
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    opacity: 0.7;
  }

  @media screen and (max-width: 600px) {

    #dictation_toha {
      font-size: 19px;
    }

    #dictation_exp {
      font-size: 15px
    }

    #support_main h1 {
      font-size: 19px;
    }

    #support_main p {
      font-size: 14px;
      text-align: left;
    }

    

  }

</style>