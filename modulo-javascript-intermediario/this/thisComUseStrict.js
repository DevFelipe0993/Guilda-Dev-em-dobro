'use strict'

// console.log(window);
// console.log(window === this);

// this.name = 'Felipe'

// function saudar() {
//     console.log('this no contexto da funcao', this);
//     console.log('Olá, ' + this.name);
// }

// saudar()




let comida = {
    nome: 'Brócolis',
    temperatura: 0,
    cozinhar: function(temperaturaDeCozimento) {
        console.log('this no contexto do objeto comida', this);
        this.temperatura = temperaturaDeCozimento;
    }
}

console.log(comida);

comida.cozinhar(100)

console.log(comida);

