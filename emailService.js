const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "your-smtp-server.com", // Replace with your SMTP server
  port: 587, // Typically 587 for TLS, or 465 for SSL
  secure: false, // true for 465, false for other ports
  auth: {
    user: "your-email@example.com", // Your SMTP email
    pass: "your-email-password", // Your SMTP password
  },
  tls: {
    rejectUnauthorized: false, // Allow self-signed certificates if needed
  },
});

const sendEmail = async (to, subject, text) => {
  try {
    const info = await transporter.sendMail({
      from: '"Your Name" <your-email@example.com>', // Sender address
      to, // Recipient email(s)
      subject, // Subject line
      text, // Plain text body
    });

    console.log("Email sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = sendEmail;
