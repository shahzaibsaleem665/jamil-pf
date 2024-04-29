import React, { useEffect, useState } from 'react'
import white from '../assets/white.png'

import './Header.css'
import { useHistory } from 'react-router-dom';



function Header() {
  const [selectedButton, setSelectedButton] = useState('');
  const history = useHistory();


  const listItems = ['Home', 'Projects', 'Research Work', 'About me', 'Contact me'];



  useEffect(() => {
    // Retrieve the selected button from localStorage on component mount
    const selected = localStorage.getItem('selectedButton');
    if (selected) {
      setSelectedButton(selected);
    }
  }, []);


  // Funtion for all the cool stuff happening in url


  const handleButtonClick = (item) => {
    // Remove white spaces from the item and convert to lowercase
    const formattedItem = item.toLowerCase().replace(/\s+/g, '-');
    setSelectedButton(item);
    // Update the URL with the formatted item
    history.push(`/${formattedItem}`);
    // Store the selected button in localStorage
    localStorage.setItem('selectedButton', item);
  };
 
 


  return (
    <div className='header'>
        <div className="header__left">
            <img src={white} alt='logo'/>
        </div>
        
        <div className="header__right">

        {listItems.map((item, index) => (
          <p 
            key={item} 
            className={selectedButton === item ? 'active' : ''} // Apply 'active' class if button is selected
            onClick={() => handleButtonClick(item)}
          >
            {item}
          </p>
        ))}
     
        </div>
    </div>
  )
}

export default Header