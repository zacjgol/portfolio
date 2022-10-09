import React, {useState} from 'react'
import Banner from './Banner/Banner.js'
import Projects from './Projects/Projects.js'
import './Main.css'
import Navbar from './Navbar/Navbar.js'

function Main() {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <Projects/>
    </div>
  )
}

export default Main