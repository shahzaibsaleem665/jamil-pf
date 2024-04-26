import React from 'react'
import './Cards.css'
import BuildCircleIcon from '@mui/icons-material/BuildCircle';

import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Cards() {
  return (
    <div className='cards'>
        <div className="cards__contentLeft">
            <h1>SKILLS</h1>    
            <p>
"My skillset encompasses a wide range of technical tools, methodologies, and soft skills, ensuring adaptability and proficiency across various projects and challenges."</p>
        </div>
        <div className="cards__contentRight">
        <div className="cards__top">
            <div className="card__contentSelf">
            <div className="card__imgSection">
                <BuildCircleIcon />
            </div>
            <div className="card__contentSection">
                <h3>Equipments & Characterization</h3>
                <p>My Skill set includes the folloing tools and their Characterization. </p>
            </div>
            <div className="card__logoSection">
               <LinkedInIcon />
               <LinkedInIcon />
               <LinkedInIcon />
               <LinkedInIcon />
               <LinkedInIcon />
               <LinkedInIcon />
               <LinkedInIcon />
            </div>    
            </div>

            <div className="card__contentSelf">
          
          <div className="card__imgSection">
              <img src='' alt='No image yet' />
          </div>
          <div className="card__contentSection">
              <p>lorem impsum ashdosahoahfiehfdladfahdosahdadbkjdsfksdbfi</p>
          </div>
          <div className="card__logoSection">
              <img src='' alt='no logo yet' />
              <img src='' alt='no logo yet' />
              <img src='' alt='no logo yet' />
          </div>    
          </div>

          <div className="card__contentSelf">
          
          <div className="card__imgSection">
              <img src='' alt='No image yet' />
          </div>
          <div className="card__contentSection">
              <p>lorem impsum ashdosahoahfiehfdladfahdosahdadbkjdsfksdbfi</p>
          </div>
          <div className="card__logoSection">
              <img src='' alt='no logo yet' />
              <img src='' alt='no logo yet' />
              <img src='' alt='no logo yet' />
          </div>    
          </div>
{/* the card section for tops */}
        </div>
        <div className="card__bottom">
{/* the card section for tops */}
        </div>
        </div>

        
    </div>
  )
}

export default Cards