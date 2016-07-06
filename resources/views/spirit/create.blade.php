@extends('layouts.main')
@section('title', 'Administration - Opret Spiritus')
@section('header', 'Opret Spiritus')
@section('subheader', 'Administration')
@section('content')

    <section id="spirit-create">
        @if (count($errors) > 0)
            <div class="errors">
                <ul>
                    @foreach($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

        <form action="{{ route('spirit.store') }}" method="POST">
            {{ csrf_field() }}

            <label>
                <span>Spiritusnavn</span>
                <input name="name" value="{{ old('name') }}" type="text">
            </label>

            <label>
                <span>Alkoholprocent</span>
                <input name="abv" value="{{ old('abv') }}" type="number" step="0.01">
            </label>

            <label>
                <span>Opskrift</span>
                <textarea name="recipe" value="{{ old('recipe') }}" rows="5"></textarea>
            </label>

            <hr>

            <label id="process">
                {{--Javascript Generated--}}
            </label>

            <hr>

            <button type="submit">Opret</button>
        </form>
    </section>

@endsection
