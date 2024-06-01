import React, { useEffect, useState } from 'react';
import white from '../assets/white.png';
import './Header.css';
import { useHistory, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
  const [selectedButton, setSelectedButton] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const listItems = ['Home', 'Publications', 'Research Work', 'About me', 'Contact me'];

  useEffect(() => {
    const selected = location.pathname.split('/')[1];
    setSelectedButton(selected);
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const homeNav = (e) => {
    e.preventDefault();
    history.push('/');
    closeMenu();
  };

  const handleButtonClick = (item) => {
    const formattedItem = item.toLowerCase().replace(/\s+/g, '-');
    setSelectedButton(formattedItem);
    history.push(`/${formattedItem}`);
    closeMenu();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="header">
    <div className="header__left">
      <img src={white} alt="logo" onClick={homeNav} />
      
    </div>
    <div className="header__right">
      {windowWidth  <=992 ? (
        <div className="mobile__menu">
          <div className="menu__icon" onClick={toggleMenu}> {isMenuOpen ? <CloseIcon /> : <MenuIcon />}</div>
          {isMenuOpen && (
            <div className="mobile__menuItems">
              {listItems.map((item) => (
                <p
                  key={item}
                  className={selectedButton === item.toLowerCase().replace(/\s+/g, '-') ? 'active' : ''}
                  onClick={() => handleButtonClick(item)}
                >
                  {item}
                </p>
              ))}
            </div>
          )}
        </div>
      ) : (
        listItems.map((item) => (
          <p
            key={item}
            className={selectedButton === item.toLowerCase().replace(/\s+/g, '-') ? 'active' : ''}
            onClick={() => handleButtonClick(item)}
          >
            {item}
        
          </p>
        ))
      )}
    </div>
  </div>
  );
}

export default Header;
