import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // importa Bootstrap
import '../css/app.css'; // seu CSS vem depois para sobrescrever
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewTask from './pages/NewTask';
import EditTask from './pages/EditTask';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nova" element={<NewTask />} />
        <Route path="/editar/:id" element={<EditTask />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById('app'));
root.render(<App />);
