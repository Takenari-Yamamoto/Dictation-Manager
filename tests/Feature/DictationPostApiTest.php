<?php

namespace Tests\Feature;

use App\Dictation;
use App\User;
use App\Http\Controllers\DictationController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class DictationPostApiTest extends TestCase
{
    use RefreshDatabase;

    //user作成
    public function setUp(): void
    {
        parent::setUp();

        // テストユーザー作成
        $this->user = factory(User::class)->create();
    }

    // 投稿、更新、削除
    public function test_ディクテーションCRUD()
    {
        // ダミーユーザー作成
        $user = factory(User::class)->create();

        // 投稿機能テスト
        $response = $this->actingAs($user)
            ->postJson(route('dictation.store'), [
                'title' => 'test',
                'content' => 'test test test test',
            ]);
            
        $response
            ->assertOk()
            ->assertJsonFragment([ # レスポンス JSON に以下の値を含む
                'title' => 'test',
                'content' => 'test test test test',
            ]);
        $this->assertEquals(1, Dictation::count());

        // 一覧取得
        $response_list = $this->actingAs($user)
            ->getJson(route('dictation.index'));
        $response_list
            ->assertOk() 
            ->assertJsonCount(1)
            ->assertJsonFragment([
                'title' => 'test',
                'content' => 'test test test test',
            ]);

        //詳細取得
        $dictaion_id = $response['id'];
        $response_detail = $this->actingAs($user)
            ->getJson(route('dictation.show', $dictaion_id));
        $response->assertOk();

        // 投稿更新
        $response_update = $this->actingAs($user)
            ->putJson(route('dictation.update', $dictaion_id), [
                'title' => 'updated test',
                'content' => 'update update update',
            ]);
        $response_update->assertOk();

        // 投稿削除
        $response_delete = $this->actingAs($user)
            ->deleteJson(route('dictation.destroy', $dictaion_id));
        $response_update->assertOk();
            
    }

}
