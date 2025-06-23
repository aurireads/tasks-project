@extends('layout')

@section('main-content')
<div class="tasks-header">
    <h2>My Tasks</h2>
    <a href="{{ route('task.create') }}" class="btn-create">
        Create Task
    </a>
</div>

@foreach ($tasks as $task)
    <div class="task-card">
        <div class="task-header">
            <strong>
                @if ($task->status === 'Todo')
                    {{ $task->title }}
                @else
                    <del>{{ $task->title }}</del>
                @endif
            </strong>
            <span class="badge time-badge">{{ $task->created_at->diffForHumans() }}</span>
        </div>

        <div class="task-body">
            <div class="task-info">
                <p>
                    @if ($task->status === 'Todo')
                        {{ $task->description }}
                    @else
                        <del>{{ $task->description }}</del>
                    @endif
                </p>
                <span class="badge status-badge {{ $task->status === 'Todo' ? 'todo' : 'done' }}">
                    {{ $task->status }}
                </span>
                <small>Last Updated - {{ $task->updated_at->diffForHumans() }}</small>
            </div>

            <div class="task-actions">
                <a href="{{ route('task.edit', $task->id) }}" class="btn btn-edit">Edit</a>
                <form action="{{ route('task.destroy', $task->id) }}" method="POST" class="inline-form">
                    @csrf
                    @method('DELETE')
                    <button type="submit" class="btn btn-delete">Delete</button>
                </form>
            </div>
        </div>
    </div>
@endforeach

@if (count($tasks) === 0)
    <div class="no-task">No tasks found. <a href="{{ route('task.create') }}">Create Task</a></div>
@endif
@endsection
