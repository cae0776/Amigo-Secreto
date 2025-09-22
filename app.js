let amigos = [];
let amigosSorteados = [];

function limparCaixa(id) {
    entradaDoUsuario = document.getElementById(id);
    entradaDoUsuario.value = '';
}

function adicionarAmigo() {
    let entradaDoUsuario = document.querySelector('input').value;

    if (entradaDoUsuario === '') {
        alert('Por favor, insira um nome!');
    } else {
        amigos.push(entradaDoUsuario);
    }

    atualizaLista();
    limparCaixa('amigo');
}

function atualizaLista() {
    let lista = document.getElementById('listaAmigos');

    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let amigo = document.createElement('li');

        amigo.innerHTML = amigos[i];

        lista.appendChild(amigo)
    }
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    
    let amigoSecreto = Math.floor(Math.random() * amigos.length);

    if (amigosSorteados.length === amigos.length) {
        amigosSorteados = []
    }

    if (amigosSorteados.includes(amigoSecreto)) {
        amigoSecreto = sortearAmigo();
    } else {
        amigosSorteados.push(amigoSecreto);
        let resultadoDoSorteio = document.createElement('li');
        
        resultadoDoSorteio.textContent = amigos[amigoSecreto];
        resultado.appendChild(resultadoDoSorteio);
            
        console.log(amigoSecreto);
    }

}