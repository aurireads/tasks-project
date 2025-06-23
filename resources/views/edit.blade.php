@extends('layout')

@section('main-content')
<div class="form-container">
    <h2>Edit Task</h2>

    <form action="{{ route('task.update', $task->id) }}" method="POST" class="task-form">
        @csrf
        @method('PUT')

        <label for="title">Title</label>
        <input type="text" name="title" id="title" value="{{ $task->title }}" required>

        <label for="description">Description</label>
        <textarea name="description" id="description" rows="4" required>{{ $task->description }}</textarea>

        <label for="status">Status</label>
        <select name="status" id="status" required>
            <option value="Todo" {{ $task->status === 'Todo' ? 'selected' : '' }}>Todo</option>
            <option value="Done" {{ $task->status === 'Done' ? 'selected' : '' }}>Done</option>
        </select>

        <div class="form-actions">
            <button type="submit" class="btn btn-edit">Edit Task</button>
            <a href="{{ route('task.index') }}" class="btn btn-delete">Cancel</a>
        </div>
    </form>
</div>
@endsection
