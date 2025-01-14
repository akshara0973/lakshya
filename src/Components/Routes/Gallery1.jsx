import React from 'react'
import Header from '../Pages/Header'
import About from '../Pages/About'
import Navbar from '../Pages/Navbar'
import Footer from '../Pages/Footer'

import Spinner from '../Pages/Spinner'
import Gallery from '../Pages/Gallery'

export default function About1() {
  return (
    <>
    <Spinner/>
    <Navbar/>
    <Header name="Gallery"/>
    {/* <About/> */}
    {/* <Service/> */}
    {/* <Activities/> */}
    <Gallery/>
    <Footer/>
    </>
  )
}
