# QA Copilot Skill — PoC offline

PoC em Python para apoiar tarefas de QA sem enviar requisitos, logs ou dados a
serviços externos. A implementação atual usa regras e templates determinísticos;
ela não chama um LLM e não substitui revisão humana ou critérios de aceite.

## Requisitos

- Python 3.10 ou superior
- Nenhuma dependência externa

## Executar a demonstração

No PowerShell, na raiz deste repositório:

```powershell
Set-Location .\qa-copilot-skill
python -m qa_copilot_skill.cli demo
```

O comando executa três exemplos locais: gera cenários BDD, analisa um log
Cypress sintético e cria um payload JSON usando o contrato de exemplo.

## Comandos

### 1. Rascunhos BDD / Gherkin

```powershell
python -m qa_copilot_skill.cli bdd --requirement "Como cliente, quero consultar meu saldo para acompanhar meus gastos."
```

O gerador retorna um fluxo principal e duas sugestões de validação. Os casos
que dependem de regras não informadas são marcados para revisão.

### 2. Troubleshooting de logs

```powershell
python -m qa_copilot_skill.cli troubleshoot --log-file .\examples\cypress_failure.log
```

O analisador identifica assinaturas conhecidas de Cypress, Robot Framework,
Appium e falhas comuns de asserção, timeout e conexão. Ele retorna sintomas,
causas prováveis, verificações sugeridas e exemplos pontuais de código; não
executa nem altera testes.

Exemplos sanitizados adicionais:

```powershell
python -m qa_copilot_skill.cli troubleshoot --log-file .\examples\robot_keyword_failure.log
python -m qa_copilot_skill.cli troubleshoot --log-file .\examples\appium_session_failure.log
```

Use somente logs sanitizados. Remova tokens, cookies, dados pessoais, URLs
internas e identificadores de clientes antes de analisá-los.

### 3. Payload de API

```powershell
python -m qa_copilot_skill.cli payload --contract .\examples\api_contract.json --seed 42
```

O subconjunto de contrato suportado inclui objetos, strings, inteiros, números,
booleanos, listas, `enum`, exemplos e limites numéricos. O mesmo `seed` produz
o mesmo payload. O contrato também pode exigir `uniqueItems` para listas
baseadas em `enum`. E-mails gerados usam o domínio reservado `example.test`.

## Testes

```powershell
python -m unittest discover -s tests -v
```

## Estrutura

```text
qa-copilot-skill/
|-- examples/
|   |-- api_contract.json
|   |-- appium_session_failure.log
|   |-- cypress_failure.log
|   `-- robot_keyword_failure.log
|-- qa_copilot_skill/
|   |-- __init__.py
|   |-- cli.py
|   |-- generators.py
|   `-- troubleshooting.py
`-- tests/
    `-- test_qa_copilot_skill.py
```

## Limites da PoC

- As sugestões são heurísticas determinísticas, não respostas de um modelo
  generativo.
- Regras específicas de negócio precisam ser confirmadas antes da automação.
- O diagnóstico aponta hipóteses; não corrige código nem interage com pipelines.
- Os payloads são dados sintéticos para testes e não devem representar clientes
  reais.
