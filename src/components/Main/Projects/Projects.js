import React, {useEffect, useState, useRef, useMemo} from 'react'
import './Projects.css'
import frankAndJenies from './Project-images/frankandjenies.png'

function Projects(props) {


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
    <div className='projects-container'>
      <div className='projects-heading-container'>
        <div className='projects-title-container'>
          <h1 className='projects-title'>{'<Projects/>'}</h1>
        </div>
        <div className='projects-subheading-container'>
          <h2 className='projects-subheading'>Here are a few of my recent projects</h2>
        </div>
      </div>
      <div className='projects-images-container' style={{transform: `translateX(${offsetY * -0.7}px)`}}>
        <img src={frankAndJenies} className='frank-and-jenies' alt='frank and jenies project'/>
        <img src={frankAndJenies} className='frank-and-jenies' alt='frank and jenies project'/>
        <img src={frankAndJenies} className='frank-and-jenies' alt='frank and jenies project'/>
        <img src={frankAndJenies} className='frank-and-jenies' alt='frank and jenies project'/>
        <img src={frankAndJenies} className='frank-and-jenies' alt='frank and jenies project'/>
        <img src={frankAndJenies} className='frank-and-jenies' alt='frank and jenies project'/>
      </div>
    </div>
  )
}

export default Projects