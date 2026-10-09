"""Build STUDY-GUIDE.pdf from STUDY-GUIDE.md."""

from pathlib import Path
import re

from reportlab.lib.colors import Color, HexColor, white
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Preformatted,
    Table,
    TableStyle,
    ListFlowable,
    ListItem,
    HRFlowable,
    KeepTogether,
)

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "STUDY-GUIDE.md"
OUTPUT = ROOT / "STUDY-GUIDE.pdf"

pdfmetrics.registerFont(TTFont("Segoe", r"C:\Windows\Fonts\segoeui.ttf"))
pdfmetrics.registerFont(TTFont("Segoe-Bold", r"C:\Windows\Fonts\segoeuib.ttf"))
pdfmetrics.registerFont(TTFont("Consolas", r"C:\Windows\Fonts\consola.ttf"))

INK = HexColor("#16181d")
MUTED = HexColor("#3d4450")
BLUE = HexColor("#1d4e89")
RULE = HexColor("#d5dbe3")
CODE_BG = HexColor("#f4f6f8")
HEAD = HexColor("#0e1116")


def inline(text: str) -> str:
    text = (
        text.replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
    )
    text = re.sub(r"`([^`]+)`", r'<font face="Consolas" size="9" color="#1d4e89">\1</font>', text)
    text = re.sub(r"\*\*([^*]+)\*\*", r"<b>\1</b>", text)
    text = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", r'<link href="\2" color="#1d4e89">\1</link>', text)
    return text


def styles():
    return {
        "h1": ParagraphStyle(
            "h1",
            fontName="Segoe-Bold",
            fontSize=22,
            leading=26,
            textColor=HEAD,
            spaceAfter=8,
        ),
        "h2": ParagraphStyle(
            "h2",
            fontName="Segoe-Bold",
            fontSize=14,
            leading=18,
            textColor=HEAD,
            spaceBefore=14,
            spaceAfter=6,
        ),
        "body": ParagraphStyle(
            "body",
            fontName="Segoe",
            fontSize=10.5,
            leading=15,
            textColor=INK,
            spaceAfter=7,
        ),
        "bullet": ParagraphStyle(
            "bullet",
            fontName="Segoe",
            fontSize=10.5,
            leading=14.5,
            textColor=INK,
            leftIndent=4,
        ),
        "code": ParagraphStyle(
            "code",
            fontName="Consolas",
            fontSize=8,
            leading=11,
            textColor=INK,
            backColor=CODE_BG,
            leftIndent=6,
            rightIndent=6,
            spaceBefore=4,
            spaceAfter=8,
        ),
        "th": ParagraphStyle(
            "th",
            fontName="Segoe-Bold",
            fontSize=9,
            leading=12,
            textColor=white,
        ),
        "td": ParagraphStyle(
            "td",
            fontName="Segoe",
            fontSize=9,
            leading=12,
            textColor=INK,
        ),
    }


def parse(md: str, s):
    flow = []
    lines = md.splitlines()
    i = 0
    while i < len(lines):
        line = lines[i]
        if not line.strip():
            i += 1
            continue
        if line.startswith("```"):
            block = []
            i += 1
            while i < len(lines) and not lines[i].startswith("```"):
                block.append(lines[i])
                i += 1
            i += 1
            flow.append(Preformatted("\n".join(block), s["code"]))
            continue
        if line.startswith("|"):
            rows = []
            while i < len(lines) and lines[i].startswith("|"):
                cells = [c.strip() for c in lines[i].strip().strip("|").split("|")]
                if not all(set(c) <= set("-: ") for c in cells):
                    rows.append(cells)
                i += 1
            header = [Paragraph(inline(c), s["th"]) for c in rows[0]]
            body = [[Paragraph(inline(c), s["td"]) for c in row] for row in rows[1:]]
            table = Table([header, *body], colWidths=[48 * mm, 122 * mm])
            table.setStyle(
                TableStyle(
                    [
                        ("BACKGROUND", (0, 0), (-1, 0), BLUE),
                        ("BACKGROUND", (0, 1), (-1, -1), CODE_BG),
                        ("TEXTCOLOR", (0, 0), (-1, 0), white),
                        ("GRID", (0, 0), (-1, -1), 0.3, RULE),
                        ("VALIGN", (0, 0), (-1, -1), "TOP"),
                        ("LEFTPADDING", (0, 0), (-1, -1), 6),
                        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
                        ("TOPPADDING", (0, 0), (-1, -1), 4),
                        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
                    ]
                )
            )
            flow.append(Spacer(1, 4))
            flow.append(table)
            flow.append(Spacer(1, 8))
            continue
        if line.startswith("# "):
            flow.append(Paragraph(inline(line[2:].strip()), s["h1"]))
            flow.append(HRFlowable(width="100%", thickness=1, color=BLUE, spaceAfter=8))
            i += 1
            continue
        if line.startswith("## "):
            flow.append(Paragraph(inline(line[3:].strip()), s["h2"]))
            i += 1
            continue
        if re.match(r"^\d+\. ", line):
            items = []
            n = 1
            while i < len(lines) and re.match(r"^\d+\. ", lines[i]):
                text = re.sub(r"^\d+\. ", "", lines[i])
                items.append(ListItem(Paragraph(inline(text), s["bullet"]), leftIndent=12))
                n += 1
                i += 1
            flow.append(ListFlowable(items, bulletType="1", start="1", leftIndent=16, bulletFontName="Segoe", bulletFontSize=10.5))
            flow.append(Spacer(1, 4))
            continue
        if line.startswith("- "):
            items = []
            while i < len(lines) and lines[i].startswith("- "):
                items.append(ListItem(Paragraph(inline(lines[i][2:]), s["bullet"]), leftIndent=10))
                i += 1
            flow.append(ListFlowable(items, bulletType="bullet", start="•", leftIndent=16, bulletFontName="Segoe", bulletFontSize=10))
            flow.append(Spacer(1, 4))
            continue
        para = [line.strip()]
        i += 1
        while i < len(lines) and lines[i].strip() and not lines[i].startswith(("#", "-", "|", "```")) and not re.match(r"^\d+\. ", lines[i]):
            para.append(lines[i].strip())
            i += 1
        flow.append(Paragraph(inline(" ".join(para)), s["body"]))
    return flow


def footer(canvas, doc):
    canvas.saveState()
    canvas.setFont("Segoe", 8)
    canvas.setFillColor(MUTED)
    canvas.drawString(18 * mm, 10 * mm, "Mohit Nagda  ·  Portfolio study guide")
    canvas.drawRightString(192 * mm, 10 * mm, str(doc.page))
    canvas.restoreState()


def main():
    story = parse(SOURCE.read_text(encoding="utf-8"), styles())
    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        leftMargin=18 * mm,
        rightMargin=18 * mm,
        topMargin=16 * mm,
        bottomMargin=16 * mm,
        title="How this portfolio was built",
        author="Mohit Nagda",
    )
    doc.build(story, onFirstPage=footer, onLaterPages=footer)
    print(OUTPUT)


if __name__ == "__main__":
    main()
