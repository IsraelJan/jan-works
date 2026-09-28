import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    // Send the inquiry through Resend
    const { data, error } = await resend.emails.send({
      from: "JAN WORKS <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL || "israeljan.78@gmail.com"],
      replyTo: email,
      subject: `New JAN WORKS inquiry from ${name}`,
      text: [
        "NEW JAN WORKS PROJECT INQUIRY",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Company / Project: ${company || "Not provided"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to send inquiry.",
        },
        { status: 500 }
      );
    }

    console.log("CONTACT INQUIRY SENT:", data?.id);

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry sent successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to process inquiry.",
      },
      { status: 500 }
    );
  }
}