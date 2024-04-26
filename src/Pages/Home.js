import React from 'react'
import './Home.css'
import Cards from '../Components/Cards'

function Home() {
  return (
    <div className='home'>
       <div className="home__container">
        <div className="home__containerText">
        <p className='title'>I am <strong style={{color: 'black'}}>Jamil Hassan.</strong></p>
        <p>"Pushing boundaries of research in power electronic for a sustainable tomorrow."</p>
        </div>
       </div>
       <div className="home__me">
            <h1 className='heading'>WHO I AM?</h1>
            <p>"I am an accomplished researcher with a solid foundation in Electrical and Electronic research. Proficient in Matlab/Simulink, PLECS, and Altium PCB Design, my focus lies in the intricate realm of designing and controlling DC/DC Multi/Port Bidirectional Converters tailored for Electric Vehicles and Renewable Energy Applications. With advanced skills in Hardware Development and Debugging, I am dedicated to driving innovation within the industry."</p>

        </div>
        <div className="home__cards">
          <Cards />
        </div>
    </div>
  )
}

export default Home