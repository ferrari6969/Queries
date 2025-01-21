const sendEmail = require(".emailService");

sendEmail("recipient@example.com", "Test Email", "This is a test email.")
  .then(() => console.log("Email sent successfully"))
  .catch((error) => console.error("Failed to send email:", error));
