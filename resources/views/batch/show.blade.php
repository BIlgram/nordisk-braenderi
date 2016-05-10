@extends('layouts.main')
@section('title', 'Produktion - Batches'.$batch->name)
@section('header', $batch->name)
@section('subheader', 'Batches')
@section('content')

    <section id="batch-show">
            <div>
                <span>Oprettelsesdato</span>
                <div>{{ $batch->created_at->toDateString() }}</div>
            </div>

            <div>
                <span>Spiritustype</span>
                <div>{{ $batch->spirit->name }}</div>
            </div>
        </div>
    </section>
@endsection