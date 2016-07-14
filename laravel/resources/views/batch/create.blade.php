@extends('layouts.main')
@section('title', 'Produktion - Opret batch')
@section('header', 'Opret batch')
@section('subheader', 'Produktion')
@section('content')

    <section id="batch-create">
        @if (count($errors) > 0)
            <div class="errors">
                <ul>
                    @foreach($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

        <form action="{{ route('batch.store') }}" method="POST">
            {{ csrf_field() }}

            <label for="spirit_id">
                <span>Spiritustype</span>
                <select id="spirit_id" name="spirit_id">
                    @foreach($spirits as $spirit)
                        <option value="{{ $spirit->id }}">{{ $spirit->name }}</option>
                    @endforeach
                </select>
            </label>

            <label>
                <span>Oprettelsesdato</span>
                <input name="created_at" value="{{ \Carbon\Carbon::now()->toDateString() }}" type="date">
            </label>

            <label>
                <span>Batchnavn</span>
                <input name="name" type="text" value="{{ old('name') }}">
            </label>

            <button type="submit">Opret</button>
        </form>
    </section>

@endsection
