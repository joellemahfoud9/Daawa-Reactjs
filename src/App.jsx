import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import OurServices from './pages/OurServices'
import AllCategories from './pages/AllCategories'
import WiddingPlanners from './pages/WiddingPlanners'
import Cart from './pages/Cart'

function App() {
  return (
    <div>
      <Routes>
       <Route path='/' element={ <Home/>}/>
       <Route path='/services' element={ <OurServices/>}/>
        <Route path='/all' element={<AllCategories/>}/>
        <Route path='/planners' element={ <WiddingPlanners/>}/>
        <Route path='/cart' element={ <Cart/>}/>
      </Routes>
    </div>
  )
}

export default App