const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.post('/send-mail', (req, res) => {
    const { fullName, email, enquiry } = req.body;

    // Create a transporter
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'shahzaibsaleem7642@gmail.com', // Your Gmail email address
            pass: 'Syedaz@92472' // Your Gmail password
        }
    });

    // Construct email message
    let mailOptions = {
        from: '"Contact Form" <your-email@gmail.com>',
        to: 'shahzaibsaleem665@gmail.com', // Recipient's email address
        subject: 'New Enquiry',
        text: `Name: ${fullName}\nEmail: ${email}\nEnquiry: ${enquiry}`
    };
    console.log(mailOptions);
    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
