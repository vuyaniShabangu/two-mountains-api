const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

 exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
 });

 exports.sendMail = functions.https.onRequest((request, response) => {
    let testAccount = nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "mail.mhmholdings.co.za",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "twomountains-admin@mhmholdings.co.za", // generated ethereal user
        pass: "Herman@003" // generated ethereal password
      }
    });
  
    // send mail with defined transport object
    let info = transporter.sendMail({
      from: 'twomountains-admin@mhmholdings.co.za', // sender address
      to: "vuyani.shabangu@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>" // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    response.send("Sweet home Alabama!");
 });
