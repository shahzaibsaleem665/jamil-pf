import React, { useEffect, useState } from 'react';
import white from '../assets/white.png';
import './Header.css';
import { useHistory, useLocation } from 'react-router-dom';

function Header() {
  const [selectedButton, setSelectedButton] = useState('');
  const history = useHistory();
  const location = useLocation();

  const listItems = ['Home', 'Publications', 'Research Work', 'About me', 'Contact me'];

  useEffect(() => {
    // Extract the selected button from the pathname
    const selected = location.pathname.split('/')[1];
    setSelectedButton(selected);
  }, [location]);

  const handleButtonClick = (item) => {
    const formattedItem = item.toLowerCase().replace(/\s+/g, '-');
    setSelectedButton(formattedItem);
    history.push(`/${formattedItem}`);
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
              className={selectedButton === item.toLowerCase().replace(/\s+/g, '-') ? 'active' : ''} 
              onClick={() => handleButtonClick(item)}
            >
              {item}
            </p>
          ))}
        </div>
    </div>
  );
}

export default Header;
