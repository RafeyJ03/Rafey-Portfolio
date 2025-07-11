// app/api/contact/route.ts
import { Resend } from 'resend';
import { generateEmailTemplate } from '@/app/components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
  }
  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isValidEmail(email)) {
    return new Response(JSON.stringify({ error: 'Invalid email format' }), { status: 400 });
  }

  try {
    await resend.emails.send({
      from: process.env.RESEND_FROM!, 
      to: process.env.RESEND_TO!, 
      replyTo: email,
      subject: `New contact from ${name}`,
      html: generateEmailTemplate({
        name,
        email,
        message,
      }),
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error }), { status: 500 });
  }
}
