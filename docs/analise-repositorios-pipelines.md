# Análise de Repositórios com Pipeline CI/CD

## Sobre a pipeline do projeto

A pipeline deste repositório (`.github/workflows/ci.yml`) já está configurada para rodar automaticamente a cada `push` na branch `main`, instalando as dependências e executando os três tipos de teste em jobs separados.

## Repositórios analisados

### 1. [mochajs/mocha](https://github.com/mochajs/mocha)

**O que é:** um dos frameworks de teste mais usados no ecossistema JavaScript/Node.js.

- **Gatilhos:** `push` e `pull_request`. Como os mantenedores costumam abrir PR a partir de uma branch do próprio repositório, os dois gatilhos chegam a disparar a pipeline duas vezes para o mesmo commit — um detalhe discutido pela própria equipe em uma issue do projeto.
- **Funcionalidades:** histórico de execução em múltiplos sistemas operacionais, incluindo uma etapa específica para Windows que fazia cache de um instalador (Growl) — removida depois por estar causando falhas de cache vazio.
- **Histórico:** mostra bem como uma pipeline evolui com o tempo: etapas antigas (e já obsoletas) vão sendo removidas conforme a ferramenta que elas testavam é descontinuada.

### 2. [open-cli-tools/concurrently](https://github.com/open-cli-tools/concurrently)

**O que é:** ferramenta de linha de comando para rodar múltiplos processos Node.js em paralelo.

- **Gatilhos:** `push` e `pull_request` na branch `main`, mas com `paths-ignore` configurado para **não** rodar a pipeline quando só arquivos `.md` ou de configuração do workflow mudam — evita gastar minutos de CI com alterações que não afetam o código.
- **Funcionalidades:** usa `concurrency` para cancelar automaticamente uma execução antiga da pipeline se um novo commit chegar antes dela terminar; testa em matriz cruzando várias versões do Node.js com três sistemas operacionais (Ubuntu, Windows e macOS); envia a cobertura de testes para o Coveralls ao final.
- **Histórico:** pipeline mais sofisticada, pensada para economizar tempo de execução (cancelamento automático) e garantir compatibilidade ampla de ambiente.

### 3. [date-fns/date-fns.org](https://github.com/date-fns/date-fns.org)

**O que é:** site de documentação oficial da biblioteca date-fns.

- **Gatilhos:** `push` e `pull_request`, sem restrição de branch — roda em qualquer branch do repositório.
- **Funcionalidades:** pipeline simples, com um único job que instala as dependências (via Yarn), roda o lint e depois os testes, sem matriz de versões nem múltiplos sistemas operacionais.
- **Histórico:** exemplo de pipeline enxuta, adequada a um projeto menor (documentação) onde não há necessidade de testar várias combinações de ambiente.

## Comparativo

| Característica | mochajs/mocha | concurrently | date-fns.org |
|---|---|---|---|
| Gatilho por push | Sim | Sim (com `paths-ignore`) | Sim |
| Gatilho por pull request | Sim | Sim | Sim |
| Restrição de branch | Não identificada | `main` | Não |
| Testes em matriz | Sim (histórico, por SO) | Sim (Node × SO) | Não |
| Cancelamento automático (`concurrency`) | Não | Sim | Não |
| Integração com cobertura de testes | Não identificada | Sim (Coveralls) | Não |

## Conclusão

Os três repositórios mostram níveis diferentes de maturidade de pipeline: o `mocha` revela como etapas antigas são removidas com o tempo; o `concurrently` tem a pipeline mais completa, com otimizações de custo (cancelamento automático e `paths-ignore`) e cobertura de testes; e o `date-fns.org`, por ser só um site de documentação, usa uma pipeline mínima — reforçando que a complexidade da pipeline deve acompanhar a complexidade real do projeto.
