import React from 'react'
import Navbar from '../components/home/Navbar'
import Banner from '../components/home/Banner'
import Services from '../components/home/Services'
import Testimonial from '../components/home/Testimonial'
import Packages from '../components/home/Packages'
import About from '../components/home/About'

function Home() {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Packages/>
        <Services/>
        <About/>
        <Testimonial/>
    </div>
  )
}

export default Home