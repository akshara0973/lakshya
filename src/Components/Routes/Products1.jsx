import React from 'react'
import Navbar from '../Pages/Navbar'
import Header from '../Pages/Header'
import Product from '../Pages/Product'
import Footer from '../Pages/Footer'
import Spinner from '../Pages/Spinner'
import Activities from '../Pages/Activities'


export default function Products1() {
  return (
    <>
    <Spinner/>
    <Navbar/>
    <Header name="Products"/>
    <Product/>
    <Activities/>
    <Footer/>
    </>
  )
}
