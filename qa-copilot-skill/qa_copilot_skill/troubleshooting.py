"""Local, signature-based analysis for common automation log failures."""

from __future__ import annotations

from dataclasses import dataclass
import re


_MAX_LOG_LENGTH = 20_000


@dataclass(frozen=True)
class LogAnalysis:
    framework: str
    symptom: str
    likely_cause: str
    suggestions: tuple[str, ...]


_SIGNATURES: tuple[
    tuple[re.Pattern[str], str, str, tuple[str, ...]], ...
] = (
    (
        re.compile(
            r"SessionNotCreatedException|Could not start a new session|"
            r"failed to create session|WebDriverAgent|uiautomator",
            re.IGNORECASE,
        ),
        "Falha ao criar uma sessão de automação.",
        "Driver, capabilities, versão do dispositivo ou serviço de automação incompatível.",
        (
            "Revise capabilities como appium:automationName e compare as versões do driver e do sistema operacional.",
            "Revise capabilities, disponibilidade do device farm e inicialização do Appium.",
        ),
    ),
    (
        re.compile(
            r"NoSuchElementException|ElementNotFound|"
            r"Timed out retrying.*(?:find|element)|"
            r"Expected to find element",
            re.IGNORECASE,
        ),
        "O elemento esperado não foi localizado no tempo disponível.",
        "Seletor desatualizado, elemento ainda não renderizado ou estado da tela diferente do esperado.",
        (
            "Confirme o seletor e o estado atual da página antes da interação.",
            "Prefira esperas condicionais a pausas fixas e valide o ambiente de teste.",
            "Exemplo Cypress: cy.get('[data-test=\"confirm\"]', { timeout: 10000 }).should('be.visible').",
        ),
    ),
    (
        re.compile(r"No keyword with name|Keyword .* not found", re.IGNORECASE),
        "Uma keyword do Robot Framework não foi encontrada.",
        "Nome incorreto, resource não importado ou biblioteca ausente na configuração.",
        (
            "Confira o nome e a capitalização da keyword no arquivo de resource.",
            "Se for uma keyword customizada, confira o import: Resource    resources/common.resource.",
            "Verifique instalação de bibliotecas e caminhos do suite.",
        ),
    ),
    (
        re.compile(
            r"ECONNREFUSED|ERR_CONNECTION_REFUSED|connection refused|"
            r"Failed to connect",
            re.IGNORECASE,
        ),
        "A conexão com o serviço de teste foi recusada.",
        "Serviço indisponível, URL incorreta ou dependência ainda não pronta na CI.",
        (
            "Confirme a URL base e a inicialização do serviço antes dos testes.",
            "Revise health checks, dependências e configuração de rede do job.",
        ),
    ),
    (
        re.compile(
            r"AssertionError|Assertion Failed|Expected .* to (?:equal|be|include)|"
            r"assert .*==",
            re.IGNORECASE,
        ),
        "Uma asserção recebeu um resultado diferente do esperado.",
        "Comportamento, massa de teste ou expectativa do teste divergente.",
        (
            "Compare valor esperado e recebido sem expor dados sensíveis no relatório.",
            "Confirme se a massa e os critérios de aceite ainda são válidos.",
        ),
    ),
    (
        re.compile(r"TimeoutError|TimeoutException|timed out|timeout", re.IGNORECASE),
        "Uma operação excedeu o tempo limite.",
        "Operação lenta, espera inadequada ou serviço dependente instável.",
        (
            "Identifique a etapa mais lenta e verifique a saúde das dependências.",
            "Ajuste o timeout somente após confirmar o tempo esperado do fluxo.",
        ),
    ),
)


def analyze_log(log_text: str) -> LogAnalysis:
    """Return a likely diagnosis without echoing or transmitting the source log."""
    if not isinstance(log_text, str) or not log_text.strip():
        raise ValueError("Informe o conteúdo de um log para análise.")
    if len(log_text) > _MAX_LOG_LENGTH:
        raise ValueError(f"O log deve ter no máximo {_MAX_LOG_LENGTH} caracteres.")

    framework = _identify_framework(log_text)
    for pattern, symptom, cause, suggestions in _SIGNATURES:
        if pattern.search(log_text):
            return LogAnalysis(framework, symptom, cause, suggestions)

    return LogAnalysis(
        framework=framework,
        symptom="Nenhuma assinatura conhecida foi identificada.",
        likely_cause="A causa não pode ser inferida com segurança por estas regras locais.",
        suggestions=(
            "Revise o primeiro erro e o contexto imediatamente anterior no log.",
            "Compare ambiente, massa e versões entre a execução local e a CI.",
        ),
    )


def _identify_framework(log_text: str) -> str:
    lowered = log_text.lower()
    if any(
        marker in lowered
        for marker in ("appium", "webdriveragent", "uiautomator", "xcuitest")
    ):
        return "Appium"
    if any(
        marker in lowered
        for marker in ("cypress", "timed out retrying", "cy.visit(", "cy.get(")
    ):
        return "Cypress"
    if any(
        marker in lowered
        for marker in ("robot framework", "robotframework", "no keyword with name")
    ):
        return "Robot Framework"
    return "Não identificado"
