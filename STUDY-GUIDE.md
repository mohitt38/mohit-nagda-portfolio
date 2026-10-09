# How this portfolio was built

This note is a study guide for the site in this folder. It explains the tools, the file layout, and how a page goes from source code to the live site at [mohit-nagda-portfolio.vercel.app](https://mohit-nagda-portfolio.vercel.app).

Read it once from top to bottom. Then open the files it names and match each idea to the code.

## 1. What you are looking at

This is a **single-page website**. There is one HTML page. Home, About, Experience, Projects, Research, Skills, Education, Achievements, and Contact are sections on that page. The navbar does not load a new page. It scrolls to a section id such as `#projects`.

The browser does not receive a pile of separate HTML files. It receives:

1. `index.html`, a small shell
2. one CSS file
3. one JavaScript file

React then draws the sections inside `<div id="root">`.

There is no backend, no database, and no API key. Your name, jobs, projects, and links are ordinary TypeScript data in `src/data` and `src/config`.

## 2. Tech stack

| Tool | Role in this project |
| --- | --- |
| React 19 | Builds the page out of components. A component is a function that returns UI. |
| TypeScript | JavaScript with types, so a project is not allowed to forget its `name` or `github` field. |
| Vite | Dev server and production bundler. `npm run dev` is Vite. `npm run build` asks TypeScript to check the code, then Vite packs it into `dist/`. |
| Tailwind CSS 4 | Styling with class names such as `text-ivory` and `grid`. Colors and fonts are defined once in `src/index.css`. |
| Motion (the `framer-motion` package) | Entrance fades, the mobile menu, and the “What I built” expand. |
| Lucide | The small icons (arrow, mail, menu). |
| Oxlint | A fast linter. `npm run lint` checks for sloppy code. |

You do not need a server language. Vercel only builds the static files and serves them.

### What each npm script does

```bash
npm install     # download the libraries listed in package.json
npm run dev     # open a local site, usually http://localhost:5173
npm run build   # typecheck, then write the production site into dist/
npm run preview # serve the dist/ folder locally, closer to production
npm run lint    # run Oxlint
```

`package.json` is the list of those libraries and scripts. `package-lock.json` pins the exact versions so the next install matches this one.

## 3. How a visit actually works

1. The browser requests `index.html`.
2. That file sets the title, description, Open Graph tags, favicon, and the two fonts (Inter and Space Grotesk) from Google Fonts.
3. It also contains a small JSON-LD block. That is structured data so search engines can read your name, school, and profile links.
4. The last line of the body loads `/src/main.tsx` in development, or the bundled JavaScript in production.
5. `src/main.tsx` finds `<div id="root">` and renders `<App />`.
6. `src/App.tsx` draws the star field, the navbar, every section, and the footer.

In production, Vite has already merged the many source files into `dist/assets/index-….js` and `dist/assets/index-….css`. The browser downloads those two files, not the whole `src/` folder.

## 4. Folder map

```text
index.html              the document shell and SEO tags
vite.config.ts          turns on React and Tailwind inside Vite
src/main.tsx            starts React
src/App.tsx             page order
src/index.css           colors, fonts, the shared "shell" layout
src/config/             facts that are easy to edit
  contact.ts            email, phone, LinkedIn, GitHub
  links.ts              the four project repository URLs
  site.ts               headline, nav items, section ids
src/data/               the words on the page
  experience.ts
  projects.ts
  research.ts
  skills.ts
  education.ts
  achievements.ts
  journey.ts            the AI journey map nodes
src/sections/           one file per part of the page
src/components/         pieces reused by sections
src/hooks/              small pieces of scroll logic
public/                 favicon.svg and og.png, copied as-is into dist/
```

The important habit is this: **words live in `data` and `config`. Appearance lives in `sections` and `components`.** To change a job bullet, edit `src/data/experience.ts`. You should not have to hunt through the timeline component.

## 5. The shared layout

Almost every block uses the class `shell`, defined in `src/index.css`:

- maximum width `72rem` (the same as Tailwind’s `max-w-6xl`)
- centered
- `1.5rem` of side padding

That is why the navbar, the hero, the Now card, the project cards, and the footer share the same left and right edges. If a new section is full-bleed and ignores `shell`, it will look like it “doesn’t line up.”

Colors are also named once, in the `@theme` block:

- `ink` is the near-black background
- `ivory` is the main text
- `mist` is the quieter text
- `blue` and `violet` are the accents

`font-display` is Space Grotesk, used for headings. Body text is Inter.

## 6. Page order

`App.tsx` renders sections in this order:

1. Hero (`#home`)
2. About (`#about`)
3. Experience (`#experience`)
4. Projects (`#projects`)
5. Research (`#research`)
6. Skills (`#skills`)
7. Education (`#education`)
8. Achievements (`#achievements`)
9. Contact (`#contact`)

The navbar only lists Home, About, Experience, Projects, Research, Skills, and Contact. Education and Achievements are still on the page. The footer links to them.

`src/hooks/useActiveSection.ts` uses an `IntersectionObserver`. It watches which section is in the middle of the screen and marks that nav item as current. The same id also tells the journey map which nodes to light.

`src/hooks/useScrolled.ts` is simpler. After you scroll a little, the navbar gets a dark blurred background, and the thin journey rail appears under it on wide screens.

## 7. The star background

`src/components/AnimatedBackground.tsx` draws on a `<canvas>`. It is not an image and not a video.

- A list of points is stored in memory.
- Each frame moves them a tiny amount and draws a line when two points are close.
- The canvas is `position: fixed` and `pointer-events: none`, so it stays still while you scroll and never blocks a click.
- On a screen narrower than 720px it uses about 22 points. On a wider screen it uses about 42. That keeps phones lighter.
- If the operating system asks for reduced motion, the points are drawn once and do not move.
- The research section paints a solid warm paper color on top, so the stars do not sit under the paper text. Everywhere else the page is transparent enough for the stars to show.

The canvas is sized from `window.innerWidth` and `window.innerHeight`, so it matches a phone screen and does not create a sideways scrollbar.

## 8. Hero and the journey map

`src/sections/Hero.tsx` is the first screen: name, role, sentence, and four links.

The buttons are `MagneticButton`. On a mouse, the button shifts a few pixels toward the cursor. The link itself is a normal `<a>`. “View My Work” is `href="#projects"`. Email links use `mailto:`. External links use `target="_blank"` and `rel="noreferrer noopener"`.

`src/components/SystemMap.tsx` has two shapes:

- **Hero map:** nodes placed with percentages from `src/data/journey.ts`. Lines connect them. A node is an `<a>` to a section.
- **Rail:** the same nodes in a row under the navbar after you scroll, on extra-wide screens only.

`sectionGlow` in `journey.ts` decides which nodes are bright for the section you are reading. On Projects, for example, Projects, NLP, RAG, Generative AI, and LLMs light up.

## 9. Content sections

### About

`src/sections/About.tsx` is a two-column grid on large screens. The left column is the story. The right column is the Now card (final year, college, CGPA, interests). Both columns stretch to the same height. Under that, the six-step journey is a 3-by-2 grid. The steps come from `src/data/education.ts` (`story`).

### Experience

`src/sections/Experience.tsx` is a vertical line with a dot on each role. The jobs themselves are the array in `src/data/experience.ts`. The current role has `current: true`, which paints the dot blue and shows the Current label.

### Projects

`src/data/projects.ts` describes four projects. Each one has a problem, a summary, a “what I built” list, tags, a GitHub URL, and a visual id (`agri`, `summary`, `meeting`, or `ocr`).

`ProjectCard` lays the figure on the left and the text on the right, equal width on desktop. “What I built” toggles extra bullets. It does not navigate away.

`ProjectVisual` draws those figures as SVG. They are not photographs. SVG is a set of shapes in code, so the images stay sharp and do not need image files.

The GitHub URLs are in `src/config/links.ts` and were checked against the public profile `github.com/mohitt38`. There is no live-demo button, because no public demo URL was verified.

### Research

`src/sections/Research.tsx` switches to a paper color so it does not look like another project card. `ResearchCard` shows title, area, role, and status. Status stays exactly as on the resume: camera-ready submission, and under peer review. No journal, DOI, or citation count was invented.

### Skills

`src/data/skills.ts` groups skills. `Skills.tsx` keeps one group id in React state (`useState`). Clicking a group changes that id, and the panel on the right renders that group’s pills. There are no percentage bars.

### Education, achievements, contact

These read `education.ts`, `achievements.ts`, and `contact.ts`. Contact cards are equal height. The copy-email button uses `navigator.clipboard`. If that fails, it falls back to the `mailto:` link.

## 10. Motion, without making the page noisy

`Reveal` fades a block up the first time it enters the viewport (`whileInView`, `once: true`). After that it stays put.

The mobile menu uses `AnimatePresence` so it can fade out as well as in. It is rendered **outside** the navbar header. The header uses `backdrop-blur`, and a `fixed` menu inside a blurred header gets clipped. That was a real bug; the menu is now a sibling of the header and covers the screen.

`prefers-reduced-motion` is checked with `useReducedMotion()`. When it is on, those fades are skipped. A blanket rule in `index.css` also shortens CSS animations.

## 11. Responsive behavior

Tailwind breakpoints used here:

- default styles are the phone
- `sm` is 640px and up
- `md` is 768px and up
- `lg` is 1024px and up
- `xl` is 1280px and up

The navbar links are `hidden lg:flex`. Below that, the menu button shows. Project cards stack (figure on top, text below) until `lg`, then they become two columns. The journey rail is `xl` only, because eight labels do not fit comfortably on a smaller laptop.

This is one site, not a separate mobile app. Vercel serves the same `dist/` folder to every device. The browser applies the right layout from the screen width.

## 12. SEO and files in `public/`

`index.html` holds:

- `<title>`
- meta description
- Open Graph and Twitter tags
- `theme-color`
- JSON-LD `Person`
- favicon link

`public/favicon.svg` and `public/og.png` are copied into the site root. Anything in `public/` is not processed by React. You refer to it as `/favicon.svg`, not as a file inside `src/`.

## 13. How the live site was deployed

Vercel is a host for the static `dist/` folder.

1. The Vercel CLI was signed in to the account `nagdamohit19-2669`.
2. `npx vercel deploy --prod --yes` uploaded this project.
3. Vercel detected Vite, ran `npm run build`, and published the result.
4. The production address is `https://mohit-nagda-portfolio.vercel.app`.

GitHub auto-deploy is not connected yet. A push to GitHub does not update Vercel by itself. Another `npx vercel deploy --prod --yes` from this folder does.

There is nothing to put in an environment variable. Do not add API keys.

## 14. A good order to study the code

1. `package.json`, so you know the libraries.
2. `index.html`, so you see what the browser loads first.
3. `src/main.tsx` and `src/App.tsx`, so you see the tree.
4. `src/index.css`, especially `@theme` and `shell`.
5. `src/config/contact.ts` and `src/data/projects.ts`, so you see content separated from layout.
6. `src/sections/Hero.tsx`, then `Navbar.tsx`.
7. `AnimatedBackground.tsx`, then `SystemMap.tsx`.
8. `ProjectCard.tsx` and `ProjectVisual.tsx`.
9. `useActiveSection.ts`.

When you change copy, start in `src/data` or `src/config`, run `npm run dev`, and refresh. When the change looks right, `npm run build` proves the production build still typechecks.

## 15. Small edits you will probably make

| Change | File |
| --- | --- |
| Email, phone, LinkedIn, GitHub | `src/config/contact.ts` |
| A project’s repository URL | `src/config/links.ts` |
| A job description | `src/data/experience.ts` |
| Project text or tags | `src/data/projects.ts` |
| A new nav item | `src/config/site.ts`, then a matching `id` on a `<section>` |
| Colors | `src/index.css` `@theme` |

The LinkedIn URL is `https://www.linkedin.com/in/mohitnagda/`. An earlier slug, `mohit-nagda`, was a 404 because that profile address does not exist.
