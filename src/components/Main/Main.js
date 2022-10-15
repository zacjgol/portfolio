import React, {useState, useEffect} from 'react'
import About from './About/About.js'
import Banner from './Banner/Banner.js'
import './Main.css'
import Navbar from './Navbar/Navbar.js'
import Projects from './Projects/Projects.js'


function Main() {

  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
  }, [])

  return (
    <div>
        <div className={isLoading === true ? 'loading-cover hide' : 'loading-cover'}/>
        <Navbar/>
        <Banner/>
        <About/>
        <Projects/>
    </div>
  )
}

export default Main