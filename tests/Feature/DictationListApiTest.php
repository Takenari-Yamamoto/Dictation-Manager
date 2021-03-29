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

    //user作成
    public function setUp(): void
    {
        parent::setUp();

        // テストユーザー作成
        $this->user = factory(User::class)->create();
    }

    public function test_投稿一覧を表示()
    {
        $user = factory(User::class)->create();
        $dictations = factory(Dictation::class, 5)->actingAs($user)->create();

        dd($user);

        $response = $this->actingAs($user)->getJson(route('dictation.index'), [
            'title' => $dictation->title,
            'content' => $dictation->content,
        ]);

        $response->assertStatus(200);
    }
}
