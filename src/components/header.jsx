import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ setShowForm }) => {
  return (
    <header className="flex items-center justify-between mt-5 p-5">
      <Link to= '/'>
        <h1 className="text-5xl font-bold text-pink-600">Bienvenido a My Blog</h1>
      </Link>
      <Link to="/blog">
        <button onClick={() => setShowForm(true)} className="bg-pink-600 text-white py-4 px-5 text-xl rounded-full">
          Nuevo Blog
        </button>
      </Link>
    </header>
  );
};

export default Header;
