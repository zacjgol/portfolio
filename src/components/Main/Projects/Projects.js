import React, {useEffect} from 'react'
import Image from './Project images/image.png'
import './Projects.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Projects() {
    useEffect(() => {
        AOS.init({duration: 1000, delay: 0})
    }, [])

    
    return (
        <div className='projects-container'>
            <div className='projects-heading-container'>
                <h1 className='projects-heading' data-aos='fade-up'>Projects</h1>
                <h2 className='projects-subheading' data-aos='fade-up'>Here is a collection of some of my recent projects</h2>
            </div>
            <div className='projects-items'>
                <div className='projects-item one' data-aos='fade-up'>
                    <div className='projects-item-header'>
                        <h1>Frank and Jenies</h1>
                        <h2>This is my first ever project</h2>
                    </div>
                    <div className='projects-image-container'>
                        <img src={Image} alt='test' className='project-image'/>
                    </div>
                </div>
                <div className='projects-item two' data-aos='fade-up'>
                    <div className='projects-item-header'>
                        <h1>Frank and Jenies</h1>
                        <h2>This is my first ever project</h2>
                    </div>
                    <div className='projects-image-container'>
                        <img src={Image} alt='test' className='project-image'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects