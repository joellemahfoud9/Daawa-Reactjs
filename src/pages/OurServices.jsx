import React from 'react'
import Navbar from '../components/home/Navbar'
import AllServices from '../components/Services/AllServices'

function OurServices() {
  return (
    <div>
      <Navbar simpleLogo={true} />
      <AllServices/>
    </div>
  )
}

export default OurServices