/* eslint-disable import/no-anonymous-default-export */

const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.SENDGRID_API_KEY);
const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
const sanitizeString = (str) => {
   str = str.replace(/[^a-z0-9áéíóúñüčšćžđ \.,_-]/gim, '');
   return str.trim();
};

export default async function (req, res) {
   console.log(req.body);
   try {
      const { name, email, message, yourEmail, emailInput } = JSON.parse(
         req.body
      );
      //   Honeypots
      if (emailInput || yourEmail) {
         return res.status(500).json({
            status: 'fail',
            msg: `You entered a few too many fields.`,
         });
      }

      if (
         !name ||
         !sanitizeString(name) ||
         name.length > 100 ||
         name.length < 2
      ) {
         return res
            .status(400)
            .json({ status: 'fail', msg: `Please enter valid name.` });
      }
      if (
         !message ||
         !sanitizeString(message) ||
         message.length > 2000 ||
         message.length < 3
      ) {
         return res.status(400).json({
            status: 'fail',
            msg: `Please enter valid message. Maximum length is 2000 characters`,
         });
      }
      if (
         !email ||
         !validateEmail(email) ||
         email.length > 130 ||
         email.length < 6
      ) {
         return res
            .status(400)
            .json({ status: 'fail', msg: `Please enter valid email.` });
      }
      // If all data ok, send mail
      const emailMessage = `Name: ${name}\r\n Email: ${email}\r\n Message: ${message}\r\n`;
      const data = {
         to: 'hello@cheba.me',
         from: 'hello@cheba.me',
         subject: 'Form submitted on cheba.me',
         text: emailMessage,
         html: emailMessage.replace(/\r\n/g, '<br>'),
      };
      const response = await mail.send(data);
      if (response[0].statusCode === 202) {
         return res.status(200).json({
            status: 'ok',
            msg: `Thank you, talk to you soon!`,
         });
      }
   } catch (err) {
      res.status(500).json({
         status: 'fail',
         msg: `An error occured while trying to send message. Please use email address above.`,
      });
   }
}
