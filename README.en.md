# Eduardo Souza Portfolio

Static personal website built with HTML, CSS and JavaScript. The home page prioritizes the professional summary, corporate experience and technical skills before personal QA automation projects. It supports Portuguese, English and Spanish.

The `resume.html` page presents the full resume, follows the selected site language, and can be printed or saved as a PDF.

## QA Copilot Skill — offline PoC

A Python proof of concept for BDD/Gherkin drafts, heuristic automation-log troubleshooting and synthetic API payloads from JSON contracts. It uses no LLM, external service or third-party Python dependency. The detailed guide, examples and tests are in the [PoC folder](./qa-copilot-skill/README.md).

```powershell
Set-Location .\qa-copilot-skill
python -m qa_copilot_skill.cli demo
python -m unittest discover -s tests -v
```

**Languages for this page:** [Português](README.md) · [English](README.en.md) · [Español](README.es.md)

## Complementary personal projects

Each project card opens a page with a narrated video, an explanation of the test flow and run commands. The QA Copilot video executes CLI commands and shows their real terminal output. The CI/CD video records actual GitHub Actions run #4 on `main`: typecheck passed, 2 scenarios and 6 steps passed, and the `relatorios-bdd-4` artifact was uploaded. Playwright and Cypress browser demos use real page screenshots where native recording did not capture the interface.

The repositories, CI runs, and raw artifacts remain private. The site does not grant repository read access: on GitHub, that permission also allows cloning. Visitors can request a guided walkthrough without source access. No credentials are shown.

To request a guided walkthrough, contact <mailto:dudutronic@gmail.com>.

## Local preview

Open `index.html` in a browser, or start a local static server from the repository root:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`. The site has no build step or npm dependencies.

## GitHub Pages deployment

The `dudutronic.github.io` repository is published at <https://dudutronic.github.io>. The workflow in `.github/workflows/pages.yml` deploys the repository root on pushes to `main` and on manual runs. Set **Settings → Pages → Source** to **GitHub Actions**.

The mascot, comic/manga stickers and arcade/sci-fi visual details are original artwork, not characters, logos or quotes from existing franchises.

Professional contact: [LinkedIn](https://www.linkedin.com/in/eduardo-henrique-nilo-de-souza/) · [Email](mailto:dudutronic@gmail.com)
