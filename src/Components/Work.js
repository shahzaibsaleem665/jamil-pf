import React from 'react'
import './Work.css'

function Work() {
  return (
    <div className='work'>
        <div className="work__content">
            <h3>Title</h3>
        </div>
        <div className="work__details">
            <h4>description</h4>
            <p>Year</p>
        </div>
        <div className="work__links">
            <p>Link to work</p>
        </div>
    </div>
  )
}

export default Work