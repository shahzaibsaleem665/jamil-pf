import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import InsertLinkIcon from '@mui/icons-material/InsertLink';

import './SocialBar.css'


function SocialBar() {
  return (
    <div className='socialBar'>
        <a href='https://www.linkedin.com/in/jamil-hassan-862285160/' target='blank'><LinkedInIcon /></a>
        <a href='https://scholar.google.co.kr/citations?user=iLJWFT8AAAAJ&hl=en' target='blank'><GoogleIcon /></a>
        <a href='https://ieeexplore.ieee.org/author/37088919770' target='blank'><InsertLinkIcon /></a>
    </div>
  )
}

export default SocialBar