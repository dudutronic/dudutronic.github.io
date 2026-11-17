import unittest

from qa_copilot_skill import analyze_log, generate_bdd_scenarios, generate_payload


class BddGeneratorTests(unittest.TestCase):
    def test_extracts_user_story_and_marks_unconfirmed_edges_for_review(self):
        scenarios = generate_bdd_scenarios(
            "Como cliente, quero consultar meu saldo para acompanhar meus gastos."
        )

        self.assertEqual(len(scenarios), 3)
        self.assertIn("cliente", scenarios[0].given)
        self.assertIn("consultar meu saldo", scenarios[0].when)
        self.assertIn("acompanhar meus gastos", scenarios[0].then)
        self.assertFalse(scenarios[0].requires_review)
        self.assertTrue(scenarios[1].requires_review)
        self.assertIn("(revisar critérios)", scenarios[1].to_gherkin())

    def test_rejects_empty_requirement(self):
        with self.assertRaisesRegex(ValueError, "Informe um requisito"):
            generate_bdd_scenarios("  ")


class LogTroubleshooterTests(unittest.TestCase):
    def test_identifies_cypress_element_timeout_without_echoing_log(self):
        log = (
            "CypressError: Timed out retrying after 4000ms: "
            "Expected to find element '[data-test=confirm]'"
        )

        analysis = analyze_log(log)

        self.assertEqual(analysis.framework, "Cypress")
        self.assertIn("elemento", analysis.symptom)
        self.assertNotIn("[data-test=confirm]", analysis.symptom)
        self.assertTrue(any("cy.get" in item for item in analysis.suggestions))
        self.assertTrue(analysis.suggestions)

    def test_identifies_robot_missing_keyword(self):
        analysis = analyze_log("No keyword with name 'Wait For Ready' found.")

        self.assertEqual(analysis.framework, "Robot Framework")
        self.assertIn("keyword", analysis.symptom.lower())

    def test_identifies_appium_session_creation_failure(self):
        analysis = analyze_log(
            "Appium SessionNotCreatedException: failed to create session."
        )

        self.assertEqual(analysis.framework, "Appium")
        self.assertIn("sessão", analysis.symptom.lower())

    def test_returns_cautious_fallback_for_unknown_log(self):
        analysis = analyze_log("runner completed with exit code 17")

        self.assertEqual(analysis.framework, "Não identificado")
        self.assertIn("não pode ser inferida", analysis.likely_cause)


class ApiPayloadGeneratorTests(unittest.TestCase):
    def test_generates_contract_shaped_repeatable_synthetic_payload(self):
        contract = {
            "type": "object",
            "properties": {
                "email": {"type": "string", "format": "email"},
                "status": {"type": "string", "enum": ["ACTIVE", "PENDING"]},
                "attempts": {"type": "integer", "minimum": 1, "maximum": 3},
                "verified": {"type": "boolean"},
                "tags": {
                    "type": "array",
                    "minItems": 2,
                    "maxItems": 2,
                    "uniqueItems": True,
                    "items": {"type": "string", "enum": ["api", "mobile", "web"]},
                },
            },
        }

        first = generate_payload(contract, seed=12)
        second = generate_payload(contract, seed=12)

        self.assertEqual(first, second)
        self.assertTrue(first["email"].endswith("@example.test"))
        self.assertIn(first["status"], {"ACTIVE", "PENDING"})
        self.assertIn(first["attempts"], {1, 2, 3})
        self.assertIsInstance(first["verified"], bool)
        self.assertEqual(len(first["tags"]), len(set(first["tags"])))

    def test_rejects_unsupported_schema_type(self):
        with self.assertRaisesRegex(ValueError, "Tipo não suportado"):
            generate_payload(
                {"type": "object", "properties": {"value": {"type": "null"}}}
            )


if __name__ == "__main__":
    unittest.main()
