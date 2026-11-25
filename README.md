# CyberSmart Butambala

A free, open-source cybersecurity education site for primary and secondary schools in Butambala District, Uganda. The lessons introduce practical systems-security ideas to students and teachers in English and Luganda. Luganda translations are open for community review and improvement.

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
npm run generate:pdfs
npm run build
```

`prebuild` runs `generate:pdfs` automatically before `next build`. The script reads the six typed lesson modules and generates English and Luganda books and primary guides, plus the English teacher lesson plans, in `public/downloads/`. It can also be run directly with `npm run generate:pdfs`; generated file sizes are printed to the console.

Next.js exports a fully static site to `out/`, including the generated downloads. No server, API, database, or runtime service is required. Deploy the repository to Vercel; its Next.js build runs the prebuild PDF generation and publishes the static export.

Set `NEXT_PUBLIC_SITE_URL` to the canonical production origin before building so canonical links and the sitemap use the deployed URL. The default `https://example.com` is a placeholder and must be replaced before publication.

## Framework security note

This project stays on Next.js 14 as required by its specification. The current npm audit database reports a critical advisory for the required Next.js 14 release. The deployment target is the static `out/` export, which does not run a Next.js server; do not deploy it with `next start` or another self-hosted Next.js server. Reassess the framework-version requirement before introducing any server runtime.

## Adding a lesson

Add a typed `Lesson` object in `content/lessons/<slug>.ts` and its Luganda translation in `content/lessons/<slug>.lg.ts`. Include both in the locale-specific arrays in `content/lessons/index.ts`. Also add the module imports and primary-level guide text in both languages to `scripts/generate-pdfs.ts`. The lesson index, detail route, and sitemap are generated from the exported list. Keep the student and teacher sections complete and review technical examples for the intended school audience.

## Translations

UI labels live in `locales/en.json` and `locales/lg.json`; keep every key aligned when changing interface text. Each English lesson has a matching `.lg.ts` Luganda translation. Community members are encouraged to review the Luganda wording for clarity, consistency, and technical accuracy.

## Scan a link

The client-side `/scan` page submits an entered HTTP or HTTPS URL directly to the Google Safe Browsing v4 lookup API. This site does not store or log scanned URLs; Google receives the submitted URL to check its threat lists. A result not found on those lists is not a guarantee that a link is safe.

To configure the checker, select or create a project in the [Google Cloud Console](https://console.cloud.google.com/), enable the Safe Browsing API, then create an API key under **APIs & Services → Credentials**. Restrict the key to the Safe Browsing API and allowed website referrers, and set reasonable quotas. Set `NEXT_PUBLIC_GOOGLE_SAFE_BROWSING_KEY` in `.env.local` for local development and in the Vercel project's build environment before deploying. Because `NEXT_PUBLIC_` values are included in the public browser bundle, this key is not secret and must be restricted. Without a configured key, the page displays a setup message instead of making a request.

## Downloads and licensing

The educational PDFs and lesson materials are licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/); website source code is under the [MIT License](https://opensource.org/license/mit). Luganda translations are available for community review and improvement. See `MATERIALS-LICENSE.md` for scope details.

## Acknowledgement

Supported by the Internet Society Fellowship Program. The views expressed are those of the author and do not necessarily reflect those of the Internet Society.
