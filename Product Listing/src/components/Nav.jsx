import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="w-64 bg-gray-800 text-white p-6 flex-shrink-0 h-full">
      <div className="flex flex-col gap-6 h-full">
        <Link
          to="/create"
          className="text-blue-400 hover:text-white text-lg font-medium"
        >
          ➕ Add New Product
        </Link>

        <div>
          <h2 className="text-xl font-semibold mb-2 border-b border-gray-600 pb-2">
            Category Filter
          </h2>
          <ul className="space-y-2">
            <li className="hover:text-blue-400 cursor-pointer">📦 Category 1</li>
            <li className="hover:text-blue-400 cursor-pointer">🛒 Category 2</li>
            <li className="hover:text-blue-400 cursor-pointer">🎁 Category 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
