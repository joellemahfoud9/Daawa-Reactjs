import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import OurServices from './pages/OurServices'
import AllCategories from './pages/AllCategories'
import WiddingPlanners from './pages/WiddingPlanners'
import Cart from './pages/Cart'
import DetailsCompany from './pages/CompanyDetails';
import WeddingPlannerCard from './components/Planners/WeddingPlannerCard';

function App() {
  return (
    <div>
      <Routes>
       <Route path='/' element={ <Home/>}/>
       <Route path='/services' element={ <OurServices/>}/>
        <Route path='/category/:categoryName' element={<AllCategories/>}/>
        <Route path="/category/:categoryName/:companyId" element={<DetailsCompany />} /> 
        <Route path='/planners' element={ <WiddingPlanners/>}/>
        <Route path="/planner/:id" element={<WeddingPlannerCard />} />
        <Route path='/cart' element={ <Cart/>}/>
      </Routes>
    </div>
  )
}

export default App