import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Newuserdetailes = () => {

    let params=useParams();
    console.log(params);
     let navigate=useNavigate();
     console.log('navigate is ',navigate);
     
    
    let{gender}=params
    console.log(params);

    const handleOnclick=()=>{
        navigate('/user')
    }
    
  return (
    <div className=' flex items-center gap-6  mt-20 flex-col w-full border '>
        <h1 className=' text-2xl font-bold capitalize text-teal-800'>hyee! new</h1>

        <p className=' text-xl font-bold capitalize text-teal-600'>this is {gender}</p>
        <p className=' text-xl font-bold capitalize text-teal-600'>this  is best coder</p>

        <button onClick={handleOnclick} className=' text-xl bg-red-300 px-4 py-3 rounded capitalize'>Go back </button>
    </div>
  )
}

export default Newuserdetailes