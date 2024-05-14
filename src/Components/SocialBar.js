import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import InsertLinkIcon from '@mui/icons-material/InsertLink';

import './SocialBar.css'

// using props to dynamically handle icon's color on every page using props iconColor

function SocialBar({ iconColor}) {
  return (
    <div className='socialBar'>
        <a href='https://www.linkedin.com/in/jamil-hassan-862285160/' target='blank'><LinkedInIcon  style={{ color: iconColor }}  /></a>
        <a href='https://scholar.google.co.kr/citations?user=iLJWFT8AAAAJ&hl=en' target='blank'><GoogleIcon style={{ color: iconColor }} />  </a>
        <a href='https://ieeexplore.ieee.org/author/37088919770' target='blank'><InsertLinkIcon  style={{ color: iconColor }}  /></a>
    </div>
  )
}

export default SocialBar