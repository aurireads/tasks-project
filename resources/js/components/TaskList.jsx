import React from 'react'
import '../../css/app.css';
import TaskItem from './TaskItem'

export default function TaskList({ tasks, onTaskUpdated }) {
    return (
        <div>
            {tasks.length === 0 ? (
                <p>Não há tarefas.</p>
            ) : (
                tasks.map((task) => (
                    <TaskItem key={task.id} task={task} onTaskUpdated={onTaskUpdated} />
                ))
            )}
        </div>
    )
}
