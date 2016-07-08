@extends('layouts.main')
@section('title', 'Produktion - '.$spirit->name)
@section('header', $spirit->name)
@section('subheader', 'Spiritus')
@section('header-buttons')
    <div class="button-group">
        <a href="{{ route('spirit.edit', $spirit->id) }}" role="button">Redigér</a>
        <form class="confirm" action="{{ route('spirit.destroy', $spirit->id) }}" method="POST">
            {{ method_field('DELETE') }}
            {{ csrf_field() }}
            <button type="submit">Fjern</button>
        </form>
    </div>
@endsection
@section('content')

    <section id="spirit-show">
        <div class="output">
            <span>Spiritustype</span>
            <div>{{ $spirit->name }}</div>
        </div>

        <div class="output">
            <span>Alkoholprocent</span>
            <div>{{ $spirit->abv }}</div>
        </div>

        <div class="output">
            <span>Opskrift</span>
            <div>{{ $spirit->recipe }}</div>
        </div>

        <div class="output">
            <span>Produktionsprocess</span>
            <ul>
                {{--@foreach($spirit->process as $step)--}}
                    {{--<li>{{ $step->name }}</li>--}}
                {{--@endforeach--}}
            </ul>
        </div>
    </section>

@endsection