import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();

  const params = new URLSearchParams({
    grant_type: "password",
    client_id: data.clientId,
    client_secret: data.clientSecret,
    username: data.username,
    password: data.password,
  });

  try {
    const response = await fetch("https://login.salesforce.com/services/oauth2/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params,
    });

    if (!response.ok) {
      const error = await response.text();
      return NextResponse.json({ error }, { status: response.status });
    }

    const tokenData = await response.json();
    return NextResponse.json(tokenData);
  } catch (err) {
    return NextResponse.json({ error: "Request failed" }, { status: 500 });
  }
}