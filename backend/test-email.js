const nodemailer = require('nodemailer');
require('dotenv').config();

// Test email configuration
const testEmail = async () => {
  console.log('Testing email configuration...');
  console.log('EMAIL_USER:', process.env.EMAIL_USER);
  console.log('EMAIL_PASSWORD:', process.env.EMAIL_PASSWORD ? '***configured***' : 'NOT SET');
  console.log('ADMIN_EMAIL:', process.env.ADMIN_EMAIL);
  console.log('');

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Verify connection
    console.log('Verifying SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP connection verified successfully!');
    console.log('');

    // Send test email
    console.log('Sending test email...');
    const info = await transporter.sendMail({
      from: `"${process.env.COMPANY_NAME || 'TerraVik'}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Send to yourself
      subject: 'Test Email - Configuration Working',
      html: '<h1>Success!</h1><p>Your email configuration is working correctly.</p>',
    });

    console.log('✅ Test email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('');
    console.log('Check your inbox:', process.env.EMAIL_USER);
  } catch (error) {
    console.error('❌ Email test failed:', error.message);
    console.error('Full error:', error);
  }
};

testEmail();
