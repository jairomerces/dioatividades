class Pessoa{
   nome;
   idade;
   anoDenascimento;

   constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDenascimento = 2022 - idade; 
   }

   descrever() {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}, nascido em ${this.anoDenascimento}`);
   }
 
}

function compararPessoa(p1, p2){
    if (p1.idade > p2.idade){
       console.log(`${p1.nome} é mais velho que ${p2.nome}`);
    } else if (p2.idade < p1.idade){
       console.log(`${p2.nome} é mais velho que ${p1.nome}`);
    } else {
       console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const p1 = new Pessoa('Jairo', 41);
const p2 = new Pessoa('João', 14);  

p1.descrever();
p2.descrever();
compararPessoa(p1, p2);