import React from 'react'

export default function TaskItem({ task, onTaskUpdated }) {
    const handleComplete = async () => {
        await fetch(`/api/tasks/${task.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: 'concluida' })
        })
        onTaskUpdated()
    }

    const handleDelete = async () => {
        await fetch(`/api/tasks/${task.id}`, {
            method: 'DELETE'
        })
        onTaskUpdated()
    }

    return (
        <div style={{ marginBottom: '10px' }}>
            <strong>{task.title}</strong> - {task.status}
            <button onClick={handleComplete} style={{ marginLeft: '10px' }}>
                Concluir
            </button>
            <button onClick={handleDelete} style={{ marginLeft: '10px' }}>
                Excluir
            </button>
        </div>
    )
}
