const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up your Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // or any other email service provider
  auth: {
    user: 'kdkusay53@gmail.com', // Your email
    pass: 'abc123456'   // Your email password (for Gmail, set up an App Password)
  }
});

// Handle the form POST request
app.post('/send-email', (req, res) => {
  const email = req.body.email;

  const mailOptions = {
    from: 'kdkusay53@gmail.com',
    to: 'akdigitalskusay@gmail.com', // Where you want to receive the email
    subject: 'New Subscriber',
    text: `A new subscriber with the email: ${email}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error sending email.');
    }
    res.status(200).send('Email sent successfully!');
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
