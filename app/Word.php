<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Word extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function dictation()
    {
        return $this->belongsTo(Dictation::class);
    }
}
