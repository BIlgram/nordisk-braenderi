<table>
    <tr>
        <th>Navn</th>
        <th>Spiritus Navn</th>
        <th>Oprettelsesdato</th>
    </tr>

    @foreach($batches as $batch)
        <tr>
            <td>
                <a href="{{ route('batch.show', $batch->id) }}">{{ $batch->name }}</a>
            </td>
            <td>{{ $batch->spirit->name }}</td>
            <td>{{ $batch->created_at->toDateString() }}</td>
        </tr>
    @endforeach
</table>