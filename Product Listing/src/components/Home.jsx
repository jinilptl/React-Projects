import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { Appcontext } from "../utils/Maincontext";
import Loading from "./Loading";
import axios from "axios";

const Home = () => {
  let { Products } = useContext(Appcontext);

  let { search } = useLocation();

  let [filterProducts, setFilterProducts] = useState([]);

  //   console.log('url is ',search);
  let category = search.split("=")[1];

  console.log("category is ", category);

  let getFilterproduct = async () => {
    try {
      let { data } = await axios.get(
        `https://fakestoreapi.in/api/products/category?type=${category}`
      );

      console.log("category response is ", data.products);
      setFilterProducts(data.products);
    } catch (error) {
      console.log("error is ", error);
    }
  };

  useEffect(() => {
    if (!Products) return; // wait for products to load

    if (category) {
      getFilterproduct();
    } else {
      setFilterProducts(Products);
    }
  }, [category, Products]);

  return (
    <div className="flex w-full h-screen">
      <Nav />
      <div className="flex-1 overflow-y-auto p-6 bg-gray-100">
        {Products ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.isArray(filterProducts) &&
              filterProducts.map((product) => (
                <div
                  className="bg-white rounded-lg shadow hover:shadow-lg transition"
                  key={product.id}
                >
                  {" "}
                  {console.log("product is ", product)}
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
