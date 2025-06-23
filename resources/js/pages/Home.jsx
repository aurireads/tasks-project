import React, { useState, useEffect } from 'react'
import '../css/app.css'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'

export default function Home() {
    const [tasks, setTasks] = useState([])

    const fetchTasks = async () => {
        const response = await fetch('/api/tasks')
        const data = await response.json()
        setTasks(data)
    }

    useEffect(() => {
        fetchTasks()
    }, [])

    return (
        <div style={{ padding: '20px' }}>
            <h1>Task Manager</h1>
            <TaskForm onTaskCreated={fetchTasks} />
            <TaskList tasks={tasks} onTaskUpdated={fetchTasks} />
        </div>
    )
}
