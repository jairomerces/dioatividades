function escrevaMeuNome (nome){
    return 'Meu nome é ' + nome ;
}

function validarIdade (idade){
if (idade >= 18){
    console.log(escrevaMeuNome('Jairo') + ', sou de maior');
}else{
    console.log(escrevaMeuNome('Jairo') + ', sou de menor');
}
}

validarIdade(41);