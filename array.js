let array = [10, 40, 20, 5]

function maiorValorIdx(array) {
    let maior = 0
    let maiorIdx = 0
    for (i = 0; i <= array.length; i++) {
        if (array[i] > maior) {
            maiorIdx = i
            maior = array[i]
        }
    }
    return maiorIdx
}
console.log(maiorValorIdx(array))

function menorValorIdx(array) {
    let maiorValor = maiorValorIdx(array)
    let menor = array[maiorValor]
    let menorIdx = 0
    for (i = 0; i <= array.length; i++) {
        if (array[i] < menor) {
            menorIdx = i
            menor = array[i]
        }
    }
    return menorIdx
}
console.log(menorValorIdx(array))
