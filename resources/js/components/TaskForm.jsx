import React, { useState } from 'react';
import '../css/app.css';


export default function TaskForm({ onTaskCreated }) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        await fetch('/api/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, description })
        })

        setTitle('')
        setDescription('')
        onTaskCreated()
    }

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <input
                type="text"
                placeholder="Título da tarefa"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                style={{ marginRight: '10px' }}
            />
            <input
                type="text"
                placeholder="Descrição (opcional)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{ marginRight: '10px' }}
            />
            <button type="submit">Criar Tarefa</button>
        </form>
    )
}
