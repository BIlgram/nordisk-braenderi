<?php

namespace App\Http\Controllers;

use App\Models\Batch;
use App\Models\Spirit;
use Carbon\Carbon;
use Illuminate\Http\Request;

use App\Http\Requests;

class BatchController extends Controller
{
    public function index()
    {
        return Batch::with('spirit')->get();
    }

    public function store(Request $request)
    {
        $this->validate($request, Batch::rules());
        $batch = new Batch();

        $batch->name = $request->name;
        $batch->spirit_id = $request->spirit_id;
        $batch->created_at = $request->created_at;

        $batch->save();

        return $batch;
    }

    public function show($id)
    {
        return Batch::with('spirit')->find($id);
    }

    public function edit(Batch $batch)
    {
        return view('batch.edit', ["batch" => $batch, "spirits" => Spirit::all()]);
    }

    public function update(Request $request, Batch $batch)
    {
        $this->validate($request, Batch::rules($batch->id));

        $batch->name = $request->name;
        $batch->spirit_id = $request->spirit_id;
        $batch->step = $request->step;
        $batch->save();

        return $batch;
    }

    public function destroy(Batch $batch)
    {
        $batch->delete();

        return $batch;
    }
}
