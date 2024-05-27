import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import fondo from '../src/assets/imagen/img.png';
import BlogComponent from './components/BlogComponent';
import BlogCreados from './components/BlogCreados';
import Header from './components/header';

function App() {
  
  const [showForm, setShowForm] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-cover bg-center " style={{ backgroundImage: `url(${fondo})` }}>
        <Header setShowForm={setShowForm} />
        <Routes>
          <Route path="/" element={<BlogCreados />} />
          <Route path="/blog" element={<BlogComponent setShowForm={setShowForm} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
