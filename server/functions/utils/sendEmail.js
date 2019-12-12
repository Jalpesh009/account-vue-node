var sgMail = require('@sendgrid/mail');
var config = require('../config');
exports.sendEmail = function(email_to,email_subject,email_message)
{
    sgMail.setApiKey(config.sendGridApi);
    const msg = {
        to: email_to,
        from: 'noreply@callanswering.com',
        subject: email_subject,
        //text:email_message,
        html: email_message,
        };

    sgMail.send(msg, function(err, json)
    {
        if(err){
            return 0;
        }
        else{
           return 1;
        }
    });
}
