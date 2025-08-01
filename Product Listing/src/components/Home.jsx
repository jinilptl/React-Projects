import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex w-full h-screen">
      <Nav />
      <div className="flex-1 overflow-y-auto p-6 bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Example card - repeat manually or later with map */}
          <div className="bg-white rounded-lg shadow hover:shadow-lg transition">
            <Link to="/product" className="block">
              <div
                className="h-40 bg-cover bg-center"
                style={{ backgroundImage: `url('https://source.unsplash.com/300x200/?product')` }}
              ></div>
              <div className="p-4">
                <h2 className="text-md font-semibold text-gray-800">Product Title</h2>
                <p className="text-sm text-gray-500">₹999</p>
              </div>
            </Link>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Home;
