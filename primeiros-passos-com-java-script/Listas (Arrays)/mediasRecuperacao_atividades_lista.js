/*5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
   Ex de lista = [2, 7, 3, 8, 10, 4]*/

   const lista = [2, 7, 3, 8, 10, 4]

   for (let i = 0; i <= lista.length; i++) {
    const numero = lista[i];

    if (numero <= 5) {
        console.log(`Médias em recuperação: ${numero}`);
    }
}
