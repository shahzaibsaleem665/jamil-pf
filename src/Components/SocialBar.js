import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

import './SocialBar.css'


function SocialBar() {
  return (
    <div className='socialBar'>
        <LinkedInIcon />
        <InstagramIcon />
        <FacebookIcon />
    </div>
  )
}

export default SocialBar