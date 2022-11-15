let num = [5, 8, 2, 9, 3]
num[3] = 6
num.push(7)
console.log(num)
console.log(num[5])
console.log(num.length)
console.log(num.sort())
console.log(num)

for (let n = 0; n <= num.length; n += 1){
    console.log(num[n])
}

for (let pos in num) {
    console.log(num[pos])
}

console.log('\n', num.indexOf(5))