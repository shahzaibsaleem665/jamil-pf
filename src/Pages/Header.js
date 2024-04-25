import React from 'react'
import black from '../assets/black.png'
import { Button } from '@mui/material'
import './Header.css'


function Header() {
  return (
    <div className='header'>
        <div className="header__left">
            <img src={black} />
        </div>
        
        <div className="header__right">
            <p className='home'>Home</p>
            <p className='projects'>Projects</p>
            <p className='research'>Reasearch work</p>
            <p className='about'>About us</p>
            <p className='contact'>Contact us</p>
        </div>
    </div>
  )
}

export default Header