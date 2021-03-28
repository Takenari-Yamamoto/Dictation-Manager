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

    public function setUp(): void
    {
        parent::setUp();

        // テストユーザー作成
        $this->user = factory(User::class)->create();
    }

    public function test_ディクテーションを投稿()
    {

        factory(Dictation::class)->create();
        $user_id = factory(Dictation::class)->create()->id;
        $dictation = Dictation::first();
        
        $response = $this->postJson('dictation.store', [
            'user_id' => $user_id,
            'id' => $dictation->id,
            'title' => $dictation->title,
            'content' => $dictation->content,
            ]);
        
        // dd($response);
        
        $response->assertStatus(201);
    }

}
