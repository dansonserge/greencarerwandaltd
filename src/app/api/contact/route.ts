import { NextResponse } from "next/server";
const nodemailer = require('nodemailer');

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // Your SMTP host, e.g., smtp.zoho.com
      port: Number(process.env.SMTP_PORT), // SMTP port, e.g., 587
      secure: false, // Set to true if port is 465
      auth: {
        user: process.env.SMTP_USER, // Your SMTP user
        pass: process.env.SMTP_PASS, // Your SMTP password
      },
    });

    // Email content
    const mailOptions = {
      from: `"Website Contact Form" <${process.env.SMTP_USER}>`,
      to: "support@greencarerwandaltd.com", // Replace with your recipient email
      subject: `Website Contact Form: Message from ${name}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Website Contact Form: Message from ${name}</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }
    .email-container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      border: 1px solid #dddddd;
      border-radius: 8px;
      overflow: hidden;
    }
    .header {
      background-color: #ffffff;
      color: white;
      text-align: center;
      padding: 20px;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content {
      padding: 20px;
      line-height: 1.6;
      color: #333333;
    }
    .content h2 {
      color: #007bff;
    }
    .footer {
      background-color: #f4f4f4;
      text-align: center;
      padding: 10px;
      font-size: 14px;
      color: #555555;
    }
    .button {
      display: inline-block;
      padding: 10px 20px;
      margin: 20px 0;
      font-size: 16px;
      color: white;
      background-color: #007bff;
      text-decoration: none;
      border-radius: 5px;
    }
    .button:hover {
      background-color: #0056b3;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <!-- Content Section -->
    <div class="content">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
    </div>

    <!-- Footer Section -->
    <div class="footer">
      <p>© 2025 GreenCareRwanda Ltd. All rights reserved.</p>
      <p>
        <a href="https://greencarerwandaltd.com">GreenCareRwanda Ltd</a> |
        <a href="https://www.facebook.com/p/Greencare-Rwanda-Ltd-100063590337079/">Facebook</a>
      </p>
    </div>
  </div>
</body>
</html>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Message sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send the message. Please try again later." },
      { status: 500 }
    );
  }
}