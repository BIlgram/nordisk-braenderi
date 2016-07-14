<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class State extends Model
{
    public $timestamps = false;

    public static function rules($id = null, $merge = [])
    {
        return array_merge([
            'name' => 'required|unique:spirits,name' . ($id ? ",$id" : ''),
        ], $merge);
    }
}
