function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert(`[ERRO] Verifique os dados e tente novamente`)
    } else {
        // window.alert(`tudo ok`)
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        // res.innerHTML = `Idade calculada: ${idade}.`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Masculino'
            if (idade <10) {
                img.setAttribute('src', './imagens/masculino_crianca.jpeg')
            } else if (idade <= 22) {
                img.setAttribute('src', './imagens/masculino_jovem.jpeg')
            } else if (idade <= 60) {
                img.setAttribute('src', './imagens/masculino_adulto.jpeg')
            } else {
                img.setAttribute('src', './imagens/masculino_velho.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Feminino'
            if (idade <10) {
                img.setAttribute('src', './imagens/feminino_crianca.jpeg')
            } else if (idade <= 22) {
                img.setAttribute('src', './imagens/feminino_jovem.jpeg')
            } else if (idade <= 60) {
                img.setAttribute('src', './imagens/feminino_adulto.jpeg')
            } else {
                img.setAttribute('src', './imagens/feminino_velha.webp')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}