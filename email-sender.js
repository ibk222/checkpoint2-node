// First, install the nodemailer package by running: npm install nodemailer
const nodemailer = require("nodemailer");

// Create a transporter object using SMTP
const transporter = nodemailer.createTransport({
  service: "gmail", // Use your email service provider
  auth: {
    user: "lolideborah6@gmail.com", // Your email address
    pass: "June122001", // Your email password or app password
  },
});

// Function to send an email
function sendEmail(to, subject, text) {
  const mailOptions = {
    from: "lolideborah6@gmail.com", // Sender address
    to: to , // List of recipients
    subject: checkpoint, // Subject line
    text: hello , // Plain text body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log("Error occurred: " + error.message);
    }
    console.log("Email sent: " + info.response);
  });
}

// Example usage
sendEmail(
  "recipient@example.com",
  "Test Subject",
  "Hello, this is a test email!"
);
