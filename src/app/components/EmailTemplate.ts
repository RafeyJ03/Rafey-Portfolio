// app/api/contact/emailTemplate.ts

export function generateEmailTemplate({
    name,
    email,
    message,
  }: {
    name: string;
    email: string;
    message: string;
  }) {
    return `
      <div>
        <h2 style="color: #333;"> New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
        <hr style="margin: 20px 0;">
        <p style="font-size: 12px; color: #999;">This message was sent from your website contact form.</p>
      </div>
    `;
  }
  