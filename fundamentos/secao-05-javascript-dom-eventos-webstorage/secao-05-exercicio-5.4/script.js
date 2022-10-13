window.onload = function () {
    let selecionador = document.querySelector('select')
    selecionador.addEventListener('change', function () {
        let selecionado = selecionador.selectedOptions[0];
        document.body.style.backgroundColor = selecionado.value;

        localStorage.setItem('5.4-background-color', selecionado.value);

    })


    let fontSize = document.querySelector('input[name="font-size"]')
    fontSize.addEventListener('change', function () {
        document.querySelector('p').style.fontSize = `${fontSize.value}px`;

        localStorage.setItem('5.4-font-size', `${fontSize.value}px`);
    })

    let saveBackground = localStorage.getItem('5.4-background-color');

    document.body.style.backgroundColor = saveBackground;


    let saveFontSize = localStorage.getItem('5.4-font-size');
    let p = document.querySelector('p');
    p.style.fontSize = saveFontSize;
}
