<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DictationController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function create(StoreDictation $request)
    {
        $extension = $request->dictation->extension();

        $dictation = new Dictation();

        $dictation->filename = $dictation->id . '.' .$extension;

        Storage::cloud()
            ->putFileAs('', $request->dictation, $dictation->filename, 'public');
            DB::beginTransaction();

            try {
                Auth::user()->dictations()->save($dictation);
                DB::commit();
            } catch (\Exception $exception) {
                DB::rollBack();
                // DBとの不整合を避けるためアップロードしたファイルを削除
                Storage::cloud()->delete($dictation->filename);
                throw $exception;
            }
    
            // リソースの新規作成なので
            // レスポンスコードは201(CREATED)を返却する
            return response($dictation, 201);
    }
}
