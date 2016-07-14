@extends('layouts.main')
@section('title', 'Administration - Spiritus')
@section('header', 'Spiritus')
@section('subheader', 'Administration')
@section('header-buttons')
    <a href="{{ route('spirit.create') }}" role="button">Opret</a>
@endsection
@section('content')

    <section id="spirit-index">
        <table>
            <tr>
                <th class="span">Navn</th>
            </tr>
            @foreach($spirits as $spirit)
                <tr>
                    <td>
                        <a href="{{ route('spirit.show', $spirit->id) }}">{{ $spirit->name }}</a>
                    </td>
                </tr>
            @endforeach
        </table>
    </section>

@endsection