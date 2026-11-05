import { contact } from "../config/contact"

export function sendContact(data: FormData) {
  const name = String(data.get("name") ?? "").trim()
  const email = String(data.get("email") ?? "").trim()
  const phone = String(data.get("phone") ?? "").trim()
  const message = String(data.get("message") ?? "").trim()
  const body = [`Name: ${name}`, `Email: ${email}`, `Phone: ${phone}`, "", message].join("\n")
  const href = `mailto:${contact.email}?subject=${encodeURIComponent(`Portfolio message from ${name}`)}&body=${encodeURIComponent(body)}`
  const link = document.createElement("a")
  link.href = href
  link.click()
}
