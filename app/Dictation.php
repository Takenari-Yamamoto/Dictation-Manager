<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Dictation extends Model
{
    protected $table = 'dictations';

    protected $fillable =
    [   
        'title',
        'content',
        'user_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
