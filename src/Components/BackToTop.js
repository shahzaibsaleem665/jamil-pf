import React, { useEffect, useState } from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './BackToTop.css'

function BackToTop() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      // Show the button when the page is scrolled down
      const handleScroll = () => {
        if (window.pageYOffset > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  return (
    <div className='backToTop'>
         {isVisible && (
        <button
          onClick={scrollToTop}
          
        >
          <KeyboardArrowUpIcon />
        </button>
      )}
    </div>
  )
}

export default BackToTop