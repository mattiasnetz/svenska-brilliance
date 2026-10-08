# AGENTS
- Per-page title/description/canonical use react-helmet-async; index.html holds sitewide JSON-LD. Why: each SEO page needs its own search snippet.
- SEO subpages are rendered by the shared SeoPage component; add new ones to the router and public/sitemap.xml. Why: one layout, sitemap stays complete.
- vite.config dedupes react/react-dom. Why: a new package once loaded a second React copy and blanked the screen.
