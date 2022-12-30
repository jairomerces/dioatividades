
const numero = 16;
const numeroDivisivelPor5 = (numero % 5) === 0;

if (numero === 0){
    console.log('numero é inválido');
}else if (numeroDivisivelPor5 === true){
    console.log('Sim');
}else {
    console.log('Não');
}
