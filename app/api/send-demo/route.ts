import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, company, product, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: 'CelerApps Demo <onboarding@resend.dev>',
      to: ['hello@celerapps.com'],
      subject: `New Demo Request: ${product} - ${company}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #10b981;">New Demo Booking Request</h2>
          <p>You have received a new inquiry from the <strong>${product}</strong> demo page.</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Interested In:</strong> ${product}</p>
          <div style="background: #f9fafb; padding: 15px; border-radius: 8px; margin-top: 20px;">
            <p><strong>Message/Requirements:</strong></p>
            <p>${message}</p>
          </div>
          <p style="font-size: 12px; color: #6b7280; margin-top: 30px;">
            Sent automatically from CelerApps Landing Page.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err: any) {
    console.error('Server Catch Error:', err);
    return NextResponse.json({ error: err.message || 'Failed to send email' }, { status: 500 });
  }
}
