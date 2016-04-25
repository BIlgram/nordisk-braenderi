@if(Session::has('alert-success'))
    <div class="alert success">
        {{ Session::get('alert-success') }}
    </div>
@endif

@if (count($errors) > 0)
    <ul class="errors">
        @foreach($errors->all() as $error)
            <li>{{ $error }}</li>
        @endforeach
    </ul>
@endif

<form action="{{ route('batch.store') }}" method="POST">
    {{ csrf_field() }}

    <label for="spirit_id">Spiritustype</label>
    <select id="spirit_id" name="spirit_id">
        @foreach($spirits as $spirit)
            <option value="{{ $spirit->id }}">{{ $spirit->name }}</option>
        @endforeach
    </select>

    <label for="created_at">Oprettelsesdato</label>
    <input id="created_at" name="created_at" value="{{ \Carbon\Carbon::now()->toDateString() }}" type="date">

    <label for="name">Batchnavn</label>
    <input id="name" name="name" type="text">

    <button type="submit">Opret</button>
</form>