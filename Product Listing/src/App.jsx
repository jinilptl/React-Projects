import React from 'react'
import Home from './components/Home'
import Details from './components/Details'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
   <>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/details/:id' element={<Details/>}/>
  </Routes>
   
   </>
  )
}

export default App