// Repetição manual

console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?')
console.log('Tudo bem?\n')

// Estrutura de repetição.

var n = 0
while (n <= 5) {
    if (n == 5) {
        console.log('forma 1: ',n , ' Tudo bem?\n')
    } else {
        console.log('forma 1: ',n , ' Tudo bem?')
    }
    n += 1
}

// Outra forma

var n = 0
do {
    console.log('forma 2: ', n, ' Tudo bem?')
    n += 1
} while (n <= 5)

// Outra forma (aula 14)

console.log('')
for (var n=0; n<=5; n++) {
    console.log('forma 3: ', n, ' Tudo bem?')
}