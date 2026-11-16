const translations = {
  pt: {
    lang: "pt-BR",
    title: "Eduardo Souza — QA & Automação",
    description: "Portfólio de Eduardo Souza: qualidade de software, automação de testes e desenvolvimento de soluções confiáveis.",
    skip: "Pular para o conteúdo",
    homeLabel: "Eduardo Souza, início",
    navLabel: "Navegação principal",
    navAbout: "Sobre",
    navSkills: "Competências",
    navProjects: "Projetos",
    navContact: "Vamos conversar",
    languageLabel: "Selecionar idioma",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    heroEyebrow: "QA · AUTOMAÇÃO · QUALIDADE",
    heroTitle: "Software melhor<br>começa com <span>bons testes.</span>",
    heroDescription: "Sou Eduardo, profissional de QA focado em automação E2E, testes funcionais e qualidade integrada ao ciclo de desenvolvimento.",
    heroWork: "Conheça meu trabalho",
    terminalLabel: "Exemplo de cenário de teste automatizado",
    terminalFeature: "Login seguro",
    terminalScenario: "Acessar minha conta",
    terminalGiven: "que tenho credenciais válidas",
    terminalWhen: "envio o formulário de login",
    terminalThen: "acesso minha área segura",
    terminalResult: "Cenário validado",
    scrollHint: "DESÇA PARA EXPLORAR",
    aboutLabel: "SOBRE MIM",
    aboutTitle: "Qualidade não é uma etapa.<br>É parte de <span>cada decisão.</span>",
    aboutDescription: "Gosto de entender como as pessoas usam um produto e traduzir isso em validações que fazem sentido. Trabalho com automação orientada a comportamento para tornar os fluxos mais fáceis de entender, manter e evoluir.",
    skillsLabel: "Tecnologias e práticas",
    skillsLabelTitle: "COMPETÊNCIAS EM PRÁTICA",
    skillsTitle: "QA de ponta a ponta",
    skillsIntro: "Mais que ferramentas: qualidade<br>aplicada ao produto e ao time.",
    skill1Index: "01 / E2E",
    skill1Title: "Automação de fluxos",
    skill1Description: "Login, cadastro e jornadas reais validados de ponta a ponta.",
    skill2Index: "02 / BDD",
    skill2Title: "Cenários legíveis",
    skill2Description: "Gherkin aproxima regras de negócio, QA e desenvolvimento.",
    skill3Index: "03 / UI",
    skill3Title: "Testes funcionais",
    skill3Description: "Campos, validações, estados, navegação e feedback da interface.",
    skill4Index: "04 / COMPATIBILIDADE",
    skill4Title: "Browsers & telas",
    skill4Description: "Playwright com Chromium, Firefox e WebKit; Cypress em telas mobile, tablet e desktop.",
    skill5Index: "05 / CI",
    skill5Title: "Qualidade contínua",
    skill5Description: "GitHub Actions executa verificações a cada push e pull request.",
    skill6Index: "06 / EVIDÊNCIAS",
    skill6Title: "Falhas investigáveis",
    skill6Description: "Relatórios, screenshots, vídeos e artefatos ajudam a entender resultados.",
    skill7Index: "07 / BACK-END HTTP",
    skill7Title: "Validação de serviços",
    skill7Description: "Requests de leitura verificam status, tipo de conteúdo e resposta das rotas públicas.",
    skill8Index: "08 / KEYWORD-DRIVEN",
    skill8Title: "Robot Framework",
    skill8Description: "Keywords reutilizáveis e RequestsLibrary organizados em resources no padrão Page Object.",
    projectsLabel: "TRABALHO EM DESTAQUE",
    projectsTitle: "Projetos",
    projectsIntro: "Frameworks distintos.<br>Configuração real e execução contínua.",
    personalRepo: "↗ PESSOAL",
    playwrightCategory: "AUTOMAÇÃO DE TESTES · PROJETO EM DESTAQUE",
    playwrightDescription: "Uma suíte de testes end-to-end que combina Playwright, TypeScript e Cucumber para validar fluxos com cenários legíveis, relatórios com evidências e execução automatizada no GitHub Actions.",
    playwrightConfigTitle: "COMO O PLAYWRIGHT FOI CONFIGURADO",
    playwrightConfig1: "<strong>TypeScript + Page Objects:</strong> ações e seletores organizados por página.",
    playwrightConfig2: "<strong>Cucumber BDD:</strong> perfis smoke e regressão; execução por tags.",
    playwrightConfig3: "<strong>Execução isolada:</strong> contexto novo por cenário, navegador selecionável e evidências de tela/vídeo.",
    playwrightConfig4: "<strong>GitHub Actions:</strong> Node 20, verificação de tipos, smoke e relatórios como artefatos.",
    playwrightConfig5: "<strong>Relatórios:</strong> resumo JSON, relatório HTML por execução e evidências de tela/vídeo.",
    actionsLink: "Ver execuções da esteira",
    playwrightRepoLink: "Explorar repositório",
    playwrightStatsLabel: "O PROJETO EM NÚMEROS",
    playwrightStat1: "arquivos de<br>especificação BDD",
    playwrightStat2: "cenários<br>BDD",
    playwrightStat3: "browsers<br>suportados",
    cypressCategory: "AUTOMAÇÃO DE TESTES · CYPRESS",
    cypressDescription: "Uma segunda suíte, independente da implementação com Playwright, que usa Cypress para testar os formulários de cadastro e login da Musi e conferir o comportamento responsivo em diferentes telas.",
    cypressConfigTitle: "COMO O CYPRESS FOI CONFIGURADO",
    cypressConfig1: "<strong>Configuração central:</strong> URL do ambiente por variável, viewport padrão e timeout definido.",
    cypressConfig2: "<strong>Execução estável:</strong> nova tentativa em CI e limpeza de cookies/storage entre testes.",
    cypressConfig3: "<strong>Responsividade:</strong> validação de overflow e campos em mobile, tablet e desktop.",
    cypressConfig4: "<strong>GitHub Actions:</strong> Cypress em push, pull request e execução manual; vídeos e screenshots arquivados.",
    cypressConfig5: "<strong>Relatórios:</strong> vídeos por spec e screenshots em falhas; sem reporter HTML configurado.",
    cypressRepoLink: "Explorar repositório Cypress",
    cypressStatsLabel: "COBERTURA DA SUÍTE",
    cypressStat1: "validações<br>de cadastro",
    cypressStat2: "cenários<br>de login",
    cypressStat3: "tamanhos<br>de tela",
    robotCategory: "BACK-END HTTP · ROBOT FRAMEWORK",
    robotDescription: "Uma terceira suíte que valida, por HTTP e sem alterar dados, a disponibilidade e o conteúdo das rotas públicas de login e cadastro. Complementa os testes de interface com uma checagem direta das respostas do servidor.",
    robotConfigTitle: "COMO O ROBOT FRAMEWORK FOI CONFIGURADO",
    robotConfig1: "<strong>Page Object para HTTP:</strong> um resource reutilizável encapsula sessão, rotas e validações.",
    robotConfig2: "<strong>RequestsLibrary:</strong> confere status HTTP, tipo HTML e título esperado das páginas públicas.",
    robotConfig3: "<strong>Execução segura:</strong> somente GET em /login e /register; sem login, POST ou criação de dados.",
    robotConfig4: "<strong>GitHub Actions:</strong> Python 3.13, dependências fixadas e relatórios Robot publicados como artefatos.",
    robotConfig5: "<strong>Relatórios:</strong> report.html, log.html e output.xml em robot-results/.",
    robotRepoLink: "Explorar projeto Robot Framework",
    robotStatsLabel: "SMOKE HTTP SOMENTE LEITURA",
    robotStat1: "rotas<br>públicas",
    robotStat2: "testes<br>automatizados",
    robotStat3: "alterações<br>de dados",
    projectNote: "As três suítes têm execução própria. O Robot valida páginas HTML públicas por GET; nenhum contrato de API JSON é presumido.",
    contactLabel: "CONTATO",
    contactEyebrow: "TEM UM PROJETO EM MENTE?",
    contactTitle: "Vamos fazer algo<br><span>bem feito.</span>",
    contactLink: "Encontre-me no GitHub",
    footerNote: "Feito com cuidado e bons testes."
  },
  en: {
    lang: "en",
    title: "Eduardo Souza — QA & Test Automation",
    description: "Eduardo Souza's portfolio: software quality, test automation and reliable solutions.",
    skip: "Skip to content",
    homeLabel: "Eduardo Souza, home",
    navLabel: "Main navigation",
    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    navContact: "Let's talk",
    languageLabel: "Select language",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    heroEyebrow: "QA · AUTOMATION · QUALITY",
    heroTitle: "Better software<br>starts with <span>better tests.</span>",
    heroDescription: "I'm Eduardo, a QA professional focused on E2E automation, functional testing and quality integrated into the development lifecycle.",
    heroWork: "Explore my work",
    terminalLabel: "Automated test scenario example",
    terminalFeature: "Secure login",
    terminalScenario: "Access my account",
    terminalGiven: "I have valid credentials",
    terminalWhen: "I submit the login form",
    terminalThen: "I access my secure area",
    terminalResult: "Scenario passed",
    scrollHint: "SCROLL TO EXPLORE",
    aboutLabel: "ABOUT ME",
    aboutTitle: "Quality isn't a phase.<br>It's part of <span>every decision.</span>",
    aboutDescription: "I enjoy understanding how people use a product and translating that into meaningful checks. I build behavior-driven automation that makes user flows easier to understand, maintain and evolve.",
    skillsLabel: "Technologies and practices",
    skillsLabelTitle: "SKILLS IN PRACTICE",
    skillsTitle: "End-to-end QA",
    skillsIntro: "More than tools: quality<br>built into the product and team.",
    skill1Index: "01 / E2E",
    skill1Title: "Journey automation",
    skill1Description: "End-to-end checks for login, registration and real user journeys.",
    skill2Index: "02 / BDD",
    skill2Title: "Readable scenarios",
    skill2Description: "Gherkin brings business rules, QA and engineering closer together.",
    skill3Index: "03 / UI",
    skill3Title: "Functional testing",
    skill3Description: "Form fields, validation, states, navigation and interface feedback.",
    skill4Index: "04 / COMPATIBILITY",
    skill4Title: "Browsers & screens",
    skill4Description: "Playwright with Chromium, Firefox and WebKit; Cypress across mobile, tablet and desktop.",
    skill5Index: "05 / CI",
    skill5Title: "Continuous quality",
    skill5Description: "GitHub Actions runs checks on every push and pull request.",
    skill6Index: "06 / EVIDENCE",
    skill6Title: "Debuggable failures",
    skill6Description: "Reports, screenshots, videos and artifacts help explain results.",
    skill7Index: "07 / HTTP BACK END",
    skill7Title: "Service validation",
    skill7Description: "Read-only requests check status, content type and public route responses.",
    skill8Index: "08 / KEYWORD-DRIVEN",
    skill8Title: "Robot Framework",
    skill8Description: "Reusable keywords and RequestsLibrary resources organized with a Page Object pattern.",
    projectsLabel: "FEATURED WORK",
    projectsTitle: "Projects",
    projectsIntro: "Different frameworks.<br>Real configuration and continuous runs.",
    personalRepo: "↗ PERSONAL",
    playwrightCategory: "TEST AUTOMATION · FEATURED PROJECT",
    playwrightDescription: "An end-to-end test suite combining Playwright, TypeScript and Cucumber to validate user flows with readable scenarios, evidence-rich reports and automated GitHub Actions runs.",
    playwrightConfigTitle: "HOW PLAYWRIGHT IS CONFIGURED",
    playwrightConfig1: "<strong>TypeScript + Page Objects:</strong> page actions and selectors are organized by page.",
    playwrightConfig2: "<strong>Cucumber BDD:</strong> smoke and regression profiles, selected by tags.",
    playwrightConfig3: "<strong>Isolated runs:</strong> a fresh context per scenario, selectable browsers, screenshots and video evidence.",
    playwrightConfig4: "<strong>GitHub Actions:</strong> Node 20, type checks, smoke tests and reports uploaded as artifacts.",
    playwrightConfig5: "<strong>Reports:</strong> JSON summary, per-run HTML report and screenshot/video evidence.",
    actionsLink: "View workflow runs",
    playwrightRepoLink: "Explore repository",
    playwrightStatsLabel: "PROJECT BY THE NUMBERS",
    playwrightStat1: "BDD specification<br>files",
    playwrightStat2: "BDD<br>scenarios",
    playwrightStat3: "supported<br>browsers",
    cypressCategory: "TEST AUTOMATION · CYPRESS",
    cypressDescription: "A second, independent suite using Cypress to test Musi registration and login forms and check responsive behavior across screen sizes.",
    cypressConfigTitle: "HOW CYPRESS IS CONFIGURED",
    cypressConfig1: "<strong>Central configuration:</strong> environment URL via variable, default viewport and timeout.",
    cypressConfig2: "<strong>Reliable runs:</strong> CI retries and cookie/storage cleanup between tests.",
    cypressConfig3: "<strong>Responsive checks:</strong> overflow and form fields on mobile, tablet and desktop.",
    cypressConfig4: "<strong>GitHub Actions:</strong> runs on push, pull request and manual dispatch; videos and screenshots are archived.",
    cypressConfig5: "<strong>Reports:</strong> videos per spec and failure screenshots; no HTML reporter is configured.",
    cypressRepoLink: "Explore Cypress repository",
    cypressStatsLabel: "SUITE COVERAGE",
    cypressStat1: "registration<br>checks",
    cypressStat2: "login<br>scenarios",
    cypressStat3: "screen<br>sizes",
    robotCategory: "HTTP BACK END · ROBOT FRAMEWORK",
    robotDescription: "A third suite checks public login and registration routes over HTTP without changing data. It complements UI testing with direct checks of server responses.",
    robotConfigTitle: "HOW ROBOT FRAMEWORK IS CONFIGURED",
    robotConfig1: "<strong>HTTP Page Object:</strong> a reusable resource encapsulates sessions, routes and assertions.",
    robotConfig2: "<strong>RequestsLibrary:</strong> checks HTTP status, HTML content type and expected public-page title.",
    robotConfig3: "<strong>Safe execution:</strong> GET requests only to /login and /register; no login, POST or data creation.",
    robotConfig4: "<strong>GitHub Actions:</strong> Python 3.13, pinned dependencies and Robot reports uploaded as artifacts.",
    robotConfig5: "<strong>Reports:</strong> report.html, log.html and output.xml in robot-results/.",
    robotRepoLink: "Explore Robot Framework project",
    robotStatsLabel: "READ-ONLY HTTP SMOKE",
    robotStat1: "public<br>routes",
    robotStat2: "automated<br>tests",
    robotStat3: "data<br>changes",
    projectNote: "Each suite runs independently. Robot checks public HTML pages using GET; no JSON API contract is assumed.",
    contactLabel: "CONTACT",
    contactEyebrow: "HAVE A PROJECT IN MIND?",
    contactTitle: "Let's build something<br><span>great.</span>",
    contactLink: "Find me on GitHub",
    footerNote: "Built with care and good tests."
  },
  es: {
    lang: "es",
    title: "Eduardo Souza — QA y Automatización",
    description: "Portafolio de Eduardo Souza: calidad de software, automatización de pruebas y soluciones confiables.",
    skip: "Saltar al contenido",
    homeLabel: "Eduardo Souza, inicio",
    navLabel: "Navegación principal",
    navAbout: "Sobre mí",
    navSkills: "Competencias",
    navProjects: "Proyectos",
    navContact: "Hablemos",
    languageLabel: "Seleccionar idioma",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    heroEyebrow: "QA · AUTOMATIZACIÓN · CALIDAD",
    heroTitle: "Mejor software<br>empieza con <span>mejores pruebas.</span>",
    heroDescription: "Soy Eduardo, profesional de QA enfocado en automatización E2E, pruebas funcionales y calidad integrada en el ciclo de desarrollo.",
    heroWork: "Conoce mi trabajo",
    terminalLabel: "Ejemplo de escenario de prueba automatizada",
    terminalFeature: "Inicio de sesión seguro",
    terminalScenario: "Acceder a mi cuenta",
    terminalGiven: "que tengo credenciales válidas",
    terminalWhen: "envío el formulario de acceso",
    terminalThen: "accedo a mi área segura",
    terminalResult: "Escenario aprobado",
    scrollHint: "DESPLÁZATE PARA EXPLORAR",
    aboutLabel: "SOBRE MÍ",
    aboutTitle: "La calidad no es una etapa.<br>Es parte de <span>cada decisión.</span>",
    aboutDescription: "Me gusta entender cómo las personas usan un producto y convertirlo en validaciones útiles. Creo automatización basada en el comportamiento para que los flujos sean más fáciles de entender, mantener y mejorar.",
    skillsLabel: "Tecnologías y prácticas",
    skillsLabelTitle: "COMPETENCIAS EN PRÁCTICA",
    skillsTitle: "QA de principio a fin",
    skillsIntro: "Más que herramientas: calidad<br>aplicada al producto y al equipo.",
    skill1Index: "01 / E2E",
    skill1Title: "Automatización de flujos",
    skill1Description: "Validación integral de acceso, registro y recorridos reales.",
    skill2Index: "02 / BDD",
    skill2Title: "Escenarios legibles",
    skill2Description: "Gherkin acerca las reglas de negocio, QA y desarrollo.",
    skill3Index: "03 / UI",
    skill3Title: "Pruebas funcionales",
    skill3Description: "Campos, validaciones, estados, navegación y respuestas de interfaz.",
    skill4Index: "04 / COMPATIBILIDAD",
    skill4Title: "Navegadores y pantallas",
    skill4Description: "Playwright con Chromium, Firefox y WebKit; Cypress en móvil, tableta y escritorio.",
    skill5Index: "05 / CI",
    skill5Title: "Calidad continua",
    skill5Description: "GitHub Actions ejecuta verificaciones en cada push y pull request.",
    skill6Index: "06 / EVIDENCIAS",
    skill6Title: "Fallos investigables",
    skill6Description: "Informes, capturas, vídeos y artefactos ayudan a entender los resultados.",
    skill7Index: "07 / BACK-END HTTP",
    skill7Title: "Validación de servicios",
    skill7Description: "Solicitudes de solo lectura verifican estado, tipo de contenido y respuestas públicas.",
    skill8Index: "08 / KEYWORD-DRIVEN",
    skill8Title: "Robot Framework",
    skill8Description: "Keywords reutilizables y recursos de RequestsLibrary con patrón Page Object.",
    projectsLabel: "TRABAJO DESTACADO",
    projectsTitle: "Proyectos",
    projectsIntro: "Distintos frameworks.<br>Configuración real y ejecución continua.",
    personalRepo: "↗ PERSONAL",
    playwrightCategory: "AUTOMATIZACIÓN DE PRUEBAS · PROYECTO DESTACADO",
    playwrightDescription: "Suite end-to-end que combina Playwright, TypeScript y Cucumber para validar flujos con escenarios legibles, informes con evidencias y ejecución automatizada en GitHub Actions.",
    playwrightConfigTitle: "CÓMO SE CONFIGURÓ PLAYWRIGHT",
    playwrightConfig1: "<strong>TypeScript + Page Objects:</strong> acciones y selectores organizados por página.",
    playwrightConfig2: "<strong>Cucumber BDD:</strong> perfiles smoke y regresión, seleccionados por tags.",
    playwrightConfig3: "<strong>Ejecución aislada:</strong> contexto nuevo por escenario, navegador seleccionable y evidencias de pantalla/vídeo.",
    playwrightConfig4: "<strong>GitHub Actions:</strong> Node 20, comprobación de tipos, smoke e informes como artefactos.",
    playwrightConfig5: "<strong>Informes:</strong> resumen JSON, informe HTML por ejecución y evidencias de pantalla/vídeo.",
    actionsLink: "Ver ejecuciones del workflow",
    playwrightRepoLink: "Explorar repositorio",
    playwrightStatsLabel: "EL PROYECTO EN CIFRAS",
    playwrightStat1: "archivos de<br>especificación BDD",
    playwrightStat2: "escenarios<br>BDD",
    playwrightStat3: "navegadores<br>compatibles",
    cypressCategory: "AUTOMATIZACIÓN DE PRUEBAS · CYPRESS",
    cypressDescription: "Una segunda suite independiente que utiliza Cypress para probar los formularios de registro e inicio de sesión de Musi y verificar la adaptación a distintos tamaños de pantalla.",
    cypressConfigTitle: "CÓMO SE CONFIGURÓ CYPRESS",
    cypressConfig1: "<strong>Configuración central:</strong> URL del entorno por variable, viewport predeterminado y timeout definido.",
    cypressConfig2: "<strong>Ejecución estable:</strong> reintentos en CI y limpieza de cookies/almacenamiento entre pruebas.",
    cypressConfig3: "<strong>Diseño responsivo:</strong> verificación de desbordamiento y campos en móvil, tableta y escritorio.",
    cypressConfig4: "<strong>GitHub Actions:</strong> ejecución en push, pull request y manual; vídeos y capturas archivados.",
    cypressConfig5: "<strong>Informes:</strong> vídeos por especificación y capturas de fallos; no hay reporter HTML configurado.",
    cypressRepoLink: "Explorar repositorio Cypress",
    cypressStatsLabel: "COBERTURA DE LA SUITE",
    cypressStat1: "validaciones<br>de registro",
    cypressStat2: "escenarios<br>de acceso",
    cypressStat3: "tamaños<br>de pantalla",
    robotCategory: "BACK-END HTTP · ROBOT FRAMEWORK",
    robotDescription: "Una tercera suite verifica por HTTP la disponibilidad y el contenido de las rutas públicas de acceso y registro, sin modificar datos. Complementa las pruebas de interfaz con comprobaciones directas de las respuestas del servidor.",
    robotConfigTitle: "CÓMO SE CONFIGURÓ ROBOT FRAMEWORK",
    robotConfig1: "<strong>Page Object HTTP:</strong> un resource reutilizable encapsula sesión, rutas y validaciones.",
    robotConfig2: "<strong>RequestsLibrary:</strong> verifica estado HTTP, tipo HTML y título esperado de las páginas públicas.",
    robotConfig3: "<strong>Ejecución segura:</strong> solo GET en /login y /register; sin acceso, POST ni creación de datos.",
    robotConfig4: "<strong>GitHub Actions:</strong> Python 3.13, dependencias fijadas e informes Robot como artefactos.",
    robotConfig5: "<strong>Informes:</strong> report.html, log.html y output.xml en robot-results/.",
    robotRepoLink: "Explorar proyecto Robot Framework",
    robotStatsLabel: "SMOKE HTTP DE SOLO LECTURA",
    robotStat1: "rutas<br>públicas",
    robotStat2: "pruebas<br>automatizadas",
    robotStat3: "cambios<br>de datos",
    projectNote: "Las tres suites se ejecutan por separado. Robot valida páginas HTML públicas mediante GET; no se presupone ningún contrato de API JSON.",
    contactLabel: "CONTACTO",
    contactEyebrow: "¿TIENES UN PROYECTO EN MENTE?",
    contactTitle: "Hagamos algo<br><span>bien hecho.</span>",
    contactLink: "Encuéntrame en GitHub",
    footerNote: "Hecho con cuidado y buenas pruebas."
  }
};

const menuButton = document.querySelector(".menu-toggle");
const navigationLinks = document.querySelector(".navigation-links");

function setLanguage(language) {
  const selected = translations[language] ? language : "pt";
  const copy = translations[selected];

  document.documentElement.lang = copy.lang;
  document.title = copy.title;
  document.querySelector('meta[name="description"]').content = copy.description;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = copy[element.dataset.i18n];
    if (value !== undefined) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const value = copy[element.dataset.i18nHtml];
    if (value !== undefined) element.innerHTML = value;
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const value = copy[element.dataset.i18nAria];
    if (value !== undefined) element.setAttribute("aria-label", value);
  });

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === selected));
  });

  if (menuButton) {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-label", isExpanded ? copy.closeMenu : copy.openMenu);
  }

  localStorage.setItem("portfolio-language", selected);
}

if (menuButton && navigationLinks) {
  menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    const language = document.documentElement.lang.slice(0, 2);
    menuButton.setAttribute("aria-expanded", String(!isExpanded));
    menuButton.setAttribute("aria-label", isExpanded ? translations[language].openMenu : translations[language].closeMenu);
    navigationLinks.classList.toggle("is-open", !isExpanded);
  });

  navigationLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      const language = document.documentElement.lang.slice(0, 2);
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", translations[language].openMenu);
      navigationLinks.classList.remove("is-open");
    }
  });
}

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.language);
    if (menuButton && navigationLinks && window.matchMedia("(max-width: 560px)").matches) {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", translations[button.dataset.language].openMenu);
      navigationLinks.classList.remove("is-open");
    }
  });
});

const savedLanguage = localStorage.getItem("portfolio-language");
setLanguage(savedLanguage && translations[savedLanguage] ? savedLanguage : "pt");

const yearElement = document.querySelector("#current-year");
if (yearElement) yearElement.textContent = String(new Date().getFullYear());
