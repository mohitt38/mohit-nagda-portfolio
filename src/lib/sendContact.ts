import { contact } from "../config/contact"

export async function sendContact(data: FormData) {
  const response = await fetch(`https://sendm8.com/f/${contact.email}`, {
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
    }),
  })

  const body = (await response.json().catch(() => null)) as {
    ok?: boolean
    error?: { message?: string }
  } | null
  if (!response.ok || body?.ok !== true) {
    throw new Error(body?.error?.message || "Could not send right now. Email me directly instead.")
  }
}
