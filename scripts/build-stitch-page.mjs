import fs from "fs"

const html = fs.readFileSync("D:/UDR/stitch_mohit_nagda_portfolio_redesign/code.html", "utf8")
const start = html.indexOf("<header")
const end = html.lastIndexOf("</footer>") + "</footer>".length
let body = html.slice(start, end)
body = body.replace(/<script[\s\S]*?<\/script>/g, "")

const logo =
  "https://lh3.googleusercontent.com/aida/AEtjO1W5N6NiRaxy9mgEiz0X_rFDtVvIbUaFfZsrMMv9DBtmIDWe8holkvuqzrrVcjKD_5u8O2IgqT9qCz55QBqdlDhfUuk5WYb9y4ZN8frWbGTRjJyEOuYmz63TbfqA-xyp4ClSLK6t5JAQH8GsDuHcXADKOGOZ-vhUZxfLc12Xl0kwKHx7FRixCvkkO1iFpv-m1qLpar_eVxyMVsbDSKEe4JbIbyZHoqgxnYpwdhlYq8TcDg"
const portrait =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDSfyGSfAhN7BTmKErFXe_faPFG0RTFF2DGEhHAzPstfHpl1mw-48t-2vfM7kQuqn7wBF3-NbPiOc252MzIWtIr7uaIi_IlK8XAego0vKYGplxtRCQ2ffcF09idy0onlKcS2yQ39r_Ft02kxGhVc3fCxVasYYcA1uMrqoCFiuJbLC6LFnPLWJ-BgDSS3W13fgQxADi6ZaJry4PI_KD84SwKiOIDhDlfOxqFoVVMIYtd"
body = body.split(logo).join("/stitch-mark.svg")
body = body.split(portrait).join("/stitch-portrait.jpg")
body = body.replace('href="#resume"', 'href="/Mohit-Nagda-Resume.pdf"')
body = body.replace('href="https://linkedin.com"', 'href="https://www.linkedin.com/in/mohitnagda/"')
body = body.replace(/<div aria-label="Theme Switcher"[\s\S]*?<\/div>/, "<StitchThemeSwitch />")

const tStart = body.indexOf("<!-- Interactive Typewriter")
const tEnd = body.indexOf("<!-- Telemetry Data Strip -->")
if (tStart < 0 || tEnd < 0) throw new Error(`terminal markers ${tStart} ${tEnd}`)
body = body.slice(0, tStart) + "<StitchTerminal />\n" + body.slice(tEnd)

const sStart = body.indexOf("<!-- 05 // SIGNATURE FEATURE")
const sEnd = body.indexOf("<!-- 03 // SELECTED WORK")
if (sStart < 0 || sEnd < 0) throw new Error(`map markers ${sStart} ${sEnd}`)
body = body.slice(0, sStart) + "<StitchSystemMap />\n" + body.slice(sEnd)

const kStart = body.indexOf("<!-- 05 // TOOLKIT")
const kEnd = body.indexOf("<!-- 06 // ACADEMICS")
if (kStart < 0 || kEnd < 0) throw new Error(`skills markers ${kStart} ${kEnd}`)
body = body.slice(0, kStart) + "<StitchSkills />\n" + body.slice(kEnd)

const btn = body.indexOf('id="copy-email-btn"')
const divStart = body.lastIndexOf("<div", btn)
const toastId = body.indexOf('id="copy-email-toast"')
const toastEnd = body.indexOf("</div>", toastId) + "</div>".length
if (btn < 0 || toastId < 0) throw new Error("copy markers")
body = body.slice(0, divStart) + "<StitchCopyEmail />" + body.slice(toastEnd)

function toJsx(src) {
  src = src.replace(/<!--([\s\S]*?)-->/g, (_, comment) => `{/*${comment.replace(/\*\//g, "")}*/}`)
  src = src.replace(/ class=/g, " className=")
  src = src.replace(/ stroke-width=/g, " strokeWidth=")
  src = src.replace(/ stroke-dasharray=/g, " strokeDasharray=")
  src = src.replace(/ preserveaspectratio=/g, " preserveAspectRatio=")
  src = src.replace(/ viewbox=/g, " viewBox=")
  src = src.replace(/ attributename=/g, " attributeName=")
  src = src.replace(/ repeatcount=/g, " repeatCount=")
  src = src.replace(/<(path)(\s[^>]*?)>\s*<\/path>/g, "<path$2 />")
  src = src.replace(/<img(\s[^>]*?)(?<!\/)>/g, "<img$1 />")
  return src
}

const jsx = toJsx(body)
if (jsx.includes("<script")) throw new Error("script remains")
if (jsx.includes('id="copy-email-btn"')) throw new Error("copy button remains")
if (jsx.includes('id="skills"')) throw new Error("skills section remains")
if (jsx.includes('id="system-map"')) throw new Error("map section remains")

const out = `import { StitchCopyEmail, StitchSkills, StitchSystemMap, StitchTerminal, StitchThemeSwitch } from "./StitchParts"

export function StitchPage() {
  return (
    <>
${jsx}
    </>
  )
}
`
fs.mkdirSync("src/stitch", { recursive: true })
fs.writeFileSync("src/stitch/StitchPage.tsx", out)
console.log("bytes", out.length, "lines", out.split("\n").length)
