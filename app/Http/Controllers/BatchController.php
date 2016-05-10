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

        flash('Batch was successfully created!', 'success');

        return redirect()->route('batch.show', $batch->id);
    }

    /**
     * Display the specified resource.
     *
     * @param Batch $batch
     * @return \Illuminate\Http\Response
     * @internal param int $id
     */
    public function show(Batch $batch)
    {
        return view('batch.show', ["batch" => $batch]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Batch $batch
     * @return \Illuminate\Http\Response
     * @internal param int $id
     */
    public function edit(Batch $batch)
    {
        return view('batch.edit', ["batch" => $batch, "spirits" => Spirit::all()]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param Batch $batch
     * @return \Illuminate\Http\Response
     * @internal param int $id
     */
    public function update(Request $request, Batch $batch)
    {
        $this->validate($request, Batch::$rules);

        $batch->name = $request->name;
        $batch->spirit_id = $request->spirit_id;
        $batch->save();

        flash('Batch was successfully updated!', 'success');

        return redirect()->route('batch.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Batch $batch
     * @return \Illuminate\Http\Response
     * @internal param int $id
     */
    public function destroy(Batch $batch)
    {
        $batch->delete();
        flash('Batch was successfully removed!', 'success');
        return redirect()->route('batch.index');
    }
}
