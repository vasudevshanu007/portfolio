// server.js
const dotenv = require('dotenv')
dotenv.config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Contact form endpoint
app.post('/send-email', (req, res) => {
  const { name, phone, email, message } = req.body;
  
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New message from ${name} - Portfolio Contact`,
    text: `
      Name: ${name}
      Phone: ${phone}
      Email: ${email}
      Message: ${message}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Error sending email');
    }
    res.status(200).send('Email sent successfully');
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
