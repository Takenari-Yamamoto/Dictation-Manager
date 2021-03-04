<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Aws\S3\S3Client;  
use Aws\Exception\AwsException;
use App\Http\Requests\Ajax\User\WordRequest;
use App\Word;
use Illuminate\Support\Facades\Auth;

class WordController extends Controller
{
    public function index() {

        $user_id = Auth::id();
        $words = Word::all()->where('user_id', $user_id);
        return response()->json($words);
    
    }

    public function store(WordRequest $request)
    {
        $status = 200;
        $message = null;

        $word = new Word;
        $word->id = $request->id;
        $word->word = $request->word;
        $word->classification = $request->classification;
        $word->meaning = $request->meaning;
        $word->pronunciation = $request->pronunciation;
        $word->user_id = $request->user()->id;
        $word->save();

        return response()->json($word);
    }

    public function update(WordRequest $request, $id)
    {
        $status = 200;
        $message = null;
        // アップデート
        $update = [
            'word' => $request->word,
            'classification' => $request->classification,
            'meaning' => $request->meaning,
            'pronunciation' => $request->pronunciation,
        ];
        $word = Word::where('id', $id)->update($update);
        return response()->json($word);
    }

    public function destroy($id)
    {
        $word = Word::find($id);
        $word->delete();
        return redirect('/');
    }

}
