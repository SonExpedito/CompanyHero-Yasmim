import React from 'react';
import './project.css';
import Navbar from './Components/navbar';
import Cards from './Components/Cards';
import Banner from './Components/Banner'
import VoiceDiv from './Components/VoiceDiv';
import Carousel from './Components/Carousel';
import TextBox from './Components/TextBox';
import FinalText from './Components/FinalText';
import Footer from './Components/Footer'

const App = () => {


  return (
    <>
      
        <Navbar />
        <Banner/>
        <VoiceDiv/>
        <Cards/>
        <TextBox/>
        <Carousel/>
        <FinalText/>
        <Footer/>
    </>
  )
}

export default App;
