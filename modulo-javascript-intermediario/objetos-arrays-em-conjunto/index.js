// let videoGame = {
//     nome: 'Xbox',
//     valor: '3.000,00',
//     jogos: [
//         {nome: 'Final fantasy'},
//         {nome: 'Fallout'}
//     ]
// }

// let jogo3 = {
//     nome: 'Fifa'
// }

// videoGame.jogos.push(jogo3)

// console.log(videoGame);





let cliente = {
    nome: 'Felipe',
    ultimoPedido: {
        produto: 'Xbox',
        valor: '3.000,00',
        jogos: [
            {nome: 'Fifa 2023'}
        ]
    }
}

console.log(cliente.ultimoPedido.jogos[0].nome);
