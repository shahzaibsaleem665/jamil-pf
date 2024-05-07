const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const PORT = 8000;

// Body parser middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());\
app.use((cors));
app.use(express.json({ limit: '25mb'}));
app.use(express.urlencoded({ limit: '25mb'}));
app.use ((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

function sendEmail ({fullName, email, enquiry}) {
    return new Promise((resolve, reject) => {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'formhandling01@gmail.com',
                pass: 'Form@handling10'
            },

        });

        const mail_configs = {
            from: 'formhandling01@gmail.com',
            to: email,
            name: fullName,
            message: enquiry,
        };

        transporter.sendMail(mail_configs, function(error, info) {
            if (error) {
                console.log(error);
                return reject({ message: `An error has occured` });
            }
            return resolve({ message: 'Email sent successfully!'});
        })
    })
}

app.get('/', (req, res) => {
    sendEmail()
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
})
// POST route to handle form submission
app.post('/send_email', (req, res) => {
    sendEmail(req.body)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
})

app.listen(PORT, () => {
    console.log(`nodemailer is listening at http://localhost:${PORT}`)
})


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
