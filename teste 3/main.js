document.addEventListener('DOMContentLoaded', (event) => {
    var a = document.getElementById('int');
    a.addEventListener('click', clicar);
    a.addEventListener('mouseenter', entrar);
    a.addEventListener('mouseout', sair);

    function clicar() {
        a.innerText = 'Clicou!';
        a.style.background = 'blue'
    }

    function entrar() {
        a.innerText = 'Entrou!';
        a.style.background = 'green'
    }

    function sair() {
        a.innerText = 'Saiu!';
        a.style.background = 'red'
    }
});