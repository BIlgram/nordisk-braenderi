<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    protected $fillable = [
        'name', 'email', 'password',
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    public static function rules($id = null, $merge = [])
    {
        return array_merge([
            'name' => 'required',
            'email' => 'required|email|unique:users,email' . ($id ? ",$id" : ''),
            'password' => 'required|confirmed'
        ], $merge);
    }
}
