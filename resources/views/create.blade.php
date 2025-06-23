@extends('layout')

@section('main-content')
<div class="form-container">
    <h2>Create New Task</h2>

    <form action="{{ route('task.store') }}" method="POST" class="task-form">
        @csrf

        <label for="title">Title</label>
        <input type="text" name="title" id="title" required>

        <label for="description">Description</label>
        <textarea name="description" id="description" rows="4" required></textarea>

        <label for="status">Status</label>
        <select name="status" id="status" required>
            <option value="Todo">Todo</option>
            <option value="Done">Done</option>
        </select>

        <div class="form-actions">
            <button type="submit" class="btn btn-edit">Save Task</button>
            <a href="{{ route('task.index') }}" class="btn btn-delete">Cancel</a>
        </div>
    </form>
</div>
@endsection
