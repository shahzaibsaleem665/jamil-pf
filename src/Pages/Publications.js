import React from 'react'
import './Publications.css'
import Work from '../Components/Work'

function Projects() {
  return (
    <div className='publications'>
        <div className="publications__top">
          <h1>My Work</h1>
        </div>
        <div className="publications__content">
          <Work />
        </div>
    </div>
  )
}

export default Projects