@extends('layouts.main')
@section('title', 'Administration - Opret Bruger')
@section('header', 'Opret Bruger')
@section('subheader', 'Administration')
@section('content')

    <section id="user-create">
        @if (count($errors) > 0)
            <div class="errors">
                <ul>
                    @foreach($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

        <form action="{{ route('user.store') }}" method="POST">
            {{ csrf_field() }}

            <label>
                <span>Navn</span>
                <input name="name" value="{{ old('name') }}" type="text">
            </label>

            <label>
                <span>Email</span>
                <input name="email" value="{{ old('email') }}" type="email">
            </label>

            <label>
                <span>Adgangskode</span>
                <input name="password" type="password">
            </label>

            <label>
                <span>Bekræft Adgangskode</span>
                <input name="password_confirmation" type="password">
            </label>

            <button type="submit">Opret</button>
        </form>
    </section>

@endsection
