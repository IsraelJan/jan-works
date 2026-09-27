import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = formData.get("name");
    const email = formData.get("email");
    const company = formData.get("company");
    const message = formData.get("message");

    console.log("CONTACT INQUIRY");
    console.log({
      name,
      email,
      company,
      message,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry received successfully.",
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