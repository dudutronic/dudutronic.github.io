"""Command-line interface for the offline QA Copilot Skill PoC."""

from __future__ import annotations

import argparse
import json
from pathlib import Path
import sys
from typing import Sequence

from .generators import generate_bdd_scenarios, generate_payload
from .troubleshooting import LogAnalysis, analyze_log


_PROJECT_ROOT = Path(__file__).resolve().parents[1]
_DEMO_STORY = (
    "Como cliente, quero consultar meu saldo para acompanhar meus gastos."
)


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        prog="qa-copilot",
        description="PoC offline para rascunhos BDD, logs de automação e payloads.",
    )
    commands = parser.add_subparsers(dest="command", required=True)

    bdd = commands.add_parser("bdd", help="Gera rascunhos de cenários Gherkin.")
    bdd.add_argument("--requirement", required=True, help="Requisito ou user story.")

    troubleshooter = commands.add_parser(
        "troubleshoot", help="Analisa um arquivo de log local."
    )
    troubleshooter.add_argument(
        "--log-file", required=True, type=Path, help="Caminho para um log sanitizado."
    )

    payload = commands.add_parser(
        "payload", help="Gera um payload JSON sintético a partir de um contrato."
    )
    payload.add_argument(
        "--contract", required=True, type=Path, help="Contrato JSON local."
    )
    payload.add_argument(
        "--seed", type=int, default=42, help="Seed para repetir o mesmo payload."
    )

    commands.add_parser("demo", help="Executa os três exemplos locais incluídos.")
    return parser


def main(argv: Sequence[str] | None = None) -> int:
    args = build_parser().parse_args(argv)
    try:
        if args.command == "bdd":
            _print_scenarios(args.requirement)
        elif args.command == "troubleshoot":
            _print_analysis(analyze_log(_read_text(args.log_file)))
        elif args.command == "payload":
            contract = json.loads(_read_text(args.contract))
            print(json.dumps(generate_payload(contract, args.seed), indent=2, ensure_ascii=False))
        else:
            _run_demo()
    except (OSError, UnicodeError) as error:
        print(f"Erro ao ler arquivo local: {error}", file=sys.stderr)
        return 2
    except ValueError as error:
        print(f"Entrada inválida: {error}", file=sys.stderr)
        return 2
    return 0


def _read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def _print_scenarios(requirement: str) -> None:
    print("Funcionalidade: Requisito informado")
    for scenario in generate_bdd_scenarios(requirement):
        print(scenario.to_gherkin())
        print()
    print(
        "Revisão necessária: confirme os cenários marcados com os critérios "
        "de aceite antes de automatizá-los."
    )


def _print_analysis(analysis: LogAnalysis) -> None:
    print(f"Framework provável: {analysis.framework}")
    print(f"Sintoma: {analysis.symptom}")
    print(f"Causa provável: {analysis.likely_cause}")
    print("Próximas verificações:")
    for suggestion in analysis.suggestions:
        print(f"- {suggestion}")
    print("Análise heurística: valide a hipótese com o contexto do teste e da CI.")


def _run_demo() -> None:
    print("QA Copilot Skill — PoC offline")
    print("\n=== BDD / Gherkin ===")
    _print_scenarios(_DEMO_STORY)

    print("\n=== Troubleshooting ===")
    sample_log = _read_text(_PROJECT_ROOT / "examples" / "cypress_failure.log")
    _print_analysis(analyze_log(sample_log))

    print("\n=== Payload de API ===")
    sample_contract = json.loads(
        _read_text(_PROJECT_ROOT / "examples" / "api_contract.json")
    )
    print(
        json.dumps(
            generate_payload(sample_contract, seed=42),
            indent=2,
            ensure_ascii=False,
        )
    )


if __name__ == "__main__":
    raise SystemExit(main())
