import React from 'react'
import black from '../assets/black.png'
import white from '../assets/white.png'
import { Button } from '@mui/material'
import './Header.css'


function Header() {
  return (
    <div className='header'>
        <div className="header__left">
            <img src={white} />
        </div>
        
        <div className="header__right">
            <p className='header__home'>Home</p>
            <p className='header__projects'>Projects</p>
            <p className='header__research'>Reasearch work</p>
            <p className='header__about'>About me</p>
            <p className='header__contact'>Contact me</p>
        </div>
    </div>
  )
}

export default Header