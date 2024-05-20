import React from 'react';
import './PopUp.css';

function PopUp({ isOpen, togglePopup, heading, content }) {

  if (!isOpen) return null;

  return (
    <div className='popup'>
      <div className="popup__inner">
        <div className="popup__header">
          <h2>{heading}</h2>
          <span className="close__icon" onClick={togglePopup}>
            &#10006; {/* Cross icon */}
          </span>
        </div>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default PopUp;
