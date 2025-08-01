import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const User = () => {
  return (
    <div className=' flex justify-center text-3xl mt-5 w-full h-screen border items-center '>
        
        <div className=' flex flex-col items-center gap-7 border-2 w-[40%] max-h-[500px]'>
            <Link to='/user/boy/jinil' className=' bg-red-300 py-2 px-6 rounded'>Jinil</Link>
        <Link to='/user/boy/adarsh' className=' bg-red-300 py-2 px-6 rounded'>Adarsh</Link>
        <Link to='/user/boy/krish' className=' bg-red-300 py-2 px-6 rounded'>Krish</Link>

            <Link to='/user/girl/teesha' className=' bg-red-300 py-2 px-6 rounded'>Teesha</Link>
        <Link to='/user/girl' className=' bg-red-300 py-2 px-6 rounded'>Yashika</Link>
        <Link to='/user/girl/kashish' className=' bg-red-300 py-2 px-6 rounded'>Kashish</Link>

        </div>

<Outlet/>
       
    </div>
  )
}

export default User