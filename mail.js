const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }   
});

const sendEmail = async ({receivers, subject, message}) => {
    return await transport.sendMail({
        from: "no-reply@musco.com",
        to: receivers,
        subject,
        text: message,
        html: `<p>${message}</p>`
    });
};


module.exports = {sendEmail};


