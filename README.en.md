# Eduardo Souza Portfolio

Static personal website built with HTML, CSS and JavaScript. It presents QA and automation skills, setup details for Playwright/BDD, Cypress and Robot Framework, and a Portuguese/English/Spanish language selector.

**Languages for this page:** [Português](README.md) · [English](README.en.md) · [Español](README.es.md)

## Featured projects

- [Musi Playwright BDD](https://github.com/dudutronic/musica-ae-qa): TypeScript, Cucumber/Gherkin, isolated browser contexts, evidence and CI.
- [Musi Cypress E2E](https://github.com/dudutronic/musica-ae-qa-cypress): UI flows, responsive checks, videos, failure screenshots and CI.
- [Musi Robot HTTP Smoke](https://github.com/dudutronic/musica-ae-qa-robot-api): read-only HTTP checks for public HTML routes using Robot Framework, RequestsLibrary and CI. It does not assume an undocumented JSON API.

## Local preview

Open `index.html` in a browser, or start a local static server from the repository root:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`. The site has no build step or npm dependencies.

## GitHub Pages deployment

The `dudutronic.github.io` repository is published at <https://dudutronic.github.io>. The workflow in `.github/workflows/pages.yml` deploys the repository root on pushes to `main` and on manual runs. Set **Settings → Pages → Source** to **GitHub Actions**.

The site's mascot and arcade/sci-fi visual details are original artwork, not characters or quotes from existing franchises.
