import React from 'react'
import Navbar from './Navbar'
import Slide from './Slide'
import Service from './Service'
import About from './About'
import Product from './Product'  
import Team from './Activities'   
import Footer from './Footer' 
import Spinner from './Spinner'
import Contact from './Contact'

export default function Home() {
    return (
        <>
            
            <Spinner/>
            <Navbar/>
            <Slide/>
            <Service/>
            <About/>
            <Product/>
            <Team/>
            <Footer/>  
            <a href="#" className="btn btn-primary back-to-top"><i className="bi bi-arrow-up"></i></a>
        </>
    )
}
