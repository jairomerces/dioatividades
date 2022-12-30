/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - Tipo de combustível abastecido;
 4 - Consumo médio de combustível por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar a viagem.
*/

const precoEtanol = 3.44;
const precoGasolina = 5.22;
const kmPorLitro = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Etanol';

const consumoMedio = distanciaEmKm / kmPorLitro;

if (tipoCombustivel === 'Etanol') {
    const valorTotalGasto = consumoMedio * precoEtanol;
    console.log(valorTotalGasto.toFixed(2));
} else {
    const valorTotalGasto = consumoMedio * precoGasolina;
    console.log(valorTotalGasto.toFixed(2));
}

