console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?\n')


// Estrutura de repetição.

var n = 0
while (n <= 5) {
    console.log('forma 1: ',n, ' Tudo bem?')
    n += 1
    if (n == 5) {
        console.log('forma 1: ',n, ' Tudo bem?\n')
    }
}

// Outra forma

var n = 0
do {
    console.log('forma 2: ', n, ' Tudo bem?')
    n += 1
} while (n <= 5)