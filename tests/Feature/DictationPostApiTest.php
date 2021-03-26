<?php

namespace Tests\Feature;

use App\Dictation;
use App\User;
use App\Http\Controllers\DictationController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class DictationTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     * @test
     */
    
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();

        // テストユーザー作成
        $this->user = factory(User::class)->create();
    }

    public function ディクテーションを投稿()
    {
        factory(Dictation::class)->create();
        $dictation = Dictation::first();

        $title ="sample title";
        $content = 'sample content';

        $response = $this->json('GET', route('dictation.create', [
            'id' => $dictation->id,
        ]), compact('title', 'content'));

        $response->assertStatus(201)
            // JSONフォーマットが期待通りであること
            ->assertJsonFragment([
                "title" => $title,
                "content" => $content,
            ]);
        // 内容がAPIでリクエストしたものであること
        $this->assertEquals($content, $dictations[0]->content);
    }
}
