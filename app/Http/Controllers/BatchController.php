<?php

namespace App\Http\Controllers;

use App\Models\Batch;
use App\Models\Spirit;
use Carbon\Carbon;
use Illuminate\Http\Request;

use App\Http\Requests;

class BatchController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('batch.index', ["batches" => Batch::all()]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('batch.create', ["spirits" => Spirit::all()]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, Batch::$rules);
        $batch = new Batch();

        $batch->name = $request->name;
        $batch->spirit_id = $request->spirit_id;
        $batch->created_at = Carbon::parse($request->created_at);

        $batch->save();

        $request->session()
            ->flash('alert-success', 'Batch was successfully created!');

        return redirect()->route('batch.show', $batch->id);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return view('batch.show', ["batch" => Batch::find($id)]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return view('batch.edit', ["batch" => Batch::find($id), "spirits" => Spirit::all()]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->validate($request, Batch::$rules);

        $batch = Batch::find($id);
        $batch->name = $request->name;
        $batch->spirit_id = $request->spirit_id;
        //$batch->created_at = Carbon::parse($request->created_at);
        $batch->save();

        $request->session()
            ->flash('alert-success', 'Batch was successfully updated!');

        return redirect()->route('batch.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $batch = Batch::find($id);
        $batch->delete();

        $request->session()
            ->flash('alert-success', 'Batch was successfully removed!');

        return redirect()->route('batch.index');
    }
}
