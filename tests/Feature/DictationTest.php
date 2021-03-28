<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class DictationTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_store()
    {
        // $this->withoutExceptionHandling();
        $response=$this->post('/api/dictation',[
            'title'=>'hogehoge',
            'content'=>'hoge',
            'user_id' => '3'
        ]);
        $response->assertStatus(201);
    }
}
