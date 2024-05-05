import React, { useState } from 'react'
import './Contact.css'
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

function Contact() {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [enquiry, setEnquiry] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Client-side validation
        let formErrors = {};
        if (!fullName.trim()) {
            formErrors.fullName = 'Full Name is required';
        }
        if (!email.trim()) {
            formErrors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            formErrors.email = 'Invalid email address';
        }
        if (!enquiry.trim()) {
            formErrors.enquiry = 'Enquiry is required';
        }
    
        if (Object.keys(formErrors).length === 0) {
            try {
                const response = await fetch('/send-mail', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ fullName, email, enquiry })
                });
                if (response.ok) {
                    console.log('Email sent successfully');
                    // Optionally, reset form fields here
                    setFullName('');
                    setEmail('');
                    setEnquiry('');
                    alert('Email sent successfully');
                } else {
                    console.error('Failed to send email');
                    alert('Failed to send email. Please try again later.');
                }
            } catch (error) {
                console.error('Error sending email:', error);
                alert('Error sending email. Please try again later.');
            }
        } else {
            setErrors(formErrors);
        }
    };
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
                <form onSubmit={handleSubmit}>
                            <input type='text' placeholder='Full Name' value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                            <input type='email' placeholder='example@example.com' value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <textarea type='text' placeholder='Enter your enquiry' maxLength={maxWords} value={enquiry} onChange={(e) => setEnquiry(e.target.value)} required />
                    <button type='submit'>Submit</button>
                </form>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Contact