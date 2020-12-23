<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DictationController extends Controller
{
    public function add()
  {
      return view('dictations.create');
  }

  public function create(Request $request)
  {
      $dictation = new Dictation;
      $form = $request->all();

      //s3アップロード開始
      $image = $request->file('image');
      // バケットの`myprefix`フォルダへアップロード
      $path = Storage::disk('s3')->putFile('myprefix', $image, 'public');
      // アップロードした画像のフルパスを取得
      $dictation->image_path = Storage::disk('s3')->url($path);

      $dictation->save();

      return redirect('dictations/create');
  }
}
