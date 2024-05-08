import React from 'react'
import './About.css'
import about from '../assets/about.jpeg'
function About() {
  return (
    <div className='about'>
        <div className="about__main">
            <div className="about__mainLeft">
            <img src={about} />
            </div>
            <div className="about__mainRight">
            <h1>I am right</h1>
            </div>
        </div>
    </div>
  )
}

export default About