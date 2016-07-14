@extends('layouts.main')
@section('title', 'Produktion - '.$batch->name)
@section('header', $batch->name)
@section('subheader', 'Batch')
@section('header-buttons')
    <div class="button-group">
        <a href="{{ route('batch.edit', $batch->id) }}" role="button">Redigér</a>
        <form class="confirm" action="{{ route('batch.destroy', $batch->id) }}" method="POST">
            {{ method_field('DELETE') }}
            {{ csrf_field() }}
            <button type="submit">Fjern</button>
        </form>
    </div>
@endsection
@section('content')

    <section id="batch-show">
        <form class="confirm" action="{{ route('batch.update', $batch->id) }}" method="POST">
            {{ method_field('PUT') }}
            {{ csrf_field() }}
            <label>
                <span>Oprettelsesdato</span>
                <input readonly value="{{ $batch->created_at->toDateString() }}">
            </label>

            <label>
                <span>Spiritustype</span>
                <input readonly value="{{ $batch->spirit->name }}">
            </label>

            <button name="state_id" value="1" type="submit">Begynd mæskning</button>
            <button name="state_id" value="2" type="submit">Begynd destillering</button>
        </form>
    </section>

@endsection