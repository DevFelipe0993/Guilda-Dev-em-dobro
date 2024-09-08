// Call Back

// const calcularAnoDeNascimento = function (idade, mesDeNascimento, imprimir){
//     const mesAtual = 8
//     let anoDeNascimento = 2024 - idade
//     if(mesDeNascimento > mesAtual) anoDeNascimento--

//     imprimir(anoDeNascimento)

// }

// let imprimirAnoDeNascimento = anoDeNascimento => {
//     console.log('Seu ano de Nascimento é: ' + anoDeNascimento)
// }

// calcularAnoDeNascimento(37, 6, imprimirAnoDeNascimento)

function multiplicar(multiplicador){
    return function(numero){
        return numero * multiplicador
    }
}

let dobrar = multiplicar(2)
let triplicar = multiplicar(3)
let quaduplicar = multiplicar(4)

console.log(dobrar(3))
console.log(triplicar(3))
console.log(quaduplicar(3))