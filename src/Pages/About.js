import React, { useState } from 'react'
import './About.css'
import about from '../assets/about.jpeg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PopUp from '../Components/PopUp';
function About() {

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='about'>
      <div className="about__content">
        <div className="about__main">
          <div className="about__mainLeft">
            <img src={about} />
            </div>
            <div className="about__mainRight">
            <h1>My Profile</h1>
            <p>Meet Jamil Hassan, a seasoned Researcher specializing in Power Electronics within the realm of research and development (R&D). Holding a master’s degree by research from Dongguk University in South Korea, with a focus on power electronics for electric vehicles and renewable energy applications, Jamil has established himself as a notable figure in the field. With a track record of academic excellence, including publications in prestigious journals like IEEE Transactions, Jamil's expertise extends to serving as a Visiting Research Fellow at Pohang Accelerator Laboratory (PAL) and undertaking roles at esteemed institutions and companies worldwide. Currently pursuing doctoral studies at the University of Technology Sydney (UTS), Jamil continues to contribute to the field while serving as a researcher at the Centre for Electrical Machines and Power Electronics at UTS Tech Lab. With a keen interest in power electronic converter topologies, renewable energy integration, and EV applications, Jamil remains at the forefront of cutting-edge research in the field of Power Electronics.
            </p>
            <button className='about__button' onClick={togglePopup}>Learn More <ArrowForwardIcon /></button>
            <PopUp  isOpen={isOpen} togglePopup={togglePopup} heading='More about me' content= {<> I hold a master’s by research degree from Dongguk University in South Korea, specializing in power electronics for electric vehicles and renewable energy applications. During my academic journey at Dongguk, I published several papers in prominent journals, including IEEE Transactions, showcasing my research contributions and recognition within the field. From July to September 2020, ?I served as a Visiting Research Fellow at Pohang Accelerator Laboratory (PAL), focusing on LCC and LLC resonant converters for the design of capacitor charging power supplies.<br></br><br></br>

In 2021-2022, I worked as a Researcher at Phoenixon Control, a company focused on electric vehicle charging solutions in South Korea.

In 2022-2023, I received several offers to work as follows; researcher at Electromobility Research Centre Brussels Belgium on a project Development of modular and integrated WBG-based inverter and onboard charger for EVs, Ph.D. researcher at Bauman Lab McMaster University Canada to work on a project of designing a novel bidirectional DC-DC converter topology, Ph.D. researcher at University of Sheffield UK to work on a project Condition-monitoring bidirectional battery charging system for electric vehicles, Ph.D. researcher in Energy and Switching-Electronic Systems (LESES) Laboratory at the  University of Illinois Chicago USA, Ph.D. researcher at Dr. Su's Group University of Michigan-Dearborn, and Researcher at SEnergy products and services in Spain to work on a European Project <strong>“Smart and Green Energy Systems and Business Models” </strong> focusing on Cooperative Smart Inverters for Solar PV plants.<br></br><br></br>

In June 2022, I joined SENERGY Products and Services in Spain, where I worked on a European Union-based project called <strong>'Cooperative Smart Inverters'</strong> in collaboration with the Warsaw University of Technology (WUT) in Poland as part of a prestigious Marie Curie Fellowship. <br></br><br></br>
In November 2023, I joined the University of Technology Sydney (UTS), where I am currently pursuing my doctoral studies. Additionally, I serves as a researcher at the Centre for Electrical Machines and Power Electronics at UTS Tech Lab.<br></br> <br></br>
I have 8 publications, including 4 journal papers in top-tier IEEE transaction journals and 4 conference papers.</>}

/> 
                        
            </div>
        </div>
      </div>
    </div>
  )
}

export default About