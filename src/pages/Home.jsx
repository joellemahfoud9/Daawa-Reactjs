import React from 'react'
import Navbar from '../components/home/Navbar'
import Banner from '../components/home/Banner'
import Packages from '../components/home/Packages'
import Services from '../components/home/Services'
import About from '../components/home/About'
import Testimonial from '../components/home/Testimonial'

function Home() {
  return (
    <div>
        <Navbar simpleLogo={true} />
        <Banner/>
        <Packages/>
        <Services/>
        <About/>
        <Testimonial/>
    </div>
  )
}

export default Home