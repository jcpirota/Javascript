function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    // hora = 13
    
    if (hora < 12) {
        // Bom dia
        img.src = '/aula_012/aula_exercicios_02/modelo/banco_imagens/manha.jpeg'
        document.body.style.background = 'pink'
    } else if (hora <= 18) {
        // Boa tarde
        img.src = '/aula_012/aula_exercicios_02/modelo/banco_imagens/tarde.jpeg'
        document.body.style.background = 'orange'
    } else {
        // Boa noite
        img.src = '/aula_012/aula_exercicios_02/modelo/banco_imagens/noite.jpeg'
        document.body.style.background = 'gray'
    }
}