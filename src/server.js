const express = require('express');
const { celsiusParaFahrenheit, fahrenheitParaCelsius } = require('./conversor');

const app = express();

app.use(express.static('public'));

app.get('/celsius-para-fahrenheit', (req, res) => {
  const celsius = Number(req.query.valor);
  res.json({ resultado: celsiusParaFahrenheit(celsius) });
});

app.get('/fahrenheit-para-celsius', (req, res) => {
  const fahrenheit = Number(req.query.valor);
  res.json({ resultado: fahrenheitParaCelsius(fahrenheit) });
});

if (require.main === module) {
  app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
}

module.exports = app;
