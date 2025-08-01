import axios from "./axios";
import { createContext, useEffect, useState } from "react";

export const Appcontext = createContext();

const AppcontextProvider = ({ children }) => {
  const [Products, setProducts] = useState(null);

  async function getproduct() {
    try {
      let { data } = await axios.get("https://fakestoreapi.in/api/products");

      setProducts(data.products);
    } catch (error) {
      console.log("error is ", error);
    }
  }

  useEffect(() => {
    getproduct();
  }, []);

  let ContextValue = { Products, setProducts };

  return (
    <Appcontext.Provider value={ContextValue}>{children}</Appcontext.Provider>
  );
};

export default AppcontextProvider;
