"""Rule-based BDD and synthetic API payload generators."""

from __future__ import annotations

from dataclasses import dataclass
import random
import re
from typing import Any


_MAX_REQUIREMENT_LENGTH = 2_000
_USER_STORY = re.compile(
    r"^\s*Como\s+(?P<persona>.+?),\s*(?:eu\s+)?quero\s+"
    r"(?P<action>.+?)(?:\s+para\s+(?:que\s+)?(?P<benefit>.+))?[.!]?\s*$",
    re.IGNORECASE,
)


@dataclass(frozen=True)
class BddScenario:
    """A Portuguese Gherkin scenario draft."""

    title: str
    given: str
    when: str
    then: str
    requires_review: bool = False

    def to_gherkin(self) -> str:
        review_marker = " (revisar critérios)" if self.requires_review else ""
        return (
            f"Cenário: {self.title}{review_marker}\n"
            f"  Dado que {self.given}\n"
            f"  Quando {self.when}\n"
            f"  Então {self.then}"
        )


def generate_bdd_scenarios(requirement: str) -> list[BddScenario]:
    """Create one main-flow draft and two reviewable validation suggestions."""
    if not isinstance(requirement, str) or not requirement.strip():
        raise ValueError("Informe um requisito ou uma história de usuário.")
    if len(requirement) > _MAX_REQUIREMENT_LENGTH:
        raise ValueError(
            f"O requisito deve ter no máximo {_MAX_REQUIREMENT_LENGTH} caracteres."
        )

    text = requirement.strip()
    story = _USER_STORY.match(text)
    if story:
        persona = _clean_sentence(story.group("persona"))
        action = _clean_sentence(story.group("action"))
        benefit = story.group("benefit")
        benefit = _clean_sentence(benefit) if benefit else ""
        main_result = (
            f"o sistema atende ao objetivo informado: {benefit}"
            if benefit
            else "o resultado atende ao requisito informado"
        )
    else:
        persona = "usuário"
        action = f"executa a ação descrita no requisito: {_clean_sentence(text)}"
        main_result = "o resultado atende ao requisito informado"

    return [
        BddScenario(
            title="Fluxo principal",
            given=f"uma pessoa com perfil de {persona} acessa a funcionalidade do requisito",
            when=f"executa a ação descrita: {action}",
            then=main_result,
        ),
        BddScenario(
            title="Campo obrigatório ausente",
            given="os critérios de preenchimento da funcionalidade estão definidos",
            when="envia a solicitação sem um campo obrigatório",
            then="o sistema apresenta a validação prevista nos critérios de aceite",
            requires_review=True,
        ),
        BddScenario(
            title="Dados fora do formato esperado",
            given="as regras de validação da funcionalidade estão definidas",
            when="envia dados fora do formato aceito",
            then="o sistema trata a entrada conforme a regra acordada",
            requires_review=True,
        ),
    ]


def generate_payload(contract: dict[str, Any], seed: int = 42) -> dict[str, Any]:
    """Generate a deterministic synthetic object from a JSON-Schema subset."""
    if not isinstance(contract, dict) or contract.get("type") != "object":
        raise ValueError("O contrato deve ser um objeto JSON com type='object'.")
    if type(seed) is not int:
        raise ValueError("A seed precisa ser um número inteiro.")

    properties = contract.get("properties")
    if not isinstance(properties, dict):
        raise ValueError("O contrato precisa definir um objeto 'properties'.")

    rng = random.Random(seed)
    return {
        name: _generate_value(schema, rng, name, depth=0, seed=seed)
        for name, schema in properties.items()
    }


def _generate_value(
    schema: Any,
    rng: random.Random,
    path: str,
    depth: int,
    seed: int,
) -> Any:
    if not isinstance(schema, dict):
        raise ValueError(f"O contrato do campo '{path}' precisa ser um objeto.")
    if depth > 5:
        raise ValueError("O contrato excede o limite de cinco níveis de objetos.")

    enum_values = schema.get("enum")
    if enum_values is not None:
        if not isinstance(enum_values, list) or not enum_values:
            raise ValueError(f"O enum do campo '{path}' precisa ter opções.")
        if any(
            not _matches_type(value, schema.get("type"))
            for value in enum_values
            if schema.get("type") is not None
        ):
            raise ValueError(
                f"Uma opção enum não corresponde ao tipo do campo '{path}'."
            )
        return rng.choice(enum_values)

    if "example" in schema:
        example = schema["example"]
        if schema.get("type") and not _matches_type(example, schema["type"]):
            raise ValueError(f"O exemplo não corresponde ao tipo do campo '{path}'.")
        return example

    value_type = schema.get("type")
    if value_type == "string":
        return _string_value(schema, path, seed)
    if value_type == "integer":
        minimum = schema.get("minimum", 0)
        if type(minimum) is not int:
            raise ValueError(f"Limites inválidos para o campo inteiro '{path}'.")
        maximum = schema.get("maximum", minimum + 100)
        if type(maximum) is not int or maximum < minimum:
            raise ValueError(f"Limites inválidos para o campo inteiro '{path}'.")
        return rng.randint(minimum, maximum)
    if value_type == "number":
        minimum = schema.get("minimum", 0)
        if not isinstance(minimum, (int, float)) or isinstance(minimum, bool):
            raise ValueError(f"Limites inválidos para o campo numérico '{path}'.")
        maximum = schema.get("maximum", minimum + 100)
        if (
            not isinstance(maximum, (int, float))
            or isinstance(maximum, bool)
            or maximum < minimum
        ):
            raise ValueError(f"Limites inválidos para o campo numérico '{path}'.")
        return round(rng.uniform(minimum, maximum), 2)
    if value_type == "boolean":
        return bool(rng.getrandbits(1))
    if value_type == "array":
        items_schema = schema.get("items")
        minimum = schema.get("minItems", 1)
        if type(minimum) is not int or minimum < 0:
            raise ValueError(f"Limites inválidos para a lista '{path}'.")
        maximum = schema.get("maxItems", max(minimum, 2))
        if type(maximum) is not int or maximum < minimum or maximum > 10:
            raise ValueError(f"Limites inválidos para a lista '{path}'.")
        if not isinstance(items_schema, dict):
            raise ValueError(f"A lista '{path}' precisa definir o schema de 'items'.")
        count = rng.randint(minimum, maximum)
        if schema.get("uniqueItems"):
            enum_values = items_schema.get("enum")
            if not isinstance(enum_values, list):
                raise ValueError(
                    f"A lista '{path}' precisa de opções enum para gerar itens únicos."
                )
            if any(
                not _matches_type(value, items_schema.get("type"))
                for value in enum_values
                if items_schema.get("type") is not None
            ):
                raise ValueError(
                    f"Uma opção enum não corresponde ao tipo dos itens de '{path}'."
                )
            unique_values: list[Any] = []
            for value in enum_values:
                if value not in unique_values:
                    unique_values.append(value)
            if count > len(unique_values):
                raise ValueError(
                    f"A lista '{path}' precisa de opções enum suficientes "
                    "para gerar itens únicos."
                )
            return rng.sample(unique_values, count)
        return [
            _generate_value(items_schema, rng, f"{path}[{index}]", depth + 1, seed)
            for index in range(count)
        ]
    if value_type == "object":
        nested_properties = schema.get("properties")
        if not isinstance(nested_properties, dict):
            raise ValueError(f"O objeto '{path}' precisa definir 'properties'.")
        return {
            name: _generate_value(
                nested_schema, rng, f"{path}.{name}", depth + 1, seed
            )
            for name, nested_schema in nested_properties.items()
        }

    raise ValueError(
        f"Tipo não suportado no campo '{path}': {value_type!r}. "
        "Use string, integer, number, boolean, array ou object."
    )


def _string_value(schema: dict[str, Any], path: str, seed: int) -> str:
    string_format = schema.get("format")
    if string_format == "email":
        return f"qa.user{seed}@example.test"
    if string_format == "date":
        return "2026-01-15"
    if string_format == "date-time":
        return "2026-01-15T12:00:00Z"
    return f"sample-{path.replace('.', '-')}-{seed}"


def _matches_type(value: Any, value_type: str) -> bool:
    if value_type == "string":
        return isinstance(value, str)
    if value_type == "integer":
        return type(value) is int
    if value_type == "number":
        return isinstance(value, (int, float)) and not isinstance(value, bool)
    if value_type == "boolean":
        return isinstance(value, bool)
    if value_type == "array":
        return isinstance(value, list)
    if value_type == "object":
        return isinstance(value, dict)
    return False


def _clean_sentence(value: str) -> str:
    return re.sub(r"\s+", " ", value.strip()).rstrip(".!?")
