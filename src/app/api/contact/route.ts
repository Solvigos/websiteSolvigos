import { NextResponse } from "next/server";
import { Resend } from "resend";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
      || request.headers.get("x-real-ip")
      || "unknown";

    const { allowed, remaining, reset } = rateLimit(ip);

    if (!allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: {
            "X-RateLimit-Limit": "5",
            "X-RateLimit-Remaining": "0",
            "X-RateLimit-Reset": String(reset),
            "Retry-After": String(Math.max(1, reset - Math.floor(Date.now() / 1000))),
          },
        }
      );
    }

    const body = await request.json();
    const { message, email, preferPhone, phoneCode, phone, firstName, lastName, agents, timeline, hearAbout } = body;

    if (!email || !message || !firstName || !lastName || !agents || !timeline || !hearAbout) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const to = process.env.CONTACT_TO;

    if (!to) {
      console.error("CONTACT_TO environment variable is not set");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 24px;">
        <h2 style="color: #1A1A2E; margin-bottom: 20px;">New Contact Form Submission</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 12px; border-bottom: 1px solid #eee; color: #666; width: 140px; vertical-align: top;">Name</td>
            <td style="padding: 10px 12px; border-bottom: 1px solid #eee; font-weight: 500;">${firstName} ${lastName}</td>
          </tr>
          <tr>
            <td style="padding: 10px 12px; border-bottom: 1px solid #eee; color: #666; vertical-align: top;">Email</td>
            <td style="padding: 10px 12px; border-bottom: 1px solid #eee;">
              <a href="mailto:${email}" style="color: #007b7b; text-decoration: none;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 12px; border-bottom: 1px solid #eee; color: #666; vertical-align: top;">Contact Method</td>
            <td style="padding: 10px 12px; border-bottom: 1px solid #eee; font-weight: 500;">
              ${preferPhone && phoneCode && phone ? `Phone: ${phoneCode} ${phone}` : "Email"}
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 12px; border-bottom: 1px solid #eee; color: #666; vertical-align: top;">Agents Needed</td>
            <td style="padding: 10px 12px; border-bottom: 1px solid #eee; font-weight: 500;">${agents}</td>
          </tr>
          <tr>
            <td style="padding: 10px 12px; border-bottom: 1px solid #eee; color: #666; vertical-align: top;">Timeline</td>
            <td style="padding: 10px 12px; border-bottom: 1px solid #eee; font-weight: 500;">${timeline}</td>
          </tr>
          <tr>
            <td style="padding: 10px 12px; border-bottom: 1px solid #eee; color: #666; vertical-align: top;">How Heard</td>
            <td style="padding: 10px 12px; border-bottom: 1px solid #eee; font-weight: 500;">${hearAbout}</td>
          </tr>
        </table>
        <div style="margin-top: 20px; padding: 16px; background: #f5f5f5; border-radius: 8px;">
          <p style="margin: 0 0 6px 0; color: #666; font-size: 13px;">Message</p>
          <p style="margin: 0; font-size: 14px; line-height: 1.6;">${message}</p>
        </div>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: "Solvigos Contact <onboarding@resend.dev>",
      to,
      replyTo: email,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: emailHtml,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, id: data?.id },
      {
        headers: {
          "X-RateLimit-Limit": "5",
          "X-RateLimit-Remaining": String(remaining),
          "X-RateLimit-Reset": String(reset),
        },
      }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
