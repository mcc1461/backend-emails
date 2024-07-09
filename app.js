const express = require('express');

const app = express();

app.use(express.json());


app.post('/send-email', (req, res) => {
    const { name, email } = req.body;

    const subject = `Hello ${name}, welcome to Musco Blog`;
    const message = `We are glad to have you here. We hope you enjoy our content. Feel free to reach out to us if you have any questions.`;
    const receivers = `${name} <${email}>`;
    sendEmail({
        receivers,
        subject,
        message
    });
}
);


module.exports = app;