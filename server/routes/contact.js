const router = require('express').Router();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // your Gmail or SMTP email
    pass: process.env.EMAIL_PASS  // app-specific password
  }
});

// Feedback route
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // user name & email
      to: process.env.EMAIL_USER,   // your receiving email
      subject: `Feedback from ${name}`,
      text: `
        You've received a new message from your portfolio contact form.

        Name: ${name}
        Email: ${email}
        Message:
        ${message}
      `
    });

    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (err) {
    console.error('Email error:', err);
    res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
});

module.exports = router;
