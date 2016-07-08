<?php

namespace App\Http\Controllers;

use App\Models\Spirit;
use App\Models\State;
use Illuminate\Http\Request;

use App\Http\Requests;

class SpiritController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Spirit::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('spirit.create', ['states' => State::all()]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        var_dump($request->process);
        $this->validate($request, Spirit::rules());

        $spirit = new Spirit();

        $spirit->name = $request->name;
        $spirit->abv = $request->abv;
        $spirit->recipe = $request->recipe;
        $spirit->process = $request->process;

        $spirit->save();

        flash('Spirit was successfully created!', 'success');

        return redirect()->route('spirit.show', $spirit->id);
    }

    /**
     * Display the specified resource.
     *
     * @param Spirit $spirit
     * @return \Illuminate\Http\Response
     * @internal param int $id
     */
    public function show(Spirit $spirit)
    {
        return view('spirit.show', ['spirit' => $spirit]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Spirit $spirit
     * @return \Illuminate\Http\Response
     * @internal param int $id
     */
    public function edit(Spirit $spirit)
    {
        return view('spirit.edit', ['spirit' => $spirit, 'states' => State::all()]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param $spirit
     * @return \Illuminate\Http\Response
     * @internal param int $id
     */
    public function update(Request $request, Spirit $spirit)
    {
        $this->validate($request, Spirit::rules($spirit->id));

        $spirit->name = $request->name;
        $spirit->abv = $request->abv;
        $spirit->recipe = $request->recipe;
        $spirit->save();

        flash('Spirit was successfully updated!', 'success');

        return redirect()->route('spirit.show', $spirit->id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Spirit $spirit
     * @return \Illuminate\Http\Response
     * @throws \Exception
     * @internal param int $id
     */
    public function destroy(Spirit $spirit)
    {
        $spirit->delete();
        flash('Spirit was successfully removed!', 'success');
        return redirect()->route('spirit.index');
    }

    public function states()
    {
        return State::all();
    }
}
