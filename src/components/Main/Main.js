import React, {useState} from 'react'
import About from './About/About.js'
import Banner from './Banner/Banner.js'
import './Main.css'
import Navbar from './Navbar/Navbar.js'


function Main() {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <About/>
    </div>
  )
}

export default Main