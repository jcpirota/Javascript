function calcular() {
    let numero = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (numero.value.length == 0) {
        window.alert('Por favor, digite um numero.')
    } else {
        let num = Number(numero.value)
        tab.innerHTML = ''
        for (var n=0; n <= 10; n += 1) {
            let item = document.createElement('option')
            item.text = `${num} x ${n} = ${n * num}`
            item.value = `tab${n}`
            tab.appendChild(item)
        }
    }
}
