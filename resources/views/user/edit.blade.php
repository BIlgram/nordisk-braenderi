@extends('layouts.main')
@section('title', 'Produktion - Redigér Bruger')
@section('header', 'Redigér Bruger')
@section('subheader', 'Bruger')
@section('content')

    <section id="user-edit">
        @if (count($errors) > 0)
            <div class="errors">
                <ul>
                    @foreach($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

        <form action="{{ route('user.update', $user->id) }}" method="POST">
            {{ method_field('PUT') }}
            {{ csrf_field() }}

            <label>
                <span>Navn</span>
                <input name="name" value="{{ old('name', $user->name) }}" type="text">
            </label>

            <label>
                <span>Email</span>
                <input name="email" value="{{ old('email', $user->email) }}" type="text">
            </label>

            <button type="submit">Gem</button>
        </form>
    </section>

@endsection
