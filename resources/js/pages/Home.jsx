import React from 'react';
import { Link } from 'react-router-dom';
import TaskList from '../components/TaskList';

const Home = () => {
  return (
    <div>
      <h1>Tarefas</h1>
      <Link to="/nova">Criar nova tarefa</Link>
      <TaskList />
    </div>
  );
};

export default Home;
