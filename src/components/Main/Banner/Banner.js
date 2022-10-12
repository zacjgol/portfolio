import React, { useEffect, useState } from 'react'
import './Banner.css'
import leftBack from './banner-images/left-mountain-back.png'
import rightBack from './banner-images/right-mountain-back.png'
import rightFront from './banner-images/right-mountain-front.png'
import leftFront from './banner-images/left-mountain-front.png'
import rightTrees from './banner-images/mountain-trees-right.png'
import leftTrees from './banner-images/mountain-trees-left.png'
import Stars from './banner-images/Stars.png'
import {Typewriter} from 'react-simple-typewriter'

function Banner() {
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  return (
    <div className='banner-container'>
      <div className='banner-logo'  style={{transform: `translateY(${offsetY * 1}px)`, display: `${offsetY > 1200 ? 'none' : 'flex'}`}}>
        <h3>Hi, my name is</h3>
        <h1>Zac Fletcher</h1>
        <div className='typewriter-container'>
          <h2 className='typewriter-heading'>I'm a</h2>
          <span style={{color: '#DE483F', fontSize: '3.2rem'}} className='typewriter'>
            <Typewriter
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              words={['Developer With Taste', 'skilled UI/UX Designer', 'Developer']}
            />
          </span>
        </div>
      </div>
      <div className='banner-images'>
        <img src={Stars} alt='cartoon mountain on the back left side of the screen' className='Stars' style={{transform: `translateX(${offsetY * 0.6}px)`}} />
        <img src={leftBack} alt='cartoon mountain on the back left side of the screen' className='left-mountain-back' style={{transform: `translateY(${offsetY * 0.6}px)`}} />
        <img src={rightBack} alt='cartoon mountain on the back left side of the screen' className='right-mountain-back' style={{transform: `translateY(${offsetY * 0.6}px)`}}/>
        <img src={leftFront} alt='cartoon mountain on the back left side of the screen' className='left-mountain-front' style={{transform: `translateY(${offsetY * 0.4}px)`}}/>
        <img src={rightFront} alt='cartoon mountain on the back left side of the screen' className='right-mountain-front' style={{transform: `translateY(${offsetY * 0.4}px)`}}/>
        <img src={leftTrees} alt='cartoon mountain on the back left side of the screen' className='mountain-trees-left'/>
        <img src={rightTrees} alt='cartoon mountain on the back left side of the screen' className='mountain-trees-right'/>
      </div>
    </div>
  )
}

export default Banner