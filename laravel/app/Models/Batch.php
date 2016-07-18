<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Batch extends Model
{
    public static function rules($id = null, $merge = [])
    {
        return array_merge([
            'name' => 'required|unique:batches,name' . ($id ? ",$id" : ''),
            'spirit_id' => 'required|integer',
            'created_at' => 'required|date'
        ], $merge);
    }

    public function spirit()
    {
        return $this->belongsTo('App\Models\Spirit');
    }
}
