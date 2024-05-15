import React from 'react'
import './PopUp.css'

function PopUp({isOpen, togglePopup, content}) {
    if (!isOpen) return null;

  return (
    <div className='popup'>
          <div className="popup-inner">
            {content}
            <button onClick={togglePopup}>Close</button>
          </div>
    </div>
  )
}

export default PopUp