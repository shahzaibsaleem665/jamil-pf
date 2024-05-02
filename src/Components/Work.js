import React from 'react'
import './Work.css'
import LaunchIcon from '@mui/icons-material/Launch';

function Work({title, description, year, link}) {
  return (
    <div className='work'>
        <div className="work__content">
            <h2>{title}</h2>
        </div>
        <div className="work__details">
            <h5>{description}</h5>
            <p>{year}</p>
        </div>
        <div className="work__links">
            <p>{link}{<LaunchIcon />}</p>
        </div>
    </div>
  )
}

export default Work