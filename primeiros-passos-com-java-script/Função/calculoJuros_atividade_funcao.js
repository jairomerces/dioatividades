/*Elabore um algorítimo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta e a escolha da condição de pagamento.

Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código - Condição de pagamento:
1 - À vista no Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Parcelamento em x2, preço normal da etiqueta sem juros;
4 - Parcelamento acima de x2, preço normal da etiqueta com 10% de juros;*/

function aplicarDescontos (valor, desconto){
     return valor - (valor * (desconto / 100));
}

function aplicarJuros (valor, juros){
    return valor + (valor * (juros / 100));
}

function main (precoEtiqueta, condicaoPagamento){
    if (condicaoPagamento === 1){
        return aplicarDescontos (precoEtiqueta, 10);
    } else if (condicaoPagamento === 2){
        return aplicarDescontos (precoEtiqueta, 15);
    } else if (condicaoPagamento === 3){
        return precoEtiqueta;
    } else if (condicaoPagamento === 4){
        return aplicarJuros (precoEtiqueta, 10);
    }
}

const valor = main (100, 4);
console.log(valor);

