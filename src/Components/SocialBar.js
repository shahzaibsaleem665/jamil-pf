import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import InsertLinkIcon from '@mui/icons-material/InsertLink';

import './SocialBar.css'


function SocialBar() {
  return (
    <div className='socialBar'>
        <LinkedInIcon />
        <GoogleIcon />
        <InsertLinkIcon />
    </div>
  )
}

export default SocialBar