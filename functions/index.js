const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');

admin.initializeApp();

const app = express();
app.use(cors({ origin: true }));

const sendgridemail = require('@sendgrid/mail');
const SENDGRID_API_KEY = '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';
const SENDGRID_API_KEY = '';
sendgridemail.setApiKey(SENDGRID_API_KEY);

app.post('/sendMail', (req, res) => {

    let email = req.body;

    const msgbody = {
        to: email.to,
        from: email.from,
        subject: email.subject,
        templateId: 'd-82ff6b18293c47c3a313086a19365d31'
    };
    console.log('Mail', msgbody)
    sendgridemail.send(msgbody);
    res.status(200).send({
        success: true
    });
});


const opts = { memory: '2GB', timeoutSeconds: 60 };
exports.api = functions.runWith(opts).https.onRequest(app);
