import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import OurServices from './pages/OurServices'

function App() {
  return (
    <div>
      <Routes>
       <Route path='/' element={ <Home/>}/>
        <Route path='/services' element={ <OurServices/>}/>
      </Routes>
    </div>
  )
}

export default App