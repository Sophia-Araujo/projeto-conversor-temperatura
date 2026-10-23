# Conversor de Temperatura — Testes Automatizados

**Disciplina:** DevOps
**Professor:** Prof. Me. Deivison S. Takatu

Aplicação simples de conversão de temperatura (Celsius ↔ Fahrenheit), com três tipos de testes automatizados organizados de forma independente e uma pipeline de CI no GitHub Actions.

## Estrutura

```
src/                    → código da aplicação
public/                 → interface HTML básica
tests/unit/             → testes unitários (Jest)
tests/integration/      → testes de integração (Jest + Supertest)
tests/performance/      → teste de performance (script Node puro)
.github/workflows/      → pipeline de CI
```

## Como rodar

```bash
npm install
node src/server.js
```

Depois abra `http://localhost:3000` no navegador.

## Como rodar os testes

```bash
npm run test:unit
npm run test:integration
npm run test:performance
```

## Pipeline (CI)

O workflow `.github/workflows/ci.yml` roda a cada `push` na branch `main`, em 3 jobs separados (`unit-tests`, `integration-tests`, `performance-tests`), permitindo ver o resultado de cada tipo de teste individualmente na aba Actions do GitHub.
