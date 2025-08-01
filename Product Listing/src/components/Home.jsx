import React, { useContext } from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import { Appcontext } from '../utils/AppContext';
import Loading from './Loading';

const Home = () => {
  let { Products } = useContext(Appcontext);

  return (
    <div className="flex w-full h-screen">
      <Nav />
      <div className="flex-1 overflow-y-auto p-6 bg-gray-100">
        {Products ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Products.map((product) => (
              <div
                className="bg-white rounded-lg shadow hover:shadow-lg transition"
                key={product.id}
              >
                <Link to={`/details/${product.id}`} className="block">
                  <div
                    className="h-40 bg-contain bg-no-repeat bg-center lg:h-32"
                    style={{ backgroundImage: `url('${product.image}')` }}
                  ></div>
                  <div className="p-4">
                    <h2 className="text-md font-semibold text-gray-800">
                      {product.model}
                    </h2>
                    <p className="text-sm text-gray-500">₹ {product.price}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Home;
