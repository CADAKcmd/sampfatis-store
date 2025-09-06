/* eslint-env node */
const nodemailer = require('nodemailer')

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed' })
    return
  }

  try {
    const { name, email, phone, item, offer, message } = req.body || {}
    if (!name || !email || !item || !message) {
      res.status(400).json({ ok: false, error: 'Missing required fields' })
      return
    }

    // Configure SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: Number(process.env.EMAIL_PORT || 465),
      secure: true, // true for 465, false for 587
      auth: {
        user: process.env.EMAIL_USER, // your SMTP username (usually your email)
        pass: process.env.EMAIL_PASS, // your SMTP/App password
      },
    })

    // Optional: verify SMTP connection
    // await transporter.verify()

    const to = process.env.EMAIL_TO || process.env.EMAIL_USER

    const text = [
      `New Shop Enquiry`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || 'N/A'}`,
      `Item: ${item}`,
      `Offer: ${offer || 'N/A'}`,
      `Message:`,
      message,
    ].join('\n')

    await transporter.sendMail({
      from: `"Naija Food Store" <${process.env.EMAIL_USER}>`,
      to,
      subject: `New enquiry: ${item}`,
      text,
    })

    res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Email error:', err)
    res.status(500).json({ ok: false, error: err.message || 'Server error' })
  }
}