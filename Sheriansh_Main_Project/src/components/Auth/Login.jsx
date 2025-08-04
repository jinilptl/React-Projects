import React, { useState } from "react";

const Login = () => {

  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit binding complete ",email ,' and ',password);
    setEmail('')
    setPassword('')
  };
  return (
    <div className=" flex h-screen w-screen items-center justify-center">
     
     <div className=" border-2 rounded-xl border-emerald-600 p-20">
       <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className=" flex flex-col items-center justify-center"
      >
        <input
        
        onChange={(e)=>{setEmail(e.target.value)}} 
        value={email}
        type="email" 
        placeholder="enter email" 
        className=" outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400"
        required />
        <input 
        onChange={(e)=>{setPassword(e.target.value)}} 
        value={password}
        type="password"
         placeholder="enter password" 
         className=" outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400 mt-3"
         required />
        <button type="submit" className=" border-none text-white bg-emerald-600 font-medium text-lg py-2 px-8 w-full rounded-full placeholder:text-white mt-7">Login</button>
      </form>
     </div>
    </div>
  );
};

export default Login;
