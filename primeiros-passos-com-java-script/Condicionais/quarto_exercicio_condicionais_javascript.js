/*Elabore um algorítimo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta e a escolha da condição de pagamento.

Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código - Condição de pagamento:
1 - À vista no Débito, recebe 10% de desconto;
2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
3 - Parcelamento em x2, preço normal da etiqueta sem juros;
4 - Parcelamento acima de x2, preço normal da etiqueta com 10% de juros;*/


const precoEtiqueta = 100;
const condicaoPagamento = 4;


if (condicaoPagamento === 1){
    console.log(precoEtiqueta -(precoEtiqueta * 0.1));
} else if (condicaoPagamento === 2){
    console.log(precoEtiqueta -(precoEtiqueta * 0.15));
} else if (condicaoPagamento === 3){
    console.log(precoEtiqueta);
} else if (condicaoPagamento === 4){
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}
