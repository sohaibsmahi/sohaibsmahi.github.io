# Portfolio

Personal portfolio for **Souheib Smahi**, built with Astro, Tailwind CSS 4 and astro-icon.

## Stack

- [Astro](https://astro.build) 6 (static)
- [Tailwind CSS](https://tailwindcss.com) 4 via `@tailwindcss/vite`
- [astro-icon](https://www.astroicon.dev/) with Lucide and Simple Icons packs
- Inter + Fraunces from Google Fonts
- Vanilla TypeScript for scroll reveal and nav interactions

Node 22+ required (see `.nvmrc`). Uses Yarn 1.

## Getting started

```sh
nvm use
yarn install
yarn dev
```

Open `http://localhost:4321`.

## Scripts

| Command        | What it does                     |
| -------------- | -------------------------------- |
| `yarn dev`     | Start the dev server             |
| `yarn build`   | Build the static site to `dist/` |
| `yarn preview` | Preview the production build     |

## Project structure

```
src/
  components/
    sections/        # Hero, About, Experience, Skills, Education, Contact
    ui/              # Container, SectionHeading, Button, Badge
    Navbar.astro
    Footer.astro
  data/
    site.ts          # Name, email, socials, nav config
    cv.ts            # Typed CV content (experience, skills, etc.)
  layouts/
    Layout.astro
  pages/
    index.astro
  scripts/
    reveal.ts        # IntersectionObserver-based scroll reveal
    navbar.ts        # Mobile menu and scroll styling
  styles/
    global.css       # Tailwind + theme tokens + keyframes
```

## Editing content

- **Personal details** (name, email, phone, LinkedIn, resume URL): `src/data/site.ts`
- **CV content** (summary, experience, education, skills, certifications, languages): `src/data/cv.ts`
- **Resume PDF**: drop the file at `public/Souheib-Smahi-CV.pdf` or update `resumeUrl` in `src/data/site.ts` to the final hosted URL.

## Icons

Add new icon names to the `include` list in `astro.config.mjs`, then use `<Icon name="lucide:..." />` or `<Icon name="simple-icons:..." />` from `astro-icon/components`.
