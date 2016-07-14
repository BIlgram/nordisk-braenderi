@extends('layouts.main')
@section('title', 'Administration - '.$user->name)
@section('header', $user->name)
@section('subheader', 'Bruger')
@section('header-buttons')
    <div class="button-group">
        <a href="{{ route('user.edit', $user->id) }}" role="button">Redigér</a>
        <form class="confirm" action="{{ route('user.destroy', $user->id) }}" method="POST">
            {{ method_field('DELETE') }}
            {{ csrf_field() }}
            <button type="submit">Fjern</button>
        </form>
    </div>
@endsection
@section('content')

    <section id="user-show">
        <div class="output">
            <span>Navn</span>
            <div>{{ $user->name }}</div>
        </div>

        <div class="output">
            <span>Oprettelsesdato</span>
            <div>{{ $user->created_at->toDateString() }}</div>
        </div>
    </section>

@endsection