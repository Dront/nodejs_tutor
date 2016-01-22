var credentials = require('./credentials.js');
var nodemailer = require('nodemailer');


var mailTransport = nodemailer.createTransport('SMTP', {
    host: credentials.mail.host,
    secureConnection: credentials.mail.secure,
    port: credentials.mail.port,
    auth: {
        user: credentials.mail.user,
        pass: credentials.mail.pass
    }
});

mailTransport.sendMail({
    from: credentials.mail.from,
    to: credentials.mail.to,
    subject: credentials.mail.subject,
    text: credentials.mail.text
}, function(err) {
    if (err) console.error( 'Unable to send email: ' + err );
});

