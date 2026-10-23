const { celsiusParaFahrenheit } = require('../../src/conversor');

const ITERACOES = 1000000;
const LIMITE_MS = 500;

const inicio = Date.now();
for (let i = 0; i < ITERACOES; i++) {
  celsiusParaFahrenheit(i);
}
const duracao = Date.now() - inicio;

console.log(`Executadas ${ITERACOES} conversões em ${duracao}ms`);

if (duracao > LIMITE_MS) {
  console.error(`Performance abaixo do esperado: ${duracao}ms (limite: ${LIMITE_MS}ms)`);
  process.exit(1);
}

console.log('Teste de performance passou dentro do limite.');
process.exit(0);
