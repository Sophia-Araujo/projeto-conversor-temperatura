const { celsiusParaFahrenheit, fahrenheitParaCelsius } = require('../../src/conversor');

test('converte 0°C para 32°F', () => {
  expect(celsiusParaFahrenheit(0)).toBe(32);
});

test('converte 100°C para 212°F', () => {
  expect(celsiusParaFahrenheit(100)).toBe(212);
});

test('converte 32°F para 0°C', () => {
  expect(fahrenheitParaCelsius(32)).toBe(0);
});
