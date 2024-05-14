import React from 'react'
import './About.css'
import about from '../assets/about.jpeg'
function About() {
  return (
    <div className='about'>
      <div className="about__content">
        <div className="about__main">
          <div className="about__mainLeft">
            <img src={about} />
            </div>
            <div className="about__mainRight">
            <h1>My Profile</h1>
            <p>Jamil Hassan is an experienced Researcher working in research and development (R&D) in the field of Power Electronics. In 2015, he was awarded a fully funded NTS scholarship for his bachelor’s studies. He holds a bachelor’s degree in electrical (Power) Engineering from the Comsats University Islamabad, Abbottabad Campus (2015-2019), Pakistan. In 2018, he worked as an Electrical Internee at Islamabad Electric Supply Company (IESCO), Islamabad, Pakistan. In 2019, he was selected for MS at Zhejiang University Hangzhou China, Shandong University Jinan China, and Dongguk University South Korea. In 2019, he joined CPC (Control and Power Conversion) Lab at Dongguk University, South Korea and completed his Master by research degree. From July 2020 to September 2020, he served as a Visiting Research Fellow at Pohang Accelerator Laboratory (PAL), focusing on LCC and LLC resonant converters for the design of capacitor charging power supplies.  </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About