<?php

namespace Tests\Feature;

use App\Dictation;
use App\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class DictationListApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_投稿一覧を表示()
    {
        // 5つの写真データを生成する
        factory(Dictation::class, 5)->create();

        $response = $this->json('GET', route('dictation.index'));

        // 生成した写真データを作成日降順で取得
        // あとで聞く
        $dictations = Dictation::with('user_id')->orderBy('created_at', 'desc')->get();

        // data項目の期待値
        $expected_data = $dictations->map(function ($dictation) {
            return [
                'id' => $dictation->id,
                'title' => $dictation->title,
                'content' => $dictation->content,
            ];
        })
        ->all();

        $response->assertStatus(200)
            // レスポンスJSONのdata項目に含まれる要素が5つであること
            ->assertJsonCount(5, 'data')
            // レスポンスJSONのdata項目が期待値と合致すること
            ->assertJsonFragment([
                "data" => $expected_data,
            ]);
    }
}
