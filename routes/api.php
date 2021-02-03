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

//署名付きURL取得
Route::get('get-presigned-url', 'DictationController@getPresignedUrl');

//Dictation
Route::group(['middleware' => ['api']],function(){
    Route::resource('dictation', 'DictationController');
});

//確認
Route::post('/checkDictationExist', 'DictationController@checkExist');

//単語
Route::group(['middleware' => ['api']],function(){
    Route::resource('word', 'WordController');
});

//Youtube 動画検索
Route::get('searchVideo', 'YoutubeController@searchVideo');