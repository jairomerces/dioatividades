/*2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;*/

class Pessoa{
    nome;
    peso;
    altura;

    constructor (nome,peso,altura){
       this.nome = nome;
       this.peso =peso;
       this.altura = altura;
    }

    calcularImc (){
       return this.peso / (this.altura * this.altura);
    }

    classificarImc (){
         const imc = this.calcularImc();

        if (imc <= 18.5) {
            return 'Abaixo do peso';
        } else if (imc >= 18.5 && imc <= 25) {
            return 'Peso normal';
        } else if (imc >= 25 && imc <= 30) {
            return 'Acima do peso';
        } else if (imc >= 30 && imc <= 40) {
            return 'Obeso';
        } else {
            return 'Obesidade grave';
        }
    }

}

const jose = new Pessoa ('José', 70, 1.75);
console.log ('Meu nome é ' + jose.nome + ', peso ' + jose.peso + ' Kg, minha altura é ' + jose.altura);
console.log ('Meu IMC é: ' + jose.calcularImc().toFixed(2) + ', estou ' + jose.classificarImc());

const jairo = new Pessoa ('Jairo', 83, 1.73);
console.log ('Meu nome é ' + jairo.nome + ', peso ' + jairo.peso + ' Kg, minha altura é ' + jairo.altura);
console.log ('Meu IMC é: ' + jairo.calcularImc().toFixed(2) + ', estou ' + jairo.classificarImc());

const sandra = new Pessoa ('Sandra', 67, 1.57);
console.log ('Meu nome é ' + sandra.nome + ', peso ' + sandra.peso + ' Kg, minha altura é ' + sandra.altura);
console.log ('Meu IMC é: ' + sandra.calcularImc().toFixed(2) + ', estou ' + sandra.classificarImc());