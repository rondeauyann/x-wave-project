const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');

admin.initializeApp();

const app = express();
app.use(cors({ origin: true }));

const sendgridemail = require('@sendgrid/mail');
// const SENDGRID_API_KEY = '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';
const SENDGRID_API_KEY = '';
sendgridemail.setApiKey(SENDGRID_API_KEY);

app.post('/sendMail', (req, res) => {

    let email = req.body;

    const msgbody = {
        to: email.to,
        from: email.from,
        subject: email.subject,
       // templateId: 'd-6a0f3e968d0d486db9f67b1d0802b0c4',
        templateId: ''
    };
    console.log('Mail', msgbody)
    sendgridemail.send(msgbody);
    res.status(200).send({
        success: true
    });
});


const opts = { memory: '2GB', timeoutSeconds: 60 };
exports.api = functions.runWith(opts).https.onRequest(app);
