<?php

use Illuminate\Http\Request;

// 会員登録
Route::post('/register', 'Auth\RegisterController@register')->name('register');

// ログイン
Route::post('/login', 'Auth\LoginController@login')->name('login');

// ログアウト
Route::post('/logout', 'Auth\LoginController@logout')->name('logout');

// ログインユーザー
Route::get('/user', function () {
    return Auth::user();
})->name('user');

Route::get('get-presigned-url', 'DictationController@getPresignedUrl');

Route::group(['middleware' => ['api']],function(){
    // 記事を投稿する処理
    Route::post('dictation/',function($id){
        //投稿するユーザーを取得
        $user = App\User::where('id',$id)->first();

        $dictation = new App\Dictation();
        $dictation->content = request('content');

        //ユーザーに関連づけて保存
        $user->dictations()->save($dictation);

        //テストのためtitle、contentのデータをリターン
        return ['content' => request('content')];
    });

});