import { NextResponse } from "next/server";
import { Resend } from "resend";

// Don't initialize at top level - do it inside the handler
export async function POST(request: Request) {
  // Check if API key exists
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 },
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, subject, message } = body;

    // ... rest of your logic
    const { data, error } = await resend.emails.send({
      from: "SueSmart Contact <onboarding@resend.dev>",
      to: "sunbeamkenya001@gmail.com",
      subject: `New Contact Form Submission: ${subject}`,
      html: `...`,
      replyTo: email,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    // ... error handling
  }
}
