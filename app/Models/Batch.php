<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Batch extends Model
{
    public static $rules = [
        'name' => 'required|unique:batches',
        'spirit_id' => 'required|integer',
        'created_at' => 'required|date'
    ];

    public function spirit()
    {
        return $this->belongsTo('App\Models\Spirit');
    }
}
