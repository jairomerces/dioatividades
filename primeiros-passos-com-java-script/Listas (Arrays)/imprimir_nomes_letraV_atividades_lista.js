/*3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V"*/

const listaNomes = [
    {nome: 'Jairo'}, 
    {nome: 'André'},
    {nome: 'Sandra'}, 
    {nome: 'Vanessa'}, 
    {nome: 'Verônica'}, 
    {nome: 'João'}, 
    {nome: 'Viviam'}, 
    {nome: 'Victor'}, 
    {nome: 'Paulo'}, 
    {nome: 'Henrique'}, 
    {nome: 'Vitória'}, 
    {nome: 'Vando'}];


const verificarLista = listaNomes.filter((valorActual) => {
     return valorActual.nome.includes('V')
})
console.log(verificarLista);