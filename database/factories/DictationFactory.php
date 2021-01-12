<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Dictaion;
use Faker\Generator as Faker;

$factory->define(Dictaion::class, function (Faker $faker) {
    return [
        'content' => "test tests test test tests tests"
    ];
});
