@extends('layouts.main')
@section('title', 'Produktion - Opret batch')
@section('header', 'Redigér batch')
@section('subheader', 'Batches')
@section('content')
    <section id="batch-create">
        @if(Session::has('alert-success'))
            <div class="alert success">
                {{ Session::get('alert-success') }}
            </div>
        @endif

        @if (count($errors) > 0)
            <div class="errors">
                <ul>
                    @foreach($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

        <div class="left">
            <form action="{{ route('batch.update', $batch->id) }}" method="POST">
                {{ method_field('PUT') }}
                {{ csrf_field() }}

                <label>
                    <span>Batchnavn</span>
                    <input name="name" value="{{ $batch->name }}" type="text">
                </label>

                <label>
                    <span>Oprettelsesdato</span>
                    <input name="created_at" value="{{ old('created_at', $batch->created_at->toDateString()) }}"
                           type="date">
                </label>

                <label>
                    <span>Spiritustype</span>
                    <select name="spirit_id">
                        @foreach($spirits as $spirit)
                            @if($spirit->id == old('spirit_id', $batch->spirit->id))
                                <option value="{{ $spirit->id }}" selected>{{ $spirit->name }}</option>
                            @else
                                <option value="{{ $spirit->id }}">{{ $spirit->name }}</option>
                            @endif
                        @endforeach
                    </select>
                </label>

                <button type="submit">Gem</button>
            </form>
        </div>
    </section>
@endsection
