const nodemailer = require('nodemailer');

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
  error?: any
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    if (req.method === 'POST') {
      const { name, email, message } = req.body;
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

      const customMessage = `<pre>
          <p>name : ${name}</p><br/>
          <p>email: ${email}</p><br/>
          ${message}
      <pre>`

      const mailOptions = {
        from: `"${name}" <${email}>`,
        to: 'admin@saintjosephrealtyllc.com',
        subject: 'New message from your saintjosephrealtyllc.com website',
        html: customMessage,
      };

      // verify connection configuration
      transporter.verify(function (error: any, success: any) {
        if (error) {
          console.error("NodeMail Error", error);
        } else {
          console.error('Server is ready to take our messages', success);
        }
      });

      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    }
  } catch (error) {
    console.error({ error });
    res.status(500).json({ message: 'Failed to send email', error: error });
  }
}
