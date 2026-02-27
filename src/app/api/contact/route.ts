import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  // In production, you would send this to a CRM, email service, etc.
  console.log("Contact form submission:", body);

  return NextResponse.json(
    { success: true, message: "Brief received" },
    { status: 200 },
  );
}
