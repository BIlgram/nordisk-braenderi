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

    public function process()
    {
        return $this->spirit->states();
    }

    public function mashing()
    {
        return $this->hasMany('App\Models\Steps\Mashing');
    }

    public function distillation()
    {
        return $this->hasMany('App\Models\Steps\Distillation');
    }

    public function dilution()
    {
        return $this->hasMany('App\Models\Steps\Dilution');
    }

    public function filtration()
    {
        return $this->hasMany('App\Models\Steps\Filtration');
    }

    public function storage()
    {
        return $this->hasMany('App\Models\Steps\Storage');
    }

    public function bottling()
    {
        return $this->hasMany('App\Models\Steps\Bottling');
    }

    public function blending()
    {
        return $this->hasMany('App\Models\Steps\Blending');
    }
}
