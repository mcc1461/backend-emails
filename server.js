const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3007;


//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//parse application/json
app.use(bodyParser.json());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to MusCo Blog");
});


const nodemailer = require("nodemailer");

app.post("/email-send", async (req, res) => {
    const { name, email } = req.body;
    //create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "river.dicki12@ethereal.email",
    pass: "Ds1XV3rSHysTP68HRd",
  },
});

const msg = {
    from: `"MusCo Blog" <musco.blog@bloggers.com>`, // sender address
    to: `${name} <${email}>`, // list of receivers
    subject: "Welcome to the Express App", // Subject line
    text: `Hello ${name}, welcome to the Express App`, // plain text body
};
// send mail with defined transport object
const info = await transporter.sendMail(msg);
res.send(`Message have been sent successfully via NODEMAILER! 
Preview URL: ${nodemailer.getTestMessageUrl(info)}
${name} <${email}>
${info.response}`);

});


app.listen(3007, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
