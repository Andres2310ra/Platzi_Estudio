function solution(num1, num2) {
    let resultado
    let resultado2
    let valor

    resultado = num1 - num2
    resultado2 = num1 + num2
    valor = resultado + '' + resultado2
    return valor
}

let valor1 = 5
let valor2 = 4

console.log(valor1 + '+' + valor2 + '=' + solution(valor1, valor2))

