const projectCopy = {
  pt: {
    pageTitle: "Detalhes do projeto",
    backToProjects: "← Voltar aos projetos",
    eyebrow: "PROJETO · DETALHES",
    tagsLabel: "Tecnologias do projeto",
    videoEyebrow: "DEMONSTRAÇÃO NARRADA",
    videoTitle: "Execução do projeto",
    videoBadge: "MP4 · NARRADO",
    flowEyebrow: "COMO FUNCIONA",
    flowTitle: "Fluxo do projeto",
    executionEyebrow: "EXECUÇÃO",
    executionTitle: "Como executar",
    ciEyebrow: "INTEGRAÇÃO CONTÍNUA",
    ciTitle: "Execução real da esteira CI/CD",
    ciBadge: "GITHUB ACTIONS",
    ciRunLink: "Abrir execução real no GitHub Actions ↗",
    accessNote: "Os repositórios de automação são privados. Para conversar sobre o projeto ou solicitar acesso, entre em contato.",
    contactLink: "Falar sobre o projeto",
    notFoundTitle: "Projeto não encontrado",
    notFoundDescription: "Confira o endereço ou volte à página inicial para escolher um projeto.",
    projects: {
      "qa-copilot": {
        title: "QA Copilot Skill",
        eyebrow: "PROJETO 01 · FERRAMENTA LOCAL DE QA",
        summary: "Uma prova de conceito em Python que apoia atividades de qualidade usando regras locais e dados sintéticos, sem enviar informações para serviços externos.",
        tags: ["Python", "BDD / Gherkin", "Análise de logs", "Payloads JSON", "Offline"],
        videoTitle: "Execução prática da skill local",
        videoNote: "Acompanhe os comandos do CLI sendo executados, com a saída real do terminal e narração etapa por etapa. Os exemplos usam dados sintéticos.",
        flow: [
          "Recebe uma história de usuário e sugere cenários BDD em Dado / Quando / Então.",
          "Compara mensagens de um log sintético com assinaturas locais e aponta hipóteses para investigação.",
          "Gera payloads reproduzíveis a partir de um contrato JSON e de uma semente informada.",
          "Apresenta a saída no terminal sem executar nem corrigir os testes analisados."
        ],
        executionDescription: "Execute os comandos na raiz do repositório, com Python instalado. A mesma semente mantém os dados de exemplo reproduzíveis.",
        commands: [
          { label: "Executar a demonstração completa", command: "python -m qa_copilot_skill.cli demo" },
          { label: "Gerar cenários BDD", command: "python -m qa_copilot_skill.cli bdd --requirement \"Como cliente, quero consultar meu saldo.\"" },
          { label: "Gerar payload de API", command: "python -m qa_copilot_skill.cli payload --contract examples/api_contract.json --seed 42" }
        ],
        safetyNote: "A ferramenta usa heurísticas locais, não chama um LLM e não faz chamadas externas. Use somente logs sanitizados e dados sintéticos."
      },
      "playwright-bdd": {
        title: "Musi Playwright BDD",
        eyebrow: "PROJETO 02 · BDD E AUTOMAÇÃO WEB",
        summary: "Suíte em TypeScript com Cucumber e Playwright. Cenários Gherkin legíveis são executados no navegador e produzem relatórios e evidências por execução.",
        tags: ["TypeScript", "Playwright", "Cucumber BDD", "Page Objects", "GitHub Actions"],
        videoTitle: "Demonstração do cenário BDD",
        videoNote: "O teste foi executado e aprovado. Como a gravação bruta do navegador ficou em branco, este vídeo usa capturas reais da página pública para ilustrar os passos narrados.",
        flow: [
          "O cenário em Gherkin define o comportamento esperado da página de cadastro.",
          "Os step definitions encaminham cada etapa para ações reutilizáveis de Page Objects.",
          "O Playwright abre o ambiente de teste e verifica campos, consentimento e estado inicial do botão.",
          "O runner gera relatório e evidências sem enviar o formulário de cadastro."
        ],
        executionDescription: "Para repetir o smoke localmente, instale as dependências e o Chromium. O fluxo público de cadastro não exige credenciais.",
        commands: [
          { label: "Instalar dependências", command: "npm ci" },
          { label: "Instalar o navegador", command: "npx playwright install chromium" },
          { label: "Verificar tipos e executar o smoke", command: "npm run typecheck\nnpm run bdd:smoke" }
        ],
        safetyNote: "O smoke validado acessa somente telas públicas de login e cadastro; não autentica nem cria contas. Cenários protegidos por credenciais exigem uma conta autorizada e secrets configurados na CI.",
        ci: {
          description: "O workflow Testes BDD executa automaticamente em push e pull request para main. Também aceita execução manual com uma tag Cucumber e publica a pasta reports como artefato.",
          video: "assets/videos/05-playwright-ci-cd.mp4",
          steps: [
            "Abra Actions no repositório e selecione o workflow Testes BDD.",
            "Clique em Run workflow, escolha a branch e informe uma tag, por exemplo @smoke ou @responsividade.",
            "O runner Ubuntu baixa o código, configura Node.js 20, executa npm ci e instala os browsers Playwright.",
            "A esteira verifica os tipos. Em push ou pull request executa bdd:smoke; na execução manual usa a tag escolhida.",
            "Ao final, baixe o artefato relatorios-bdd-* na página da execução para consultar relatórios e evidências."
          ],
          note: "Este vídeo acompanha a execução real #4 do GitHub Actions na branch main, disparada manualmente com @smoke e concluída com sucesso: typecheck aprovado, 2 cenários e 6 steps aprovados, artefato relatorios-bdd-4 publicado. O smoke usou somente páginas públicas, sem credenciais. Acesse o run real pelo link abaixo; o GitHub pode pedir login."
        }
      },
      "cypress-e2e": {
        title: "Musi Cypress E2E",
        eyebrow: "PROJETO 03 · TESTES END-TO-END",
        summary: "Suíte independente em JavaScript e Cypress para verificar cadastro, regras de senha, consentimento e comportamento da tela de login em diferentes tamanhos.",
        tags: ["JavaScript", "Cypress", "Testes E2E", "Responsividade", "GitHub Actions"],
        videoTitle: "Demonstração de cadastro e responsividade",
        videoNote: "Os testes foram executados e aprovados sem enviar o cadastro. A gravação nativa do runner ficou em branco; capturas reais da interface ilustram a validação responsiva.",
        flow: [
          "Verifica os campos do cadastro, requisitos de senha e consentimento.",
          "Preenche dados fictícios apenas para validar o estado do formulário; não o envia.",
          "Abre a tela pública de login com viewport mobile, tablet e desktop.",
          "Registra vídeos por especificação e publica evidências na esteira GitHub Actions."
        ],
        executionDescription: "Na pasta do projeto, instale as dependências e execute a suíte de smoke; não é necessário criar conta ou configurar credenciais.",
        commands: [
          { label: "Instalar dependências", command: "npm ci" },
          { label: "Executar cadastro e responsividade", command: "npm run cy:run:smoke" },
          { label: "Executar a suíte completa", command: "npm run cy:run" }
        ],
        safetyNote: "Os dados são fictícios e o teste não submete o cadastro. O destino pode ser configurado por BASE_URL para um ambiente autorizado."
      },
      "robot-http-smoke": {
        title: "Musi Robot HTTP Smoke",
        eyebrow: "PROJETO 04 · TESTES HTTP READ-ONLY",
        summary: "Checagem leve com Robot Framework e RequestsLibrary para confirmar a disponibilidade e o conteúdo HTML das páginas públicas.",
        tags: ["Python", "Robot Framework", "RequestsLibrary", "HTTP", "Somente GET"],
        videoTitle: "Demonstração das verificações HTTP",
        videoNote: "Execução narrada de duas verificações somente GET; não há login, envio de formulário nem alteração de dados.",
        flow: [
          "Cria uma sessão HTTP reutilizável para o ambiente configurado.",
          "Faz GET /login e verifica status, tipo de conteúdo e título.",
          "Faz GET /register e aplica as mesmas verificações à página pública de cadastro.",
          "Gera report.html, log.html e output.xml para consulta da execução."
        ],
        executionDescription: "Crie um ambiente virtual Python, instale as dependências fixadas do projeto e execute os testes a partir da raiz.",
        commands: [
          { label: "Instalar dependências", command: "python -m pip install -r requirements.txt" },
          { label: "Executar os testes", command: "robot --outputdir robot-results tests" }
        ],
        safetyNote: "A suíte usa somente requisições GET para páginas públicas. Não envia credenciais, não cria contas e não modifica dados."
      }
    }
  },
  en: {
    pageTitle: "Project details",
    backToProjects: "← Back to projects",
    eyebrow: "PROJECT · DETAILS",
    tagsLabel: "Project technologies",
    videoEyebrow: "NARRATED DEMO",
    videoTitle: "Project walkthrough",
    videoBadge: "MP4 · NARRATED",
    flowEyebrow: "HOW IT WORKS",
    flowTitle: "Project flow",
    executionEyebrow: "EXECUTION",
    executionTitle: "How to run",
    ciEyebrow: "CONTINUOUS INTEGRATION",
    ciTitle: "Actual CI/CD pipeline run",
    ciBadge: "GITHUB ACTIONS",
    ciRunLink: "Open the real GitHub Actions run ↗",
    accessNote: "The automation repositories are private. Contact me to discuss the project or request access.",
    contactLink: "Discuss this project",
    notFoundTitle: "Project not found",
    notFoundDescription: "Check the address or return home to select a project.",
    projects: {
      "qa-copilot": {
        title: "QA Copilot Skill",
        eyebrow: "PROJECT 01 · LOCAL QA TOOL",
        summary: "A Python proof of concept that supports quality work with local rules and synthetic data, without sending information to external services.",
        tags: ["Python", "BDD / Gherkin", "Log analysis", "JSON payloads", "Offline"],
        videoTitle: "Practical local skill execution",
        videoNote: "Watch the CLI commands execute, with real terminal output and step-by-step narration using synthetic data.",
        flow: [
          "Takes a user story and suggests BDD scenarios in Given / When / Then.",
          "Matches messages from a synthetic log against local signatures and suggests investigation paths.",
          "Generates reproducible payloads from a JSON contract and a supplied seed.",
          "Prints output in the terminal without running or fixing the analyzed tests."
        ],
        executionDescription: "Run the commands from the repository root with Python installed. The same seed keeps sample data reproducible.",
        commands: [
          { label: "Run the full demo", command: "python -m qa_copilot_skill.cli demo" },
          { label: "Generate BDD scenarios", command: "python -m qa_copilot_skill.cli bdd --requirement \"As a customer, I want to check my balance.\"" },
          { label: "Generate an API payload", command: "python -m qa_copilot_skill.cli payload --contract examples/api_contract.json --seed 42" }
        ],
        safetyNote: "The tool uses local heuristics, does not call an LLM and makes no external requests. Use sanitized logs and synthetic data only."
      },
      "playwright-bdd": {
        title: "Musi Playwright BDD",
        eyebrow: "PROJECT 02 · BDD AND WEB AUTOMATION",
        summary: "A TypeScript suite using Cucumber and Playwright. Readable Gherkin scenarios run in the browser and produce reports and evidence for each run.",
        tags: ["TypeScript", "Playwright", "Cucumber BDD", "Page Objects", "GitHub Actions"],
        videoTitle: "BDD scenario walkthrough",
        videoNote: "The test ran and passed. Since the raw browser recording was blank, this video uses real screenshots of the public page to illustrate the narrated steps.",
        flow: [
          "A Gherkin scenario describes the expected behavior of the registration page.",
          "Step definitions route each step to reusable Page Object actions.",
          "Playwright opens the test environment and checks fields, consent and the button's initial state.",
          "The runner creates a report and evidence without submitting the registration form."
        ],
        executionDescription: "To repeat the smoke locally, install the dependencies and Chromium. The public registration flow requires no credentials.",
        commands: [
          { label: "Install dependencies", command: "npm ci" },
          { label: "Install the browser", command: "npx playwright install chromium" },
          { label: "Type-check and run smoke tests", command: "npm run typecheck\nnpm run bdd:smoke" }
        ],
        safetyNote: "The validated smoke flow only opens public login and registration pages; it does not authenticate or create accounts. Credential-protected scenarios require an authorized account and CI secrets.",
        ci: {
          description: "The Testes BDD workflow runs automatically on pushes and pull requests to main. It also supports manual runs with a Cucumber tag and uploads the reports folder as an artifact.",
          video: "assets/videos/05-playwright-ci-cd.mp4",
          steps: [
            "Open Actions in the repository and select the Testes BDD workflow.",
            "Click Run workflow, choose a branch and enter a tag such as @smoke or @responsividade.",
            "The Ubuntu runner checks out the code, sets up Node.js 20, runs npm ci and installs Playwright browsers.",
            "The pipeline type-checks the code. Push and pull request runs execute bdd:smoke; manual runs use the selected tag.",
            "Download the relatorios-bdd-* artifact from the run page to inspect reports and evidence."
          ],
          note: "This video follows actual GitHub Actions run #4 on main, manually triggered with @smoke and completed successfully: typecheck passed, 2 scenarios and 6 steps passed, and relatorios-bdd-4 was uploaded. The smoke used public pages only and needed no credentials. Open the real run below; GitHub may require sign-in."
        }
      },
      "cypress-e2e": {
        title: "Musi Cypress E2E",
        eyebrow: "PROJECT 03 · END-TO-END TESTING",
        summary: "An independent JavaScript and Cypress suite that checks registration, password rules, consent and the login page at different viewport sizes.",
        tags: ["JavaScript", "Cypress", "E2E testing", "Responsive UI", "GitHub Actions"],
        videoTitle: "Registration and responsive walkthrough",
        videoNote: "The tests ran and passed without submitting the form. The runner's native recording was blank, so real UI screenshots illustrate responsive checks.",
        flow: [
          "Checks registration fields, password requirements and consent.",
          "Fills synthetic values only to validate form state; it does not submit the form.",
          "Opens the public login page at mobile, tablet and desktop viewports.",
          "Records videos per spec and uploads evidence through GitHub Actions."
        ],
        executionDescription: "From the project directory, install dependencies and run the smoke suite; no account or credentials are needed.",
        commands: [
          { label: "Install dependencies", command: "npm ci" },
          { label: "Run registration and responsive checks", command: "npm run cy:run:smoke" },
          { label: "Run the full suite", command: "npm run cy:run" }
        ],
        safetyNote: "The data is synthetic and the test does not submit registration. Set BASE_URL to use an authorized environment."
      },
      "robot-http-smoke": {
        title: "Musi Robot HTTP Smoke",
        eyebrow: "PROJECT 04 · READ-ONLY HTTP TESTS",
        summary: "A lightweight Robot Framework and RequestsLibrary check that verifies the availability and HTML content of public pages.",
        tags: ["Python", "Robot Framework", "RequestsLibrary", "HTTP", "GET only"],
        videoTitle: "HTTP checks walkthrough",
        videoNote: "Narrated execution of two GET-only checks; there is no login, form submission or data change.",
        flow: [
          "Creates a reusable HTTP session for the configured environment.",
          "Sends GET /login and checks status, content type and title.",
          "Sends GET /register and applies the same checks to the public registration page.",
          "Creates report.html, log.html and output.xml for review."
        ],
        executionDescription: "Create a Python virtual environment, install the project's pinned dependencies and run the tests from the root directory.",
        commands: [
          { label: "Install dependencies", command: "python -m pip install -r requirements.txt" },
          { label: "Run the tests", command: "robot --outputdir robot-results tests" }
        ],
        safetyNote: "The suite only sends GET requests to public pages. It does not submit credentials, create accounts or modify data."
      }
    }
  },
  es: {
    pageTitle: "Detalles del proyecto",
    backToProjects: "← Volver a proyectos",
    eyebrow: "PROYECTO · DETALLES",
    tagsLabel: "Tecnologías del proyecto",
    videoEyebrow: "DEMOSTRACIÓN NARRADA",
    videoTitle: "Recorrido del proyecto",
    videoBadge: "MP4 · NARRADO",
    flowEyebrow: "CÓMO FUNCIONA",
    flowTitle: "Flujo del proyecto",
    executionEyebrow: "EJECUCIÓN",
    executionTitle: "Cómo ejecutar",
    ciEyebrow: "INTEGRACIÓN CONTINUA",
    ciTitle: "Ejecución real del CI/CD",
    ciBadge: "GITHUB ACTIONS",
    ciRunLink: "Abrir la ejecución real en GitHub Actions ↗",
    accessNote: "Los repositorios de automatización son privados. Contáctame para conversar sobre el proyecto o solicitar acceso.",
    contactLink: "Consultar sobre el proyecto",
    notFoundTitle: "Proyecto no encontrado",
    notFoundDescription: "Verifica la dirección o vuelve al inicio para elegir un proyecto.",
    projects: {
      "qa-copilot": {
        title: "QA Copilot Skill",
        eyebrow: "PROYECTO 01 · HERRAMIENTA LOCAL DE QA",
        summary: "Prueba de concepto en Python que ayuda en tareas de calidad con reglas locales y datos sintéticos, sin enviar información a servicios externos.",
        tags: ["Python", "BDD / Gherkin", "Análisis de logs", "Payloads JSON", "Offline"],
        videoTitle: "Ejecución práctica de la skill local",
        videoNote: "Mira cómo se ejecutan los comandos del CLI, con salida real del terminal y narración paso a paso usando datos sintéticos.",
        flow: [
          "Recibe una historia de usuario y sugiere escenarios BDD en Dado / Cuando / Entonces.",
          "Compara mensajes de un log sintético con firmas locales y propone líneas de investigación.",
          "Genera payloads reproducibles a partir de un contrato JSON y una semilla indicada.",
          "Muestra la salida en la terminal sin ejecutar ni corregir las pruebas analizadas."
        ],
        executionDescription: "Ejecuta los comandos desde la raíz del repositorio con Python instalado. La misma semilla mantiene los datos reproducibles.",
        commands: [
          { label: "Ejecutar la demostración completa", command: "python -m qa_copilot_skill.cli demo" },
          { label: "Generar escenarios BDD", command: "python -m qa_copilot_skill.cli bdd --requirement \"Como cliente, quiero consultar mi saldo.\"" },
          { label: "Generar un payload de API", command: "python -m qa_copilot_skill.cli payload --contract examples/api_contract.json --seed 42" }
        ],
        safetyNote: "La herramienta usa heurísticas locales, no llama a un LLM ni realiza solicitudes externas. Usa solo logs sanitizados y datos sintéticos."
      },
      "playwright-bdd": {
        title: "Musi Playwright BDD",
        eyebrow: "PROYECTO 02 · BDD Y AUTOMATIZACIÓN WEB",
        summary: "Suite en TypeScript con Cucumber y Playwright. Escenarios Gherkin legibles se ejecutan en el navegador y generan informes y evidencias.",
        tags: ["TypeScript", "Playwright", "Cucumber BDD", "Page Objects", "GitHub Actions"],
        videoTitle: "Recorrido del escenario BDD",
        videoNote: "La prueba se ejecutó y aprobó. Como la grabación original del navegador quedó en blanco, el vídeo usa capturas reales de la página pública para ilustrar los pasos.",
        flow: [
          "Un escenario Gherkin describe el comportamiento esperado de la página de registro.",
          "Los step definitions conectan cada paso con acciones reutilizables de Page Objects.",
          "Playwright abre el entorno de pruebas y verifica campos, consentimiento y estado inicial del botón.",
          "El runner crea un informe y evidencias sin enviar el formulario de registro."
        ],
        executionDescription: "Para repetir el smoke local, instala las dependencias y Chromium. El flujo público de registro no requiere credenciales.",
        commands: [
          { label: "Instalar dependencias", command: "npm ci" },
          { label: "Instalar el navegador", command: "npx playwright install chromium" },
          { label: "Verificar tipos y ejecutar smoke", command: "npm run typecheck\nnpm run bdd:smoke" }
        ],
        safetyNote: "El smoke validado solo abre las páginas públicas de inicio de sesión y registro; no autentica ni crea cuentas. Los escenarios protegidos requieren una cuenta autorizada y secrets en CI.",
        ci: {
          description: "El workflow Testes BDD se ejecuta automáticamente en pushes y pull requests a main. También admite ejecuciones manuales con una etiqueta Cucumber y publica la carpeta reports como artefacto.",
          video: "assets/videos/05-playwright-ci-cd.mp4",
          steps: [
            "Abre Actions en el repositorio y selecciona el workflow Testes BDD.",
            "Haz clic en Run workflow, elige una rama e indica una etiqueta como @smoke o @responsividade.",
            "El runner Ubuntu descarga el código, configura Node.js 20, ejecuta npm ci e instala los navegadores Playwright.",
            "La canalización verifica tipos. En push o pull request ejecuta bdd:smoke; manualmente usa la etiqueta elegida.",
            "Descarga el artefacto relatorios-bdd-* de la ejecución para consultar informes y evidencias."
          ],
          note: "Este vídeo muestra la ejecución real #4 de GitHub Actions en main, iniciada manualmente con @smoke y completada correctamente: typecheck aprobado, 2 escenarios y 6 pasos aprobados, y artefacto relatorios-bdd-4 publicado. El smoke usó solo páginas públicas, sin credenciales. Abre la ejecución real abajo; GitHub puede solicitar inicio de sesión."
        }
      },
      "cypress-e2e": {
        title: "Musi Cypress E2E",
        eyebrow: "PROYECTO 03 · PRUEBAS END-TO-END",
        summary: "Suite independiente en JavaScript y Cypress para verificar el registro, las reglas de contraseña, el consentimiento y la vista de inicio de sesión en varios tamaños.",
        tags: ["JavaScript", "Cypress", "Pruebas E2E", "Responsive", "GitHub Actions"],
        videoTitle: "Recorrido de registro y responsividad",
        videoNote: "Las pruebas se ejecutaron y aprobaron sin enviar el formulario. La grabación nativa quedó en blanco; capturas reales ilustran las comprobaciones responsive.",
        flow: [
          "Verifica los campos de registro, requisitos de contraseña y consentimiento.",
          "Completa datos sintéticos solo para validar el estado del formulario; no lo envía.",
          "Abre la página pública de inicio de sesión en móviles, tabletas y escritorio.",
          "Registra vídeos por especificación y publica evidencias mediante GitHub Actions."
        ],
        executionDescription: "Desde la carpeta del proyecto, instala las dependencias y ejecuta la suite smoke; no se necesita cuenta ni credenciales.",
        commands: [
          { label: "Instalar dependencias", command: "npm ci" },
          { label: "Ejecutar registro y responsividad", command: "npm run cy:run:smoke" },
          { label: "Ejecutar la suite completa", command: "npm run cy:run" }
        ],
        safetyNote: "Los datos son sintéticos y la prueba no envía el registro. Configura BASE_URL para usar un entorno autorizado."
      },
      "robot-http-smoke": {
        title: "Musi Robot HTTP Smoke",
        eyebrow: "PROYECTO 04 · PRUEBAS HTTP DE SOLO LECTURA",
        summary: "Comprobación ligera con Robot Framework y RequestsLibrary para verificar disponibilidad y contenido HTML de páginas públicas.",
        tags: ["Python", "Robot Framework", "RequestsLibrary", "HTTP", "Solo GET"],
        videoTitle: "Recorrido de las comprobaciones HTTP",
        videoNote: "Ejecución narrada de dos comprobaciones solo GET; no hay inicio de sesión, envío de formulario ni cambios de datos.",
        flow: [
          "Crea una sesión HTTP reutilizable para el entorno configurado.",
          "Envía GET /login y verifica estado, tipo de contenido y título.",
          "Envía GET /register y aplica las mismas comprobaciones a la página pública.",
          "Genera report.html, log.html y output.xml para revisar la ejecución."
        ],
        executionDescription: "Crea un entorno virtual Python, instala las dependencias fijadas del proyecto y ejecuta las pruebas desde la raíz.",
        commands: [
          { label: "Instalar dependencias", command: "python -m pip install -r requirements.txt" },
          { label: "Ejecutar las pruebas", command: "robot --outputdir robot-results tests" }
        ],
        safetyNote: "La suite solo envía solicitudes GET a páginas públicas. No envía credenciales, no crea cuentas y no modifica datos."
      }
    }
  }
};

const projectId = new URLSearchParams(window.location.search).get("id");
const projectVideos = {
  "qa-copilot": {
    src: "assets/videos/01-qa-copilot.mp4",
    poster: "assets/video-posters/01-qa-copilot.jpg"
  },
  "playwright-bdd": {
    src: "assets/videos/02-playwright-bdd.mp4",
    poster: "assets/video-posters/02-playwright-bdd.jpg"
  },
  "cypress-e2e": {
    src: "assets/videos/03-cypress-e2e.mp4",
    poster: "assets/video-posters/03-cypress-e2e.jpg"
  },
  "robot-http-smoke": {
    src: "assets/videos/04-robot-http-smoke.mp4",
    poster: "assets/video-posters/04-robot-http-smoke.jpg"
  }
};
const ciVideoPoster = "assets/video-posters/05-playwright-ci-cd.jpg";
const projectHeading = document.querySelector(".project-detail-heading");
const notFound = document.createElement("p");
notFound.className = "project-detail-error";

function setText(key, value) {
  const element = document.querySelector(`[data-copy="${key}"]`);
  if (element) element.textContent = value;
}

function renderList(element, items) {
  element.replaceChildren(...items.map((text, index) => {
    const item = document.createElement("li");
    const number = document.createElement("span");
    const copy = document.createElement("span");
    number.className = "project-detail-step-number";
    number.textContent = String(index + 1).padStart(2, "0");
    copy.textContent = text;
    item.append(number, copy);
    return item;
  }));
}

function renderCommands(element, commands) {
  element.replaceChildren(...commands.map(({ label, command }) => {
    const item = document.createElement("div");
    const heading = document.createElement("p");
    const code = document.createElement("pre");
    heading.textContent = label;
    code.textContent = command;
    item.append(heading, code);
    return item;
  }));
}

function renderProject(language) {
  const copy = projectCopy[language] || projectCopy.pt;
  const project = copy.projects[projectId];

  if (!project) {
    document.title = copy.notFoundTitle;
    projectHeading.replaceChildren();
    const title = document.createElement("h1");
    title.textContent = copy.notFoundTitle;
    notFound.textContent = copy.notFoundDescription;
    projectHeading.append(title, notFound);
    document.querySelector(".project-detail-video").hidden = true;
    document.querySelector(".project-detail-grid").hidden = true;
    document.querySelector("[data-ci-section]").hidden = true;
    document.querySelector(".project-contact-panel").hidden = true;
    return;
  }

  document.title = `${project.title} — ${copy.pageTitle}`;
  document.querySelector('meta[name="description"]').content = project.summary;
  for (const [key, value] of Object.entries({
    backToProjects: copy.backToProjects,
    eyebrow: project.eyebrow,
    title: project.title,
    summary: project.summary,
    videoEyebrow: copy.videoEyebrow,
    videoTitle: project.videoTitle,
    videoBadge: copy.videoBadge,
    videoNote: project.videoNote,
    flowEyebrow: copy.flowEyebrow,
    flowTitle: copy.flowTitle,
    executionEyebrow: copy.executionEyebrow,
    executionTitle: copy.executionTitle,
    executionDescription: project.executionDescription,
    safetyNote: project.safetyNote,
    accessNote: copy.accessNote,
    contactLink: copy.contactLink
  })) {
    setText(key, value);
  }

  const tags = document.querySelector('[data-copy-list="tags"]');
  tags.setAttribute("aria-label", copy.tagsLabel);
  tags.replaceChildren(...project.tags.map((tag) => {
    const item = document.createElement("span");
    item.textContent = tag;
    return item;
  }));

  renderList(document.querySelector('[data-copy-list="flow"]'), project.flow);
  renderCommands(document.querySelector('[data-copy-commands="commands"]'), project.commands);

  const mainVideo = document.querySelector("[data-main-video]");
  mainVideo.poster = projectVideos[projectId].poster;
  mainVideo.querySelector("source").src = projectVideos[projectId].src;
  mainVideo.load();

  const ciSection = document.querySelector("[data-ci-section]");
  ciSection.hidden = !project.ci;
  if (project.ci) {
    for (const [key, value] of Object.entries({
      ciEyebrow: copy.ciEyebrow,
      ciTitle: copy.ciTitle,
      ciBadge: copy.ciBadge,
      ciRunLink: copy.ciRunLink,
      ciDescription: project.ci.description,
      ciNote: project.ci.note
    })) {
      setText(key, value);
    }
    const ciVideo = document.querySelector("[data-ci-video]");
    ciVideo.poster = ciVideoPoster;
    ciVideo.querySelector("source").src = project.ci.video;
    ciVideo.load();
    renderList(document.querySelector('[data-copy-list="ciSteps"]'), project.ci.steps);
  }
}

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => renderProject(button.dataset.language));
});

renderProject(localStorage.getItem("portfolio-language") || "pt");
