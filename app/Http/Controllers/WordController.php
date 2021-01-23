<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WordController extends Controller
{
    public function index() {

        $user_id = Auth::id();
        $words = Word::all()->where('user_id', $user_id);
        return $words;
    
    }

    public function store(Request $request)
    {
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

    public function update(Request $request, $id)
    {
        $update = [
            'classification' => $request->classification,
            'meaning' => $request->meaning,
            'pronunciation' => $request->pronunciation
        ];
        Word::where('id', $id)->update($update);
    }

    public function destroy(Request $request)
    {
        $word = Word::where('id', $request->id)->delete();
        $words = Word::all();
        return $words;
    }

}
