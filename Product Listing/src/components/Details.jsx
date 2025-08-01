import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

const Details = () => {
  let { id } = useParams();
  const[product,setProduct]=useState(null)

  let [showMore,setShowmore]=useState(false)
  let max_textLength=100

  let handleReadMore=()=>{
    setShowmore(()=>!showMore)
  }
  
  

  const getProductDetails = async () => {
    try {
      let {data} = await axios.get(
        `https://fakestoreapi.in/api/products/${id}`
      );
      console.log("response inside details is ",data.product);
      setProduct(data.product)
    //   console.log(data.product.description.slice(0,10));
      
    } catch (error) {
      console.log("error is ", error);
    }
  };

  useEffect(() => {
    getProductDetails();
  },[]);
  

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      {product?(<div className="max-w-4xl w-full bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Image */}
        <div className="md:w-1/2 h-[50%]">
          <img
            src={`${product.image}`}
            alt="Product"
            
            className="w-full h-[full] object-cover"
          />
        </div>

        {/* Info */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {product.title}
            </h2>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-red-300">
              {product.category}
            </h3>
            <p className="text-xl text-green-600 font-semibold mb-4">₹{product.price}</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              {showMore?(product.description):`${product.description.slice(0,max_textLength)} ...`}
            </p>
             <button
        onClick={handleReadMore}
        className="text-blue-600 hover:underline mt-1 text-sm"
      >
        {showMore?"Read Less":'Read More'}
    
      </button>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow">
              ✏️ Edit
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg shadow">
              🗑️ Delete
            </button>
          </div>
        </div>
      </div>):(<Loading/>)}
    </div>
  );
};

export default Details;
