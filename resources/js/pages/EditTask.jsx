import React from 'react';
import '../../css/app.css';
import { useParams, useNavigate } from 'react-router-dom';
import TaskForm from '../components/TaskForm';

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Editar Tarefa</h1>
      <TaskForm taskId={id} onSuccess={() => navigate('/')} />
    </div>
  );
};

export default EditTask;
