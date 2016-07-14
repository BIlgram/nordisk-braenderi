@extends('layouts.main')
@section('title', 'Produktion - Opret Spiritus')
@section('header', 'Redigér Spiritus')
@section('subheader', 'Spiritus')
@section('content')

    <section id="spirit-edit">
        @if (count($errors) > 0)
            <div class="errors">
                <ul>
                    @foreach($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

        <form action="{{ route('spirit.update', $spirit->id) }}" method="POST">
            {{ method_field('PUT') }}
            {{ csrf_field() }}

            <label>
                <span>Spiritusnavn</span>
                <input name="name" value="{{ $spirit->name }}" type="text">
            </label>

            <label>
                <span>Alkoholprocent</span>
                <input name="abv" value="{{ $spirit->abv }}" type="number" step="0.01">
            </label>

            <label>
                <span>Opskrift</span>
                <textarea name="recipe" rows="5">{{ $spirit->recipe }}</textarea>
            </label>

            <div id="process">
                <input type="hidden" name="states" value="{{ json_encode($states) }}">
                <input type="hidden" name="process" value="{{ json_encode($spirit->process) }}">
            </div>

            <button type="submit">Gem</button>
        </form>
    </section>

@endsection
