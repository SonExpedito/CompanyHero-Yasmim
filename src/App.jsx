import React from 'react';
import './project.css';
import Navbar from './Components/navbar';
import Cards from './Components/Cards';
import Banner from './Components/Banner'
import VoiceDiv from './Components/VoiceDiv';
import Carousel from './Components/Carousel';
import Footer from './Components/Footer'

const App = () => {


  return (
    <>
      
        <Navbar />
        <Banner/>
        <Cards/>
        <VoiceDiv/>
        <Carousel/>
        <Footer/>
    </>
  )
}

export default App;
