@extends('layouts.main')
@section('title', 'Produktion - Batches'.$batch->name)
@section('header', $batch->name)
@section('subheader', 'Batches')
@section('content')
    <h1>Batch</h1>
    <div>{{ $batch->name }}</div>

    <h2>Spirit Type</h2>
    <div>Name: {{ $batch->spirit->name }}</div>
    <div>Alcohol percentage: {{ $batch->spirit->abv }}</div>

    <a href="{{ route('batch.edit', $batch->id) }}">Edit</a>
@endsection