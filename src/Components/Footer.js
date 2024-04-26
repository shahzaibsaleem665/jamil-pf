import React from 'react'
import './Footer.css'
function Footer() {
    const currentYear = new Date().getFullYear();

  return (
    <div className='footer'>
<hr />
        <div className="footer__content">
            <p>&copy; Jamil Hassan {currentYear} </p>
        </div>
    </div>
  )
}

export default Footer