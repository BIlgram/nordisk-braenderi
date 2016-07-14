<?php

namespace App\Http\Controllers;

use App\Models\State;
use Illuminate\Http\Request;

use App\Http\Requests;

class StateController extends Controller
{
    public function index(){
        return State::all();
    }
}
