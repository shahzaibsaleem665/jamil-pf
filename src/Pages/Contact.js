import React from 'react'
import './Contact.css'
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

function Contact() {

    const maxWords = 100;

    
  return (
    <div className='contact'>
        <div className="contact__content">
            <div className="contact__form">
            <div className="contact__formLeft">
            <h1>Get in touch!</h1>
            <h4>Contact me via following channels or filll out the form</h4>
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
                <form>
                    <input type='text' placeholder='Full Name' />
                    <input type='email' placeholder='example@example.com' />
                    <textarea type='number' placeholder='Enter your enquiry' maxLength={maxWords} />
                    <button type='submit'>Submit</button>
                </form>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Contact