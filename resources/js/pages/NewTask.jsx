import React from 'react';
import '../css/app.css';
import { useNavigate } from 'react-router-dom';
import TaskForm from '../components/TaskForm';

const NewTask = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Nova Tarefa</h1>
      <TaskForm onSuccess={() => navigate('/')} />
    </div>
  );
};

export default NewTask;
