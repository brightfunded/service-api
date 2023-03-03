const nodemailer = require("nodemailer")
var path = require('path');
const fs = require('fs');
const handlebars = require('handlebars');

const readHTMLFile = (path) => {
    return fs.readFileSync(path, 'utf8');
}


const modifymessageFromTemplate = (tempalateName, replacements) => {
    let htmlToSend;
    let html = readHTMLFile(__dirname + `/templlate/${tempalateName}`)
    var template = handlebars.compile(html);
    htmlToSend = template(replacements);
    return htmlToSend;
}



const sendMail = async (to, subject, message) => {
    const smtpConfig = {
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: "hazaripoojashree@gmail.com",
            pass: "aixtzjthuxxzwklh"
        }
    };

    let transporter = nodemailer.createTransport(smtpConfig);
    let mailOptions = {
        from: '"Team Bright Funded" <hazaripoojashree@gmail.com>', // sender address
        to: ['kumarmanas167@gmail.com',to], // list of receivers
        subject: subject, // Subject line
        html: message // html body
    };
    // console.log(mailOptions)
    // send mail with defined transport object
    try {
        let info = await transporter.sendMail(mailOptions)
        console.log(info)
    } catch (error) {
        console.log(error);
    }
}


module.exports={sendMail,modifymessageFromTemplate}