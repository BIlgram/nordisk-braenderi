<?php

namespace App\Http\Controllers;

use App\Models\Spirit;
use App\Models\State;
use Illuminate\Http\Request;

use App\Http\Requests;

class SpiritController extends Controller
{
    public function index()
    {
        return Spirit::with('states')->get();
    }

    public function store(Request $request)
    {
        $this->validate($request, Spirit::rules());

        $spirit = new Spirit();

        $spirit->name = $request->name;
        $spirit->abv = $request->abv;
        $spirit->recipe = $request->recipe;

        $spirit->states()->attach($request->process);

        $spirit->save();

        return $spirit;
    }

    public function show(Spirit $spirit)
    {
        return $spirit;
    }

    public function update(Request $request, Spirit $spirit)
    {
        $this->validate($request, Spirit::rules($spirit->id));

        $spirit->name = $request->name;
        $spirit->abv = $request->abv;
        $spirit->recipe = $request->recipe;

        $spirit->states()->attach($request->process);

        $spirit->save();

        return $spirit;
    }

    public function destroy(Spirit $spirit)
    {
        $spirit->delete();

        return $spirit;
    }
}
