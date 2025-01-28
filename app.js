//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
  let nomeAmigoInput = document.getElementById("amigo");
  let nomeAmigoValue = nomeAmigoInput.value;

  if (!nomeAmigoValue.trim().length) {
    alert("Por favor, insira um nome.");
    return;
  }

  amigos.push(nomeAmigoValue);

  mostrarAmigo();

  nomeAmigoInput.value = "";
}

function sortearAmigo() {}

function mostrarAmigo() {
  let nameList = document.getElementById("listaAmigos");
  nameList.innerHTML = "";

  amigos.forEach((elem) => {
    let itemList = document.createElement("li");
    itemList.innerHTML = elem;
    nameList.appendChild(itemList);
  });
}
