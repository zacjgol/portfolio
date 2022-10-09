import React, {useEffect, useState, useRef, useMemo} from 'react'
import './Gallery.css'
import frankAndJenies from './Project-images/frankandjenies.png'

function Gallery(props) {


  // parralax

  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  return (
    <div className='gallery-container'>
      <div className='gallery-heading-container'>
        <div className='gallery-title-container'>
          <h1 className='gallery-title'>{'<Gallery/>'}</h1>
        </div>
        <div className='gallery-subheading-container'>
          <h2 className='gallery-subheading'>Here is what my work looks like</h2>
        </div>
      </div>
      <div className='gallery-images-container' style={{transform: `translateX(${offsetY * 0.7}px)`}}>
        <img src={frankAndJenies} className='frank-and-jenies-test' alt='frank and jenies project'/>
        <img src={frankAndJenies} className='frank-and-jenies-test' alt='frank and jenies project'/>
        <img src={frankAndJenies} className='frank-and-jenies-test' alt='frank and jenies project'/>
        <img src={frankAndJenies} className='frank-and-jenies-test' alt='frank and jenies project'/>
        <img src={frankAndJenies} className='frank-and-jenies-test' alt='frank and jenies project'/>
        <img src={frankAndJenies} className='frank-and-jenies-test' alt='frank and jenies project'/>
      </div>
    </div>
  )
}

export default Gallery