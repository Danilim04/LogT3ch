import { useState } from 'react'
import React from 'react';
import Header from '../components/Header/index'
import Home from '../components/Home'
import Aboutus from '../components/Aboutus'
import Testimonial from '../components/Testimonial'
import Ourtime from '../components/Ourtime';
import Diferences from '../components/Diferences';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';


const HomePage = () => {
    return (
      <>
        {/*Aqui são chamados os componentes da Homepage*/}
        <Header />
        <Home />
        <div id='aboutus'><Aboutus /></div>
        <Diferences />
        <Ourtime/>
        <Testimonial /> 
        <NewsLetter /> 
        <Footer/>
      </>
    )
  }
export default HomePage