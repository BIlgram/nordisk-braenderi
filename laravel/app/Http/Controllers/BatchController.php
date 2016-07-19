<?php

namespace App\Http\Controllers;

use App\Models\Batch;
use App\Models\Spirit;
use App\Models\Steps\Bottling;
use App\Models\Steps\Dilution;
use App\Models\Steps\Distillation;
use App\Models\Steps\Filtration;
use App\Models\Steps\Mashing;
use App\Models\Steps\Storage;
use Carbon\Carbon;
use Illuminate\Http\Request;

use App\Http\Requests;

class BatchController extends Controller
{
    public function index()
    {
        return Batch::with('spirit', 'mashing', 'distillation', 'dilution', 'filtration', 'storage', 'bottling', 'blending')->get();
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
        return Batch::with('spirit', 'process', 'mashing', 'distillation', 'dilution', 'filtration', 'storage', 'bottling', 'blending')->find($id);
    }

    public function update(Request $request, Batch $batch)
    {
        $this->validate($request, Batch::rules($batch->id));

        $batch->name = $request->name;
        $batch->spirit_id = $request->spirit_id;
        $batch->step = $request->step;

        $batch->save();

        // get process array from spirit, use the step attribute as array index, and get ID
        switch ($batch->process[$batch->step]->id){
            case 1:
                $mashing = new Mashing();

                $mashing->batch_id = $batch->id;
                $mashing->quality = $request->mashing_quality;
                $mashing->sugar = $request->mashing_sugar;
                $mashing->ferment = $request->mashing_ferment;
                $mashing->amount = $request->mashing_amount;
                $mashing->comment = $request->mashing_comment;

                $mashing->save();
                break;
            case 2:
                $distillation = new Distillation();

                $distillation->batch_id = $batch->id;
                $distillation->weight = $request->distillation_weight;
                $distillation->abv = $request->distillation_abv;
                $distillation->comment = $request->distillation_comment;

                $distillation->save();
                break;
            case 3:
                $dilution = new Dilution();

                $dilution->batch_id = $batch->id;
                $dilution->comment = $request->dilution_comment;
                $dilution->startweight = $request->dilution_startweight;
                $dilution->startabv = $request->dilution_startabv;
                $dilution->tableabv = $request->dilution_tableabv;
                $dilution->desiredabv = $request->dilution_desiredabv;
                $dilution->tabledesabv = $request->dilution_tabledesabv;
                $dilution->pureabv = $request->dilution_pureabv;
                $dilution->afterweight = $request->dilution_afterweight;
                $dilution->addwater = $request->dilution_addwater;

                $dilution->save();
                break;
            case 4:
                $filtration = new Filtration();

                $filtration->afterweight = $request->filtration_afterweight;
                $filtration->abv = $request->filtration_abv;
                $filtration->tabledensity = $request->filtration_tabledensity;
                $filtration->volume = $request->filtration_volume;
                $filtration->comment = $request->filtration_comment;

                $filtration->save();
                break;
            case 5:
                $storage = new Storage();

                $storage->comment = $request->storage_comment;

                $storage->save();
                break;
            case 6:
                $bottling = new Bottling();

                $bottling->volume = $request->bottling_volume;
                $bottling->number = $request->bottling_number;
                $bottling->remaining = $request->bottling_remaining;
                $bottling->comment = $request->bottling_comment;

                $bottling->save();
                break;
            case 7:
                $batch->blending = $request->blending;
                break;

        }



        return $batch;
    }

    public function destroy(Batch $batch)
    {
        $batch->delete();

        return $batch;
    }
}
