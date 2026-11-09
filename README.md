# Athanasios Vasileiadis — academic website

A complete, responsive personal academic website, featuring research, publications, teaching, and talks. Plain HTML, CSS, and a small JavaScript enhancement. No build, package installation, account integration, or external fonts are required.

## Preview

Open `index.html` in a browser. For a local server, open a terminal in this folder and run:

```sh
python3 -m http.server 8000
```

Then visit http://localhost:8000. Stop the server with Ctrl+C.

## Publish on GitHub Pages — browser method

1. Sign in to GitHub. Create a **public** repository named **thanosvasileiadis.github.io**, replacing YOUR-USERNAME with your actual GitHub username in lowercase. If that repository already exists, use it; save any existing website before replacing its files.
2. Extract the supplied ZIP. In the repository, choose **Add file → Upload files**. Upload the **contents** of `academic-website`, including the `assets` folder. The `index.html` file must be at the repository's top level, not inside another `academic-website` folder. Commit the files to the `main` branch.
3. Include the empty `.nojekyll` file. Some file browsers hide files beginning with a dot; if it was omitted during upload, use **Add file → Create new file**, name it `.nojekyll`, and commit it. This tells GitHub to serve the static site without Jekyll processing.
4. Open the repository's **Settings → Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**. Choose **main** and **/(root)**, then click **Save**.
5. Wait for the Pages deployment to finish. GitHub says publication can take up to 10 minutes. Return to **Settings → Pages** and choose **Visit site**. Your address will be **https://thanosvasileiadis.github.io/**.

You can also publish to an ordinary repository such as `academic-website`. Follow the same upload and Pages settings; its URL will be **https://thanosvasileiadis.github.io/academic-website/**. All bundled asset links are relative, so both URL forms work without editing paths.

Instructions checked on 9 November 2026 against [GitHub's site creation guide](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) and [publishing-source instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) on 9 November 2026.

## Publish with Git, if preferred

Create an empty repository on GitHub first, then run these commands **from this website folder**, replacing YOUR-USERNAME:

```sh
git init
git add .
git commit -m "Add academic website"
git branch -M main
git remote add origin https://github.com/ThanosVasileiadis/ThanosVasileiadis.github.io.git
git push -u origin main
```

Then select **Deploy from a branch → main → /(root)** in **Settings → Pages**. No custom GitHub Actions workflow is needed.

## Update the website

- **Text, research, teaching, talks, and contact:** edit `index.html`.
- **Colours, spacing, typography, mobile and print styles:** edit `assets/style.css`. The main colours are defined at the top.
- **Publication filtering and navigation highlighting:** edit `assets/script.js`.
- **Bibliography download:** edit `assets/publications.bib` when publications change.
- **Browser icon:** replace `assets/favicon.svg`.

To add a publication, duplicate an `<article class="publication">` block and set `data-category` to `article`, `manuscript`, or `other`. Keep its title, author list, status, and links accurate. Update the metadata check date only after checking the relevant records again. Commit updates to the publishing branch and GitHub Pages will redeploy.

The website intentionally contains no invented GitHub username, portrait, awards, publication dates, or social accounts. Add verified profile links if desired.

## Content and privacy

The website includes the KIT postdoctoral role, teaching, research, publications, and talks. Accepted papers, manuscripts under revision or submission, and works in preparation are labelled separately from published journal articles. Preprint links remain available where provided.

Only the professional KIT email and city-level affiliation are public. No private street address or telephone number is bundled. Google Drive access permissions were not independently verified. See `SOURCES.md` for scholarly reference links.

## Accessibility and portability

- Semantic landmarks, a skip link, visible keyboard focus, accessible native disclosure controls, and labelled publication filters.
- All content remains readable when JavaScript is disabled. No navigation menu requires scripting.
- Responsive layouts, reduced-motion support, print styles, and text that can wrap on small screens.
- No analytics, cookies, remote font services, or third-party scripts. External scholarly links load only when followed.
- The illustration is original conceptual artwork, clearly described as such; it represents no experimental results.

## Files

```text
index.html
.nojekyll
assets/
  style.css
  script.js
  favicon.svg
  publications.bib
README.md
SOURCES.md
```

Publication target: the existing `ThanosVasileiadis/ThanosVasileiadis.github.io` repository. The previous custom domain did not resolve during publication checks; the target public address is https://thanosvasileiadis.github.io/. The previous website is preserved on the `backup/website-before-academic-redesign-2026-11-09` branch. The deployable site contains only the approved project files; older documents and unused pages are preserved in the backup rather than the deployed version. Deployment status is recorded separately after verification.

## Latest content update — 9 November 2026

Added KIT teaching since 2025, three 2026 invited talks, two research manuscripts, two course books with links, Google Scholar, and additional academic profile links. Updated publication statuses and all nine bibliography entries. Kept the existing visual design and allowed the expanded profile links to wrap on small screens.

## Verification

Passed JavaScript syntax validation and checks for unique section anchors, local asset paths, internal links, publication entry count, and exclusion of private contact details. During the original build, the local server returned HTTP 200. Publication filters were exercised with a simulated document. The current update passed structural, local-link, bibliography, and privacy checks. Browser preview was not retried because the existing preview infrastructure had failed: the in-app browser failed to attach and the native preview failed to capture. Desktop/mobile visual rendering, actual screen-reader behaviour, and print pagination therefore remain unverified in a browser.
