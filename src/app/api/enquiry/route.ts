import { Resend } from "resend";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function getTextField(
  body: Record<string, unknown>,
  field: string,
  maxLength: number,
) {
  const value = body[field];

  if (typeof value !== "string") {
    return null;
  }

  const trimmed = value.trim();
  return trimmed.length > 0 && trimmed.length <= maxLength ? trimmed : null;
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!isRecord(body)) {
    return Response.json(
      { error: "Invalid enquiry details." },
      { status: 400 },
    );
  }

  const name = getTextField(body, "name", 120);
  const businessName = getTextField(body, "businessName", 160);
  const email = getTextField(body, "email", 254);
  const phone = getTextField(body, "phone", 40);

  if (!name || !businessName || !email || !emailPattern.test(email) || !phone) {
    return Response.json(
      { error: "Please provide valid details in all fields." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.ENQUIRY_TO_EMAIL;

  if (!apiKey || !from || !to) {
    console.error(
      "Enquiry email is not configured. Set RESEND_API_KEY, RESEND_FROM_EMAIL, and ENQUIRY_TO_EMAIL.",
    );
    return Response.json(
      {
        error:
          "Enquiry submission is temporarily unavailable. Please contact us by email.",
      },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  try {
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: "New website enquiry",
      text: [
        "A new enquiry was submitted on the KurlTech Systems website.",
        "",
        `Name: ${name}`,
        `Business name: ${businessName}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend failed to send an enquiry email:", error.message);
      return Response.json(
        { error: "We could not send your enquiry. Please try again later." },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error(
      "Resend request failed:",
      error instanceof Error ? error.message : "Unknown error",
    );
    return Response.json(
      { error: "We could not send your enquiry. Please try again later." },
      { status: 502 },
    );
  }

  return Response.json({ message: "Your enquiry has been sent." });
}
