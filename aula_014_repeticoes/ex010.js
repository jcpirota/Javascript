var idade = 67

if (idade < 16) {
    console.log('Forma 1:', 'Proibido votar!')
} else {
    if (idade > 16 && idade < 18 || idade >= 65) {
        console.log('Forma 1:', 'Voto opcional')
    } else {
        console.log('Forma 1:', 'Voto obrigatório!')
    }
}

// Outra forma com else if

if (idade < 16) {
    console.log('Forma 2:', 'Proibido votar!')
} else if (idade < 18 || idade >= 65) {
    console.log('Forma 2:', 'voto opcional')
} else {
    console.log('Forma 2:', 'Voto obrigatório!')
}

// Com hora

var agora = new Date()
var time = new Date()
hora = agora.getTime().toLocaleTim
hora_completa = time.toLocaleTimeString()
console.log(`Agora são ${hora}h.`)
saudacao = null

if (hora < 12) {
    saudacao = 'Bom dia'
} else if (hora < 18) {
    saudacao = 'Boa tarde'
} else {
    saudacao = 'Boa noite'
}

console.log('forma 3: ', `${saudacao}, agora são ${hora_completa}`)

// Condições multiplas

var agora = new Date()
var dia_semana = agora.getDay()
var dia_semana_desc = null


console.log(dia_semana)

/*
0 = domingo
1 = segunda
2 = terça
3 = quarta
4 = quinta
5 = sexta
6 = sabado
*/

switch (dia_semana) {
    case 0:
        dia_semana_desc = 'domingo'
        break
    case 1:
        dia_semana_desc = 'segunda'
        break
    case 2:
        dia_semana_desc = 'terca'
        break
    case 3:
        dia_semana_desc = 'quarta'
        break
    case 4:
        dia_semana_desc = 'quinta'
        break
    case 5:
        dia_semana_desc = 'sexta'
        break
    case 6:
        dia_semana_desc = 'sabado'
        break
    default: //opcional, caso o valor apurado fique fora das condições fixadas
        dia_semana = 'invalido'
        break
}

console.log('Forma 4: ', dia_semana_desc)