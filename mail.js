const nodemailer = require("nodemailer");
require("dotenv").config();
const path = require("path");

const transporter = nodemailer.createTransport({
  service: process.env.MAIL_SERVICE,
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

// Define the base message content
const messageContent =
  "Hello, welcome to MusCo Blog App. We are glad to have you here. We hope you enjoy our content. Feel free to reach out to us if you have any questions.";

const mailOptions = {
  from: {
    name: "MusCo Blog",
    address: process.env.MAIL_USER,
  },
  to: ["mcoskuncelebi@gmail.com"],
  subject: "Welcome to MusCo Blog App - Testing Nodemailer for sending emails",
  text: messageContent, // Use the message content in the text field
  html: `<b>Hello User,</b>
    <br><br>
    ${messageContent.replace(/\n/g,"<br>")}
    <br><br>
    Best regards,
    <br>
    MusCo Blog Team`, // Use the message content in the HTML field with formatting
  attachments: [
    {
      filename: "MusCo.png",
      path: path.join(__dirname, "MusCo.png"),
      contentType: "image/png",
    },
    {
      filename: "MusCo.pdf",
      path: path.join(__dirname, "MusCo.pdf"),
      contentType: "application/pdf",
    },
  ],
};

const sendEmail = async () => {
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error("Error occurred: ", error);
  }
};

module.exports = { sendEmail };
