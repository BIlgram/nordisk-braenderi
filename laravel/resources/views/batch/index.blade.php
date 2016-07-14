@extends('layouts.main')
@section('title', 'Produktion - Oversigt')
@section('header', 'Oversigt')
@section('subheader', 'Produktion')
@section('header-buttons')
    <a href="{{ route('batch.create') }}" role="button">Opret</a>
@endsection
@section('content')

    <section id="batch-index">
        <table>
            <tr>
                <th class="span">Navn</th>
                <th class="shrink">Tilstand</th>
                <th class="shrink">Mængde</th>
                <th class="strink">Dato</th>
            </tr>
            @foreach($batches as $batch)
                <tr>
                    <td>
                        <a href="{{ route('batch.show', $batch->id) }}">{{ $batch->name }}</a>
                    </td>
                    <td>Mæskning</td>
                    <td>20 kg</td>
                    <td>{{ $batch->created_at->toDateString() }}</td>
                </tr>
            @endforeach
        </table>
    </section>

@endsection