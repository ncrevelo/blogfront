import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteBlog, getAllBlog } from '../api/blog.api';

const BlogCreados = () => {
  const [blogs, setBlogs] = useState([]);
  const [expandedBlogs, setExpandedBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadBlogs();
  }, []);

  const loadBlogs = () => {
    getAllBlog()
      .then(response => {
        setBlogs(response.data);
        setExpandedBlogs(response.data.map(blog => false));
      })
      .catch(error => console.error(error));
  };

  const handleDelete = (blogId) => {
    deleteBlog(blogId)
      .then(() => loadBlogs())
      .catch(error => console.error(error));
  };

  const handleToggleExpand = (index) => {
    const updatedExpandedBlogs = [...expandedBlogs];
    updatedExpandedBlogs[index] = !updatedExpandedBlogs[index];
    setExpandedBlogs(updatedExpandedBlogs);
  };

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center">
      <h1 className="text-xl font-medium mb-8 text-black text-center">
        Aquí puedes encontrar una variedad de posts sobre diversos temas. ¡Explora y disfruta leyendo!
      </h1>
      {blogs.map((blog, index) => (
        <div key={blog.id} className="mb-8 p-8 text-center border rounded-lg bg-pink-300 bg-opacity-50 max-w-2xl w-full">
          <h2 className="text-4xl font-bold text-black relative z-10 mb-4">{blog.titulo}</h2>
          
          {expandedBlogs[index] ? (
            <p className="relative z-10 mb-4">{blog.contenido}</p>
          ) : (
            <p className="relative z-10 mb-4">{blog.contenido.slice(0, 100)}...</p>
          )}
          {blog.contenido.length > 100 && (
            <button onClick={() => handleToggleExpand(index)} className="text-pink-400 underline relative z-10 mb-4">
              {expandedBlogs[index] ? 'Leer menos' : 'Leer más'}
            </button>
          )}
          <div className="flex justify-between mt-10 relative z-10">
            <p className="text-red-400 text-2xl font-bold">{blog.autor}</p>
            <button onClick={() => handleDelete(blog.id)} className="bg-pink-600 text-white py-2 px-4 rounded-md">
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCreados;
