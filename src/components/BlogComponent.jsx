import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createBlog, updateBlog } from '../api/blog.api';

const BlogComponent = ({ setShowForm }) => {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [contenido, setContenido] = useState('');
  const [blogId, setBlogId] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blogData = { titulo, autor, contenido };

    if (blogId) {
      updateBlog(blogId, blogData)
        .then(() => {
          resetForm();
        })
        .catch(error => console.error(error));
    } else {
      createBlog(blogData)
        .then(() => {
          resetForm();
        })
        .catch(error => console.error(error));
    }
  };

  const resetForm = () => {
    setTitulo('');
    setAutor('');
    setContenido('');
    setBlogId(null);
    setShowForm(false);
    navigate('/'); 
  };

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center">
      <h1 className="text-3xl text-center font-bold mb-8 text-pink-600">{blogId ? 'Editar Blog' : 'Crear Nuevo Blog'}</h1>
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700 text-center">Título:</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="w-full px-4 py-2 rounded-md border bg-pink-300 opacity-35 border-pink-800 focus:outline-none focus:border-pink-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700 text-center">Autor:</label>
          <input
            type="text"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
            className="w-full px-4 py-2 rounded-md border bg-pink-300 border-pink-800 opacity-35 focus:outline-none focus:border-pink-500"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700 text-center">Contenido:</label>
          <textarea
            value={contenido}
            onChange={(e) => setContenido(e.target.value)}
            className="w-full px-4 py-2 rounded-md border bg-pink-300 opacity-35 border-pink-800 focus:outline-none focus:border-pink-500"
            rows="5"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="mt-6 bg-pink-600 text-white py-2 px-6 rounded-md hover:bg-pink-700 transition duration-300">
            Publicar
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogComponent;


