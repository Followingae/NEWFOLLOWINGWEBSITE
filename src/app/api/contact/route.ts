import { NextResponse } from "next/server";
import { render } from "@react-email/render";
import { sendEmail } from "@/lib/mailer";
import ContactNotification from "@/emails/contact-notification";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { services, name, email } = body;

    if (!services?.length || !name || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const html = await render(ContactNotification(body));
    const to = process.env.SMTP_TO || "partners@following.ae";

    await sendEmail({
      to,
      subject: `New brief from ${name}${body.brand ? ` (${body.brand})` : ""}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Contact API]", error);
    return NextResponse.json(
      { error: "Failed to send. Please try again." },
      { status: 500 },
    );
  }
}
