import React from 'react'
import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'
import { NavLink, Route, Routes } from 'react-router-dom'
import Userdetailes from '../components/userdetailes/Userdetailes'
import Newuserdetailes from '../components/userdetailes/Newuserdetailes'


const Routing = () => {
  return (
    <Routes>

<Route path='/' element={<Home/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/user' element={<User/>}>

<Route path='/user/:gender/:name' element={<Userdetailes/>}/>
<Route path='/user/:gender' element={<Newuserdetailes/>}/>

 </Route>


</Routes>
  )
}

export default Routing