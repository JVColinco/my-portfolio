# IT Graduate Portfolio

A responsive personal portfolio built with React, Vite, Tailwind CSS, and
JavaScript. The page is split into small components in `src/components/` so
each section can be updated independently.

## Run locally

```sh
npm install
npm run dev
```

Use `npm run build` to create a production build and `npm run lint` to check the
code.

## Personalize before publishing

- Replace the contact placeholders in
  `src/components/EducationContact.jsx` with your real email, GitHub, and
  LinkedIn details.
- Add your resume as `public/resume.pdf`; the Resume link already points there.
- Add your portrait photo as `public/images/profile.jpg`, then update the
  `src` on the profile image in `src/components/HeroSection.jsx` to
  `/images/profile.jpg`. Choose a clear, professional photo; the first section
  already displays it.
- Project screenshots are displayed from `public/images/dashboard.png` (STI
  Guidance Office system) and `public/images/daldal.png` (Daldal).
- The design carousel in `src/components/DesignSection.jsx` uses the artwork
  files in `public/images/`: `ACTS-1.png` through `ACTS-6.png`, `Envo-1.png`,
  `Envo-2.png`, `Likha.png`, `BinderCover.png`, `Tokki-1.png` through
  `Tokki-3.png`, `BURN.png`, and `Animal.png`. Keep image filenames in sync
  with the carousel data if you replace the artwork. Only share images you
  have permission to publish.
- Add your name if you want it displayed; it has been left out because it was
  not provided.

Personal contact URLs and the resume are still placeholders and should be
replaced before the site is published.
