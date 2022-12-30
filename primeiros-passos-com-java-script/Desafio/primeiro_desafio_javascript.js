/*
Faça um programa que calcule o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
 1 - Preço do combustível;
 2 - Consumo médio de combustível por KM;
 3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar a viagem.
*/

const precoCombustivel = 5.04;
const kmPorLitro = 10;
const distanciaEmKm = 600;

const consumoMedio = distanciaEmKm / kmPorLitro;
const valorTotalGasto = consumoMedio * precoCombustivel;

console.log(valorTotalGasto.toFixed(2));



