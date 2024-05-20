import React from 'react'
import './Research.css'
import research_work_1 from '../assets/research_work/research_work_1.jpeg'
import research_work_2 from '../assets/research_work/research_work_2.jpeg'
import research_work_3 from '../assets/research_work/research_work_3.jpeg'
import research_work_4 from '../assets/research_work/research_work_4.jpeg'
import research_work_5 from '../assets/research_work/research_work_5.jpeg'
import research_work_6 from '../assets/research_work/research_work_6.jpeg'
import research_work_7 from '../assets/research_work/research_work_7.jpeg'
import research_work_9 from '../assets/research_work/research_work_9.jpeg'

function Research() {
  return (
    <div className='research'>
        <div className="research__top">
            <h1>Research Work Material</h1>
        </div>
        <div className="research__container">
          <div className="research__containerHeading">
          <h1>"Research is creating new knowledge."</h1>
          <p>(Neil Armstrong)</p>
          </div>
          <div className="research__containerText">
          <p>Currently, I'm passionately engaged in unraveling the mysteries of <strong><i>"Power Electronic Converter for Electric Vehicles"</i></strong>, aiming to catalyze impactful advancements and foster interdisciplinary collaboration. Driven by a relentless pursuit of knowledge and fueled by curiosity, I actively seek opportunities to engage with fellow researchers and industry partners to push the boundaries of innovation. With a commitment to excellence and a vision for shaping the future of <strong>Power Electronics</strong>, I'm excited about the potential of my research to make a lasting impact and drive positive change. Let's connect and embark on a journey of discovery together!</p>
          </div>
       
          <div className="research__containerPicture">
            <img src={research_work_1} />
            <img src={research_work_2} />
            <img src={research_work_3} />
            <img src={research_work_4} />
            <img src={research_work_5} />
            <img src={research_work_6} />
            <img src={research_work_7} />
            <img src={research_work_9} />
          </div>
        </div>
    </div>
  )
}

export default Research