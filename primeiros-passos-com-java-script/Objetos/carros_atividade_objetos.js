/*1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.*/

class Carro{
    marca;
    cor;
    consumoMedioPorKm;

    constructor (marca, cor, consumoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.consumoMedioPorKm = consumoMedioPorKm;
    }

    calcularGastoDePercurso (distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.consumoMedioPorKm * precoCombustivel;
    }

}   

const uno = new Carro ('Fiat', 'Prata', 1 / 12);
console.log ('Valor gasto para realizar o percurso: R$ ' + uno.calcularGastoDePercurso (600, 5.44) + ',00');