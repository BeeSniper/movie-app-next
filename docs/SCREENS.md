# Screens: movie-app-next

> **Skeleton spec, to be refined for the final capstone.**
> The original spec was not available during the skeleton deployment, so this screen list was defined by the author. Screens may be added, renamed or removed in the final capstone.

Last updated: 11 November 2026

## Screen list

| # | Screen | Route | Purpose |
|---|--------|-------|---------|
| 1 | Home / browse | `/` | Landing screen where users browse movies and reach every other screen. |
| 2 | Search | `/search` | Lets users find movies by title. |
| 3 | Movie detail | `/movies/[id]` | Shows the details of a single movie. |
| 4 | Favorites | `/favorites` | Lists the movies a user has saved. |
| 5 | Login | `/login` | Lets a user sign in to access saved data. |
| 6 | Health check | `/health` | Confirms the app is running and, from Step 5, renders data fetched on the server. |

## Notes

- Every screen above exists as a routed placeholder. Pages are Server Components by default; Client Components are used only where interactivity is needed.
- `/movies/[id]` is a dynamic route. The home page links to it with a sample ID so it is reachable from the UI.
- No secrets are stored in the repo. Environment variable names only will be listed in `.env.example` (planned for Step 5).