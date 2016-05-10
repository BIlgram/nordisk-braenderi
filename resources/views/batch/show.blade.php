@extends('layouts.main')
@section('title', 'Produktion - '.$batch->name)
@section('header', $batch->name)
@section('subheader', 'Batch')
@section('header-buttons')
    <div class="button-group">
        <a href="{{ route('batch.edit', $batch->id) }}" role="button">Redigér</a>
        <a href="{{ route('batch.destroy', $batch->id) }}" role="button">Fjern</a>
    </div>
@endsection
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
    </section>
@endsection