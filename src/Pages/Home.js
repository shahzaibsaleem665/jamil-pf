import React from 'react'
import './Home.css'
import skills from '../assets/skills.svg'
import Cards from '../Components/Cards'
import CodeIcon from '@mui/icons-material/Code';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import TerminalIcon from '@mui/icons-material/Terminal';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

function Home() {
  return (
    <div className='home'>
      
      {/* Main banner component */}
       <div className="home__container">
        <div className="home__containerText">
        <p className='title'>I am <strong style={{color: 'black'}}>Jamil Hassan.</strong></p>
        <p>"Pushing boundaries of research in power electronic for a sustainable tomorrow."</p>
        </div>
       </div>

       {/* Main home intro component */}
       <div className="home__me">
            <h1 className='heading'>WHO I AM?</h1>
            <p>"I am an accomplished researcher with a solid foundation in Electrical and Electronic research. Proficient in Matlab/Simulink, PLECS, and Altium PCB Design, my focus lies in the intricate realm of designing and controlling DC/DC Multi/Port Bidirectional Converters tailored for Electric Vehicles and Renewable Energy Applications. With advanced skills in Hardware Development and Debugging, I am dedicated to driving innovation within the industry."</p>

        </div>
      {/* Cards component for skills  */}

        <div className="home__cards">
          <div className="home__cardsLeft">
            <h1>Skills</h1>
            <p>My skillset encompasses a wide range of technical tools, methodologies, and soft skills, ensuring adaptability and proficiency across various projects and challenges</p>
            <img src={skills} />
          </div>

          <div className="home__cardsRight">
            <Cards icon={<BuildCircleIcon />} title='Equipments and Tools' description='Proficiency in using a wide range of equipments and tools, including oscilloscopes, power analyzers, LCR meters.' text='Learn more' />

            <Cards icon={<CodeIcon />} title='Coding Languages' description='Experienced in C++ and Java with a strong understanding of object-oriented programming principles and their applications.' text='Learn more' />

            <Cards icon={<TerminalIcon />} title='Softwares and IDEs' description='Proficient in utilizing industry-standard software and IDEs like LTspice, MATLAB, and MPLab and Latex.' text='Learn more' />

            <Cards icon={<ConnectWithoutContactIcon />} title='Soft Skills' description='Effective communication skills and expertise in Spanish, Korean and English and supervision of interns ans students.' text='Learn more' />
          </div>
        </div>
    </div>
  )
}

export default Home