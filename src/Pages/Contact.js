import React, { useState } from 'react'
import './Contact.css'
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
function Contact() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [enquiry, setEnquiry] = useState('');
    const maxWords = 100;
    

  return (
    <div className='contact'>
        <div className="contact__content">
            <div className="contact__form">
            <div className="contact__formLeft">
            <h1>Get in touch!</h1>
            <h4>Contact me via following channels or fill out the form</h4>
            <div className="contact__methods">
            <div className="contact__mail">
            <MailIcon />
            <p>Jamilbabu70@gmail.com</p>
            </div>
           <div className="contact__phone">
            <LocalPhoneIcon />
            <p>0000 000 000</p>
           </div>

            </div>
          
            </div>
            <div className="contact__formRight">
                <form action='https://formspree.io/f/myypvnng' method='POST'>
                            <input type='text' name='Full Name' placeholder='Full Name' value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                            <input type='email' name='Email Address' placeholder='example@example.com' value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <textarea type='text' name='Message' placeholder='Enter your enquiry' maxLength={maxWords} value={enquiry} onChange={(e) => setEnquiry(e.target.value)} required />
                    <button type='submit'>Submit</button>
                </form>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Contact