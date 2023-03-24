const nodemailer = require('nodemailer');

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    if (req.method === 'POST') {
      const { name, email, message } = req.body;
      console.log("🚀 ~ file: sendMail.ts:17 ~ req.body:", req.body)

      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          type: 'OAuth2',
          user: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
          pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
          clientId: process.env.NEXT_PUBLIC_EMAIL_CLIENTID,
          clientSecret: process.env.NEXT_PUBLIC_EMAIL_CLIENTSECRET,
          refreshToken: process.env.NEXT_PUBLIC_EMAIL_REFRESHTOKEN
        },
      });

      const mailOptions = {
        from: `"${name}" <${email}>`,
        to: 'admin@saintjosephrealtyllc.com',
        subject: 'New message from your website saintjosephrealtyllc.com',
        text: message,
      };

      // verify connection configuration
      transporter.verify(function (error: any, success: any) {
        if (error) {
          console.log(error);
        } else {
          console.log('Server is ready to take our messages', success);
        }
      });

      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    }
  } catch (error) {
    console.log({ error });
    res.status(500).json({ message: 'Failed to send email' });
  }
}
