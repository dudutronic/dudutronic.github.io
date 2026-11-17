# Portfólio — Eduardo Souza

Site pessoal estático em HTML, CSS e JavaScript, sem dependências de build. A
home prioriza o resumo profissional, a experiência corporativa, as competências
técnicas e, em seguida, os projetos pessoais de QA e automação. A interface
pode ser alternada entre português, inglês e espanhol. A página `resume.html`
apresenta o currículo completo, acompanha o idioma selecionado e permite
imprimir ou salvar uma cópia em PDF.

## QA Copilot Skill — PoC offline

A PoC em Python demonstra rascunhos BDD/Gherkin, troubleshooting heurístico de
logs e geração de payloads sintéticos por contrato JSON. Não usa LLM, serviços
externos ou dependências Python de terceiros. O guia, os exemplos e os testes
estão em [`qa-copilot-skill/`](./qa-copilot-skill/README.md).

```powershell
Set-Location .\qa-copilot-skill
python -m qa_copilot_skill.cli demo
python -m unittest discover -s tests -v
```

## Projetos pessoais complementares

Cada cartão abre uma página com explicação do fluxo, comandos de execução e
vídeo narrado. O vídeo do QA Copilot executa os comandos do CLI e mostra as
saídas reais do terminal. O vídeo CI/CD registra o run real #4 do GitHub Actions
na branch `main`: typecheck aprovado, 2 cenários e 6 steps aprovados e artefato
`relatorios-bdd-4` publicado. As demonstrações de navegador Playwright e
Cypress usam capturas reais da página quando a gravação nativa não captura a
interface.

Os repositórios, as execuções da CI e os artefatos brutos permanecem privados.
O site não concede acesso de leitura aos repositórios: no GitHub, esse nível de
permissão também permite clonar o código. É possível solicitar uma demonstração
guiada sem acesso ao código-fonte. Nenhuma credencial é exibida.

Para solicitar uma demonstração guiada, entre em contato por
<mailto:dudutronic@gmail.com>.

**Idiomas desta página:** [Português](README.md) · [English](README.en.md) · [Español](README.es.md)

## Publicação no GitHub Pages

Este site está preparado para o repositório `dudutronic.github.io`.

1. Envie o conteúdo desta pasta para a raiz da branch `main` desse repositório.
2. Em **Settings → Pages**, selecione **GitHub Actions** como fonte de publicação.
3. O workflow em `.github/workflows/pages.yml` publica o site após cada push.

Quando o deploy terminar, o site estará disponível em <https://dudutronic.github.io>.

Os recursos visuais, a mascote e os adesivos de quadrinhos/mangá são ilustrações
originais em estilo arcade/ficção científica, sem personagens, logos ou frases
de franquias existentes.

Contato profissional: [LinkedIn](https://www.linkedin.com/in/eduardo-henrique-nilo-de-souza/) · [E-mail](mailto:dudutronic@gmail.com)
