import { contact } from "../config/contact"

export async function sendContact(data: FormData) {
  const response = await fetch(`https://formsubmit.co/ajax/${contact.email}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
      _subject: "New message from your portfolio",
      _template: "table",
      _captcha: "false",
    }),
  })

  const body = (await response.json().catch(() => null)) as { success?: string | boolean; message?: string } | null
  const ok = body?.success === true || body?.success === "true"
  if (!response.ok || !ok) {
    throw new Error(body?.message || "Could not send right now. Email me directly instead.")
  }
}
