import React, {useState, useEffect} from 'react'
import './About.css'
import AboutImage from './About.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

function About() {
    const [offsetY, setOffsetY] = useState(0)

    const handleScroll = () => {
        console.log(offsetY)
        setOffsetY(window.pageYOffset)}

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
        window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    useEffect(() => {
        AOS.init({duration: 1000, delay: 100})
    }, [])

     return (
        <div className='about-container'>
            <div className='about-content'>
                <h1 className='about-header' data-aos='fade-up'>What I do</h1>
                <p className='about-text' data-aos='fade-up'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum voluptate velit esse cillum</p>
            </div>
            <div className='about-image-container'>
                <img src={AboutImage} alt='picture of a laptop' className={ offsetY > 600 ? 'about-image active' : 'about-image'}/>
                {/* <img src={AboutImage} alt='picture of a laptop' className={ offsetY > 600 ? 'about-image active' : 'about-image'} style={{ width: {offsetY > 500 && offsetY < 800 ? `${offsetY*0.1}px` : '100%'}}}/> */}
            </div>
        </div>
  )
}

export default About