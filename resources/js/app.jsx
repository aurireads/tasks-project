import React from 'react';
import '../css/app.css';
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
