@extends('layouts.main')
@section('title', 'Administration - Brugere')
@section('header', 'Brugere')
@section('subheader', 'Administration')
@section('header-buttons')
    <a href="{{ route('user.create') }}" role="button">Opret</a>
@endsection
@section('content')

    <section id="user-index">
        <table>
            <tr>
                <th class="span">Navn</th>
            </tr>
            @foreach($users as $user)
                <tr>
                    <td>
                        <a href="{{ route('user.show', $user->id) }}">{{ $user->name }}</a>
                    </td>
                </tr>
            @endforeach
        </table>
    </section>

@endsection