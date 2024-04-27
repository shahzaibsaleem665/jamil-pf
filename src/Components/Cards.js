import React from 'react'
import './Cards.css'
import { IconButton } from '@mui/material'

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
<p>{text}</p>
        </div>
    </div>
  )
}

export default Cards