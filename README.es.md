# Portafolio de Eduardo Souza

Sitio personal estático creado con HTML, CSS y JavaScript. La página principal prioriza el perfil profesional, la experiencia corporativa y las competencias técnicas antes de los proyectos personales de QA y automatización. Está disponible en portugués, inglés y español.

La página `resume.html` muestra el currículum completo, sigue el idioma seleccionado y permite imprimirlo o guardarlo como PDF.

## QA Copilot Skill — PoC offline

Prueba de concepto en Python para borradores BDD/Gherkin, análisis heurístico de logs de automatización y generación de payloads sintéticos desde contratos JSON. No usa LLM, servicios externos ni dependencias de terceros. La guía detallada, los ejemplos y las pruebas están en la [carpeta de la PoC](./qa-copilot-skill/README.md).

```powershell
Set-Location .\qa-copilot-skill
python -m qa_copilot_skill.cli demo
python -m unittest discover -s tests -v
```

**Idiomas de esta página:** [Português](README.md) · [English](README.en.md) · [Español](README.es.md)

## Proyectos personales complementarios

Cada tarjeta abre una página con un vídeo narrado, la explicación del flujo de
pruebas y los comandos de ejecución. La página de Playwright también incluye un
recorrido en vídeo de su canalización CI/CD de GitHub Actions. Cuando la
grabación nativa del navegador no capturó la interfaz, se usan capturas reales
de la página para ilustrar los pasos; los resultados mostrados proceden de las
ejecuciones de pruebas.

Los repositorios, las ejecuciones de CI y los artefactos originales permanecen
privados. El sitio no concede acceso de lectura a los repositorios: en GitHub,
ese permiso también permite clonar el código. Se puede solicitar una
demostración guiada sin acceso al código fuente. No se muestran credenciales.

Para solicitar una demostración guiada, contacta con
<mailto:dudutronic@gmail.com>.

## Vista previa local

Abre `index.html` en un navegador o inicia un servidor estático desde la raíz:

```bash
python -m http.server 8000
```

Después abre `http://localhost:8000`. El sitio no requiere compilación ni dependencias npm.

## Publicación en GitHub Pages

El repositorio `dudutronic.github.io` se publica en <https://dudutronic.github.io>. El workflow `.github/workflows/pages.yml` despliega la raíz en cada push a `main` y en ejecuciones manuales. En **Settings → Pages → Source**, selecciona **GitHub Actions**.

La mascota, los stickers de cómic/manga y los detalles visuales de arcade/ciencia ficción son ilustraciones originales, no personajes, logos ni frases de franquicias existentes.

Contacto profesional: [LinkedIn](https://www.linkedin.com/in/eduardo-henrique-nilo-de-souza/) · [Correo](mailto:dudutronic@gmail.com)
