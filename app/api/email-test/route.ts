import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const EMAIL_TO_DEFAULT = 'Info.prudentlocksmith@gmail.com';

export async function POST() {
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ ok: false, error: 'Not available' }, { status: 404 });
  }

  const apiKey = process.env.EMAIL_PROVIDER_API_KEY || '';
  const emailFrom = process.env.EMAIL_FROM || '';
  const emailTo = process.env.EMAIL_TO || EMAIL_TO_DEFAULT;
  const missing: string[] = [];

  if (!apiKey) missing.push('EMAIL_PROVIDER_API_KEY');
  if (!emailFrom) missing.push('EMAIL_FROM');

  if (missing.length > 0) {
    console.error('[email_test_config] missing env vars:', missing.join(', '));
    return NextResponse.json(
      {
        ok: false,
        error: 'Email not configured',
        missing,
        ...(missing.includes('EMAIL_FROM')
          ? { detail: 'EMAIL_FROM must be a Resend-verified sender (domain or address).' }
          : {})
      },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: emailFrom,
      to: emailTo,
      subject: 'Resend email test — Prudent Locksmith',
      text: 'This is a test email sent from /api/email-test.'
    });
  } catch (error) {
    const errorMessage = (error as Error).message || 'unknown';
    console.error('[email_test_send] send failed:', errorMessage);
    return NextResponse.json({ ok: false, error: 'Unable to send email right now.' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
