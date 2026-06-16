const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

exports.submitContact = async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: 'New Contact Form Submission',
      text: `
        Name: ${req.body.name}
        Email: ${req.body.email}
        Phone: ${req.body.phone}
        Service: ${req.body.service}
        Message: ${req.body.message}
      `
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Your message has been received!' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
