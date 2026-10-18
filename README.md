# Mokitha Piyarathna — personal boxing athlete profile

A standalone, responsive static website built with HTML, CSS and vanilla JavaScript. It contains no builder branding, no external runtime dependencies, and no generated replacement athlete photos.

## Files
- `index.html` — all page content, SEO metadata and factual ProfilePage/Person structured data
- `styles.css` — responsive dark sports-database design
- `script.js` — mobile navigation, gallery lightbox and 15-row record table
- `assets/` — six uploaded photographs, resized and optimised as JPEG
- `favicon.svg` — original MP monogram
- `robots.txt` — crawl rules
- `sitemap.xml.template` — replace the placeholder domain and save as `sitemap.xml`
- `_headers` — security headers and long-lived caching for Cloudflare Pages

## Local preview
Open `index.html` directly in a browser, or run a local server from this folder:
```bash
python3 -m http.server 8080
```
Then open `http://localhost:8080`.

## Publish free with Cloudflare Pages
1. Create a GitHub account if needed, then create a new **private or public** repository and upload the contents of this folder (upload the files inside this folder, not the parent folder).
2. Create/sign in to Cloudflare and open **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repository. Use **no build command** and set the build output directory to `/` (or the repository root, depending on the current dashboard wording). This is a static site; it needs no Node build step.
4. Deploy. Cloudflare gives you a temporary `*.pages.dev` address so you can test the page and photos.
5. Buy your chosen domain only after checking it in a registrar checkout. Add the domain in Cloudflare Pages → Custom domains and follow the DNS instructions shown by Cloudflare. Do not change nameservers or DNS records based on guesses.
6. Cloudflare Pages supports HTTPS; wait for the custom-domain certificate to become active, then test the site on mobile and desktop.

Alternative static hosts: GitHub Pages and Netlify also support static sites and custom domains. Check their current plan limits before choosing.

## Domain setup and canonical URL
The domain was not purchased or reserved as part of this project. Availability can change and must be confirmed in a registrar checkout. Check `mokithapiyarathna.com` first, then `mokithapiyarathna.co.uk`. Avoid paying for unnecessary add-ons; domain renewal pricing may differ from the first-year offer.

Once you own the final domain:
1. In `index.html`, add this inside `<head>` (replace with the exact preferred HTTPS domain):
   `<link rel="canonical" href="https://YOUR-DOMAIN-HERE/">`
2. Copy `sitemap.xml.template` to `sitemap.xml` and replace `YOUR-DOMAIN-HERE` with the domain, without a trailing slash after the domain in the `<loc>` other than the final page `/`.
3. Add `Sitemap: https://YOUR-DOMAIN-HERE/sitemap.xml` to `robots.txt`.
4. Update Open Graph URLs if desired. `og:image` is a relative path and works on the root page; absolute URLs are preferable for some link preview crawlers after the final domain is live.
5. Commit/push the changes and redeploy.

## Google Search Console
1. Open Google Search Console and add the exact custom domain as a **Domain property**.
2. Follow Google's DNS TXT verification instructions at your DNS provider.
3. After the domain resolves and HTTPS works, submit `https://YOUR-DOMAIN-HERE/sitemap.xml`.
4. Use URL Inspection for the homepage and choose **Request indexing**.
5. Make sure the homepage can be accessed without login, and do not add `noindex`.
Google decides whether and when to index or rank a page. A correct setup improves crawlability but cannot guarantee ranking or a specific position.

## Update athlete information
- Edit the content in `index.html`.
- Edit the 15 `bouts` objects in `script.js` when confirmed bout-level dates, opponents, results and events are available. Leave unknown fields blank.
- To replace/add photos, place the actual photo in `assets/`, use a descriptive filename, then update the image `src`, `data-full` and alt text in `index.html`.
- The medal achievements, competitions and approximate weight history are presented as athlete-reported, not independently verified. Keep that qualification unless independent records become available.
- The 15-bout total is reported by the athlete; wins/losses are deliberately not inferred.
