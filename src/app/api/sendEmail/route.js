
const nodemailer = require('nodemailer');

export async function POST(request) {
    const { email, name, message } = await request.json();
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_MAIL,
            pass: process.env.GMAIL_PASS
        }
    });

    const mailOptions = {
        from: email,
        to: 'samu1999.sc@gmail.com',
        subject: name,
        html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Titolo dell'Email</title>
    </head>
    <body>
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1>MAIL da portfolio personale</h1>
        <p>Da ${email},</p>
        <p>${message}</p>
      </div>
    </body>
    </html>
  `
    };

    await transporter.sendMail(mailOptions);
    return Response.json({ message: 'Email sent!' });
}



