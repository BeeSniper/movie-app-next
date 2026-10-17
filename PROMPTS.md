# Prompt log: movie-app-next (Next.js, Foundations phase)

## Prompt 17: Foundations Step 1 (routes, layout, navigation, placeholder pages)

```
Do not search the web or cite any sources.

Do Foundations Step 1 only: routes, root layout, navigation and
placeholder pages. Next.js App Router, Tailwind utility classes, no UI
library, no new dependencies.

Context update: the project is a fresh create-next-app scaffold (Next.js
16, TypeScript, Tailwind v4, src/ directory, no Cache Components). It is
committed as 6188191 and 7670924. Do not install anything and do not
read or print any .env file. Re-read these files before editing:
AGENTS.md, src/app/layout.tsx, src/app/page.tsx, src/app/globals.css,
next.config.ts and package.json. You may also read the guides under
node_modules/next/dist/docs/ as AGENTS.md instructs. Do not read
anything else.

Rules for components: Server Components by default. Add "use client"
only to a file that needs state, effects or browser events. This step
needs none, so there should be no Client Components. If you think one is
needed, tell me and wait.

Create:
- src/components/Header.tsx: a Server Component with the app name and
  links built with next/link to "/" (Home), "/favorites" (Favorites),
  "/login" (Log in) and "/health" (Health). Use Tailwind utility classes.
  The links must wrap cleanly at 375px wide and sit in one row at 1280px.
- src/app/favorites/page.tsx, src/app/login/page.tsx and
  src/app/health/page.tsx: placeholder pages. Each has one h1 heading and
  a one-line description of what will go there. The health page must not
  fetch anything yet.

Change:
- src/app/layout.tsx: keep the existing fonts and the html and body
  tags. Set the metadata title to "Movie App" and a short description.
  Render Header above the page content, and wrap children in a main
  element with a sensible max width and padding that works at 375px and
  1280px.
- src/app/page.tsx: replace the starter content with a placeholder Home
  page in the same style as the others.

Do not modify any other file. Do not modify globals.css, next.config.ts,
package.json, package-lock.json, tsconfig.json, eslint.config.mjs,
AGENTS.md, .gitignore, README.md, anything in public/ or the favicon. Do
not delete any file. If you think another file needs a change, tell me
and wait.

Rules for this session:
- Propose each file edit and wait for my approval.
- Do not edit any file after I approve it. If a change is needed, propose
  it again.
- Do not run any command I did not ask for.
- Do not search the web or cite any sources.
Stop after Foundations Step 1.
```
**What AI produced:** Header.tsx (new Server Component with the app name and next/link links to /, /favorites, /login and /health), placeholder pages for /favorites, /login and /health (each an h1 and one line, no fetching), layout.tsx (metadata title and description, Header above a main wrapper, existing fonts and html and body tags kept) and page.tsx (placeholder Home). 6 files; 6 files changed, 94 insertions(+), 67 deletions(-). Commit 1dacd64.
**What I checked/changed:** No Sources list appeared and agy read no file I had not named. I read the proposal before approving and approved with the full wording (exactly as shown, no other changes, no commands). Read the new files back from disk. git status showed only the six expected files, and git diff --numstat showed only layout.tsx (9 additions, 3 deletions) and page.tsx (7 additions, 64 deletions, the starter content being replaced). A scan for use client, console. and NEXT_PUBLIC found nothing, so there are no Client Components. The Header class names are not split across lines (lg:px-8 and dark:text-zinc-400 each match on one line). Build passed on Next.js 16.4.1 with Turbopack, and TypeScript accepted the LayoutProps type in the AI's layout; the route list shows /, /favorites, /health and /login, all static. In the browser all four routes load, and at 375px and 1280px the header stays on one row with no overlap and no horizontal scrollbar. After a Windows update I re-ran the status, scans and build before committing. Nothing edited after approval. Candidate improvements: no active-link style (it needs a Client Component), no aria-label on the nav, and the header uses bg-black in dark mode while globals.css uses #0a0a0a, which the design tokens step should unify. Hosting is not set up yet: Vercel and Netlify both blocked the new accounts and the appeals are pending.
