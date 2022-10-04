window.onload = function () {
    let selecionador = document.querySelector('select')
    selecionador.addEventListener('change', function () {
        let selecionado = selecionador.selectedOptions[0];
        document.body.style.backgroundColor = selecionado.value
    })
}
