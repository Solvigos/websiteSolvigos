import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // In production, send email via Resend:
    // const { Resend } = require("resend");
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "contact@solvigos.com",
    //   to: "support@solvigos.com",
    //   subject: `New Contact Form Submission from ${name}`,
    //   html: `<p>Name: ${name}</p><p>Company: ${company}</p>...`,
    // });

    console.log("Contact form submission:", { name, company, email, phone, service, message });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
