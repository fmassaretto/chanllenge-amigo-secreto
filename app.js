//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []

function adicionarAmigo() {
    let nome_amigo = document.getElementById('amigo').value;

    if(!nome_amigo.trim().length){
        alert('Por favor, insira um nome.');
        return
    }

    amigos.push(nome_amigo);
}

function sortearAmigo(){

}

function mostrarAmigo(){

}