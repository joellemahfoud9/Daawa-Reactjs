import React from 'react'
import Planners from '../components/Planners/OurPlanners'
import Navbar from '../components/home/Navbar'

function WiddingPlanners() {
  return (
    <div>
      <Navbar simpleLogo={true} />
      <Planners/>
    </div>
  )
}

export default WiddingPlanners