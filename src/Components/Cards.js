import React, { useState } from 'react'
import './Cards.css'
import { IconButton } from '@mui/material'

// import LaunchIcon from '@mui/icons-material/Launch';
// import PopUp from './PopUp';

function Cards({ icon, title, description, text, popupHeading, popupContent}) {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupToggle = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <div className='cards'>
        <div className="cards__top">
        <IconButton>{icon}</IconButton>
        </div>  
        <div className="cards__middle">
        <h5>{title}</h5>
        <p>{description}</p>
        </div>
        <div className="cards__bottom">


          {/* using component Composition for the PopUp to be inside of another component. here Popup --> Cards > Home */}

          {/* The below component is comented and can be used when needed.  */}

        {/* <p onClick={handlePopupToggle}>Learn more<LaunchIcon /></p>
        <PopUp isOpen={isPopupOpen} togglePopup={handlePopupToggle} heading={popupHeading} content={popupContent}/> */}
        </div>
    </div>
  )
}

export default Cards