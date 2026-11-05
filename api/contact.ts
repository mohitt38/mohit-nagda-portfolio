type ContactPayload = {
  name?: string
  email?: string
  phone?: string
  message?: string
  _honey?: string
}

// Resend's test sender can only deliver to the account inbox until a domain is verified.
const TO = "mohitnagda83@gmail.com"
const FROM = "Mohit Nagda <onboarding@resend.dev>"

function json(status: number, body: Record<string, unknown>) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  })
}

export const config = { runtime: "edge" }

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== "POST") {
    return json(405, { ok: false, error: "Method not allowed" })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return json(500, { ok: false, error: "Email is not configured" })
  }

  let payload: ContactPayload
  try {
    payload = (await request.json()) as ContactPayload
  } catch {
    return json(400, { ok: false, error: "Invalid request" })
  }

  if (typeof payload._honey === "string" && payload._honey.trim()) {
    return json(200, { ok: true })
  }

  const name = String(payload.name ?? "").trim()
  const email = String(payload.email ?? "").trim()
  const phone = String(payload.phone ?? "").trim()
  const message = String(payload.message ?? "").trim()

  if (!name || !email || !phone || !message) {
    return json(400, { ok: false, error: "Please fill in every field." })
  }
  if (name.length > 120 || email.length > 200 || phone.length > 40 || message.length > 5000) {
    return json(400, { ok: false, error: "That message is too long." })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json(400, { ok: false, error: "Enter a valid email." })
  }

  const safeName = name.replace(/[\r\n]+/g, " ")
  const safeEmail = email.replace(/[\r\n]+/g, "")

  const sent = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: safeEmail,
      subject: `Portfolio message from ${safeName}`,
      text: [`Name: ${safeName}`, `Email: ${safeEmail}`, `Phone: ${phone}`, "", message].join("\n"),
    }),
  })

  if (!sent.ok) {
    return json(502, { ok: false, error: "Could not send right now. Email me directly instead." })
  }

  return json(200, { ok: true })
}
