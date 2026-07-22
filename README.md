# HIG Driven promotional website

Website source for the HIG Driven product page. This project is intentionally separate from the public [`HIG-Driven` skill repository](https://github.com/dzakwanfadhlullah/HIG-Driven).

## Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4 for the toolchain, with a tokenized CSS layer for the Figma-led visual system
- Server Components by default
- One small Client Component for the installation command copy action
- Vercel-compatible deployment

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Production checks:

```bash
npm run lint
npm run build
npm run start
```

## Design source and implementation intent

The page follows the structure and visual language extracted from the private Figma reference: floating pill navigation, Geist-led typography, warm surfaces, red accent, large section anchors, proof-led storytelling, dark workflow/install sections, FAQ disclosure, and a full footer navigation.

HIG Driven is used as the implementation lens rather than a visual skin. The page uses semantic landmarks, real links, native disclosure, visible focus, responsive reflow, reduced-motion fallback, text alternatives, and copy that does not invent customer claims.

## Keeping source private while deploying to Vercel

This folder is separate from the public `HIG-Driven` skill repository. If the website source should be private, make this GitHub repository private or deploy directly from this local folder with the Vercel CLI. Do not add it to the public skill repository.

Recommended options:

1. Create a private GitHub repository and connect that repository to a Vercel project.
2. Or deploy from this local folder with `vercel` / `vercel --prod` after authenticating the Vercel CLI.

Vercel environment variables belong in the Vercel project settings or `.env.local` (which is ignored). Never put Figma tokens, API keys, or private service credentials in source or variables prefixed with `NEXT_PUBLIC_`. Server-side variables can be read by Server Components or route handlers without being sent to the browser.

The source repository can remain private, but browser-delivered HTML, CSS, JavaScript, fonts, and public images are inherently inspectable by visitors. No frontend deployment can make those client assets secret.

## Security checklist

- Revoke any Figma personal access token shared in chat and create a replacement.
- Keep `.env*` files out of Git.
- Use `NEXT_PUBLIC_` only for values that are intentionally public.
- Keep private APIs behind a server route or external service.
- Review Vercel project members and deployment protection before sharing previews.

## License

The website source and the public HIG Driven package are separate projects. The public package and skill remain MIT licensed in the separate product repository.
