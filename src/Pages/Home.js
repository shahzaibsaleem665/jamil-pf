import React, { useEffect, useState } from 'react'
import './Home.css'
import skills from '../assets/skills.svg'
import Cards from '../Components/Cards'
import CodeIcon from '@mui/icons-material/Code';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import TerminalIcon from '@mui/icons-material/Terminal';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import Gallery from '../Components/Gallery';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { IconButton } from '@mui/material';


function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the button when the page is scrolled down
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
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


      {/* Gallery Component for pictures */}
      <div className="home__gallery">
      <Gallery />
      {isVisible && (
        <button
          onClick={scrollToTop}
          
        >
          <KeyboardArrowUpIcon />
        </button>
      )}
      </div>
      
    </div>  
  )
}

export default Home