import React from 'react'
import Navbar from '../components/home/Navbar'
import Banner from '../components/home/Banner'
import Services from '../components/home/Services'
import Testimonial from '../components/home/Testimonial'

function Home() {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Services/>
        <Testimonial/>
    </div>
  )
}

export default Home