@extends('layouts.main')
@section('title', 'Produktion - Opret batch')
@section('header', 'Opret batch')
@section('subheader', 'Batches')
@section('content')
    @if(Session::has('alert-success'))
        <div class="alert success">
            {{ Session::get('alert-success') }}
        </div>
    @endif

    @if (count($errors) > 0)
        <ul class="errors">
            @foreach($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    @endif

    <form action="{{ route('batch.update', $batch->id) }}" method="POST">
        {{ method_field('PUT') }}
        {{ csrf_field() }}

        <label for="name">Batchnavn</label>
        <input id="name" name="name" value="{{ $batch->name }}" type="text">

        <label for="created_at">Oprettelsesdato</label>
        <input id="created_at" name="created_at" value="{{ old('created_at', $batch->created_at->toDateString()) }}"
               type="date">

        <label for="spirit_id">Spirittype</label>
        <select id="spirit_id" name="spirit_id">
            @foreach($spirits as $spirit)
                <option value="{{ $spirit->id }}">{{ $spirit->name }}</option>
            @endforeach
        </select>

        <button type="submit">Gem</button>
    </form>
@endsection
