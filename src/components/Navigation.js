import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-semibold">
          Motivation Cards
        </Link>
        <div className="space-x-10">
          <Link
            to="/"
            className="text-white hover:underline transition duration-300"
          >
            View Cards
          </Link>
          <Link
            to="/search"
            className="text-white hover:underline transition duration-300"
          >
            Search Cards
          </Link>
          <Link
            to="/create"
            className="text-white hover:underline transition duration-300"
          >
            Create Card
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
