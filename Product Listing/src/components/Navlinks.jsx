import React from 'react'
import { NavLink } from 'react-router-dom'

const Navlinks = () => {
  return (
    
    <nav className=' flex justify-center gap-7 mt-6 text-2xl'>
      <NavLink className={(e)=>{
        // return e.isActive?"text-red-300":"";

        return[e.isActive?" text-red-300":"",e.isActive?"font-bold":""].join(' ')
        
      }} to='/'>Home</NavLink>

      <NavLink style={(e)=>{
        return {color:e.isActive?"#d0d0d0":"",
          fontWeight:e.isActive?'bold':""
        }
      }} to='/about'>About</NavLink>

      <NavLink  className={(e)=>{
        // return e.isActive?"text-red-300":"";

        return[e.isActive?" text-red-300":"",e.isActive?"font-bold":""].join(' ')
        
      }} to='/user'>User</NavLink>
    </nav>
  )
}

export default Navlinks