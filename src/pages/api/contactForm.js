const nodemailer = require('nodemailer');

export default async function handler(req, res) {
    // const {name, email, message} = req.body;

    let transporter = nodemailer.createTransport({
        host: "smtp.zoho.com", port: 587, secure: true, auth: {
            user: "rossnerandre@gmail.com", pass: "Metalnuvens1!@2",
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: "email@gmail.com", // sender address
        to: "contato@andrerossner.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    res.status(200).json({message: 'success'});
}