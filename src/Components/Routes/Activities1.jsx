import React from 'react'
import Navbar from '../Pages/Navbar'
import Header from '../Pages/Header'
import Activities from '../Pages/Activities'
import Footer from '../Pages/Footer'
import Spinner from '../Pages/Spinner'

export default function Team1() {
  return (
    <>
    <Spinner/>
    <Navbar/>
    <Header name="Our Activities"/>   
    <Activities/>
    <Footer/>
    </>
  )
}
