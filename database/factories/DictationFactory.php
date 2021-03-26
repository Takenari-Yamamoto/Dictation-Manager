<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Dictaion;
use Faker\Generator as Faker;

$factory->define(Dictaion::class, function (Faker $faker) {
    return [
        'title' => substr($faker->text, 0, 500),
        'content' => substr($faker->text, 0, 500),
        'user_id' => function() {
            factory(App\User::class)->create()->id;
        }
    ];
});
