# CyberSmart Butambala

A free, open-source cybersecurity education site for primary and secondary schools in Butambala District, Uganda. The lessons introduce practical systems-security ideas to students and teachers. Lesson content is English-only in this first version; Luganda UI translations are provided and lesson translations are in progress.

## Requirements

- Node.js 18.17 or newer
- npm

## Local development

```sh
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```sh
npm run typecheck
npm run build
```

Next.js exports a fully static site to `out/`. No server, API, database, or runtime service is required. Deploy the repository to Vercel; its Next.js build uses the `build` script and publishes the static export.

Set `NEXT_PUBLIC_SITE_URL` to the canonical production origin before building so canonical links and the sitemap use the deployed URL. The default `https://example.com` is a placeholder and must be replaced before publication.

## Framework security note

This project stays on Next.js 14 as required by its specification. The current npm audit database reports a critical advisory for the required Next.js 14 release. The deployment target is the static `out/` export, which does not run a Next.js server; do not deploy it with `next start` or another self-hosted Next.js server. Reassess the framework-version requirement before introducing any server runtime.

## Adding a lesson

Add a typed `Lesson` object to `content/lessons/index.ts` and include it in the exported `lessons` array. The lesson index, detail route, and sitemap are generated from that list. Keep the student and teacher sections complete and review technical examples for the intended school audience.

## Translations

UI labels live in `locales/en.json` and `locales/lg.json`. Keep the keys in both files aligned. Lesson content is currently authored in English; Luganda lesson translations are in progress.

## Downloads and licensing

The files in `public/downloads/` are marked placeholder editions pending reviewed publication content. Educational materials are licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/); website source code is under the [MIT License](https://opensource.org/license/mit). See `MATERIALS-LICENSE.md` for scope details. Confirm the materials and attribution before publishing final editions.

## Acknowledgement

Supported by the Internet Society Fellowship Program. The views expressed are those of the author and do not necessarily reflect those of the Internet Society.
