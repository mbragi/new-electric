import  nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer"
// console.log(process.env.MAILER_PASSWORD);

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.zoho.com",
  from: "info@bluehouseng.com",
  secure: true,
  auth: {
    user: process.env.MAILER_USERNAME,
    pass: process.env.MAILER_PASSWORD,
  },
  tls: { rejectUnauthorized: false },
});

transporter.verify((error: Error | null, success: boolean) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log({
      success: success,
      message: "mail server is ready for your messages",
    });
  }
});

async function sendEmail(
  to: string,
  subject: string,
  text: string,
  html: string
): Promise<void> {
  try {
    const mailOptions : Mail.Options  = {
      from: '"Christian Electricity" <info@bluehouseng.com>',
      to,
      subject,
      text,
      html,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

export default sendEmail;
