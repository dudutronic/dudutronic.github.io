# Portafolio de Eduardo Souza

Sitio personal estático creado con HTML, CSS y JavaScript. Presenta competencias de QA y automatización, configuración de Playwright/BDD, Cypress y Robot Framework, y un selector de portugués, inglés y español.

**Idiomas de esta página:** [Português](README.md) · [English](README.en.md) · [Español](README.es.md)

## Proyectos destacados

- [Musi Playwright BDD](https://github.com/dudutronic/musica-ae-qa): TypeScript, Cucumber/Gherkin, contextos aislados, evidencias y CI.
- [Musi Cypress E2E](https://github.com/dudutronic/musica-ae-qa-cypress): flujos de interfaz, responsividad, vídeos, capturas de fallos y CI.
- [Musi Robot HTTP Smoke](https://github.com/dudutronic/musica-ae-qa-robot-api): verificaciones HTTP de solo lectura para rutas HTML públicas con Robot Framework, RequestsLibrary y CI. No presupone una API JSON no documentada.

## Vista previa local

Abre `index.html` en un navegador o inicia un servidor estático desde la raíz:

```bash
python -m http.server 8000
```

Después abre `http://localhost:8000`. El sitio no requiere compilación ni dependencias npm.

## Publicación en GitHub Pages

El repositorio `dudutronic.github.io` se publica en <https://dudutronic.github.io>. El workflow `.github/workflows/pages.yml` despliega la raíz en cada push a `main` y en ejecuciones manuales. En **Settings → Pages → Source**, selecciona **GitHub Actions**.

La mascota, los stickers de cómic/manga y los detalles visuales de arcade/ciencia ficción son ilustraciones originales, no personajes, logos ni frases de franquicias existentes.
