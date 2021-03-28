<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\User;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(App\Dictation::class, function (Faker $faker) {
    return [
        'user_id' => factory(App\User::class),
        'title' => substr($faker->text, 0, 20),
        'content' => substr($faker->text, 0, 500),
        'created_at' => $faker->dateTime(),
        'updated_at' => $faker->dateTime(),
    ];
});
