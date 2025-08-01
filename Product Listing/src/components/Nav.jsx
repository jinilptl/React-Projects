import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Appcontext } from '../utils/Maincontext';

const Nav = () => {

    let {Products}=useContext(Appcontext);


    
    // console.log("product is ",Products);

    //first way

    // let categoryArr=Products.map((product,index)=>(
    //   product.category
    // ))

    //second way
    let categoryArr=Products.reduce((acc,cv)=>(
      [...acc,cv.category]
    ),[])
    
  

    let uniqCategory=[...new Set(categoryArr)]


    
    


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
            
           {uniqCategory.map((category,index)=>(
            <li key={index} className="hover:text-blue-400 cursor-pointer capitalize">
              <Link to={`/category?type=${category}`} >{category}</Link>
            </li>
           ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
