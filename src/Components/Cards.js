import React from 'react'
import './Cards.css'
import { IconButton } from '@mui/material'

import LaunchIcon from '@mui/icons-material/Launch';

function Cards({ icon, title, description, text}) {
  return (
    <div className='cards'>
        <div className="cards__top">
        <IconButton>{icon}</IconButton>
        </div>  
        <div className="cards__middle">
        <h5>{title}</h5>
        <p>{description}</p>
        </div>
        <div className="cards__bottom">
<p>{text}<LaunchIcon /></p>
        </div>
    </div>
  )
}

export default Cards