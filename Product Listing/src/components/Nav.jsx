import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Appcontext } from "../utils/Maincontext";

const Nav = () => {
  let { Products } = useContext(Appcontext);

  // Get category list from products
  let categoryArr = Products.reduce((acc, cv) => [...acc, cv.category], []);
  let uniqCategory = [...new Set(categoryArr)];

  // Get current URL query param
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const activeCategory = params.get("type");

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
            {uniqCategory.map((category, index) => (
              <li key={index} className="capitalize">
                <Link
                  to={`/category?type=${category}`}
                  className={`${
                    category === activeCategory
                      ? "text-red-500 "
                      : "hover:text-blue-400"
                  }`}
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            className="text-red-400 border py-2 px-4 rounded mt-4 inline-block hover:bg-red-400 hover:text-white transition-all duration-300"
            to="/"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
