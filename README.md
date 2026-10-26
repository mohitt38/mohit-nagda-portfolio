# Mohit Nagda — Portfolio

**Live site: https://mohit-nagda.vercel.app**

Personal portfolio for Mohit Nagda, a final-year B.Tech Computer Science (Artificial Intelligence) student building practical AI systems across generative AI, language models, NLP, research, and Python backend development.

- Live site: https://mohit-nagda.vercel.app
- LinkedIn: https://www.linkedin.com/in/mohitnagda/
- GitHub: https://github.com/mohitt38

## Tech stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Motion (Framer Motion)
- Lucide icons

## Features

- Cinematic dark layout with a restrained blue and violet palette
- Sticky navigation that changes on scroll, with a full-screen mobile menu
- Interactive AI journey map that illuminates as you move through the page
- Animated hero field, scroll reveals, timeline, and project-card depth
- Research section set apart as a manuscript surface
- Skill groups without fake proficiency bars
- Real contact links, and GitHub links only for repositories that exist
- Respects `prefers-reduced-motion`
- Semantic HTML, Open Graph metadata, and a favicon

## Setup

```bash
npm install
npm run dev
```

Open the local URL Vite prints, usually `http://localhost:5173`.

```bash
npm run build
npm run preview
```

`npm run lint` runs Oxlint.

## Project structure

```text
src/
  components/    Navbar, hero field, journey map, cards
  sections/      Page sections
  data/          Experience, projects, research, skills
  config/        Contact details and verified links
  hooks/         Scroll and active-section state
public/          Favicon and social image
```

Content lives in `src/data` and `src/config`. Update those files rather than hunting through components.

Contact details: `src/config/contact.ts`  
Project repository URLs: `src/config/links.ts`

## Deployment

The site is a static Vite build. `npm run build` writes `dist/`.

### Vercel or Netlify

Import the repository, leave the build command as `npm run build`, and set the output directory to `dist`. No environment variables are required.

### GitHub Pages

For a project site at `https://<user>.github.io/mohit-nagda-portfolio/`, set the Vite base before building:

```ts
// vite.config.ts
export default defineConfig({
  base: "/mohit-nagda-portfolio/",
  plugins: [react(), tailwindcss()],
})
```

Then publish the `dist` folder with GitHub Pages. After the site has a public URL, add that absolute URL to the Open Graph tags in `index.html`.

## Screenshots

Add captures here after the first deploy:

- `docs/screenshots/hero.png`
- `docs/screenshots/projects.png`
- `docs/screenshots/research.png`

## Notes on the content

- Experience, education, research status, and skills follow the resume.
- Repository links were checked against the public profile [github.com/mohitt38](https://github.com/mohitt38).
- Live demo buttons are omitted. No public deployment URL was verified.
- Research cards do not invent a journal, publisher name, DOI, or citation count.
- There is no resume download, because a public resume file is not shipped with this site.

## Environment

No API keys are used. `.env.example` documents that. Do not commit secrets. `.env` files are gitignored.

## Author

Mohit Nagda  
Udaipur, Rajasthan, India  
[nagdamohit19@gmail.com](mailto:nagdamohit19@gmail.com)  
[LinkedIn](https://www.linkedin.com/in/mohitnagda/) · [GitHub](https://github.com/mohitt38)

## License

MIT. See `LICENSE`.
