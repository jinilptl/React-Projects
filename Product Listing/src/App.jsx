import React from 'react'
import Home from './components/Home'
import Details from './components/Details'
import { Link, Route, Routes } from 'react-router-dom'


const App = () => {
  return (
   <div className=' h-screen w-screen'>

 
   
 
  <Routes>
    
    <Route path='/' element={<Home/>}/>
    <Route path='/details/:id' element={<Details/>}/>
    <Route path='/category' element={<Home/>}/>
    
  </Routes>
   
   </div>
  )
}

export default App