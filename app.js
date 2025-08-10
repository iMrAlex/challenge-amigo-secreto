// Array global, este guardara la lista de amigos
let amigos = []

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;

    if (amigo.trim() === '') {
        alert("Por favor, inserte un nombre.");
    }

    amigos.push(amigo);

    document.getElementById('amigo').value = '';

    mostrarLista();

    return amigos;
}

function mostrarLista() {
    ul = document.getElementById('listaAmigos');

    ul.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        //Creo un li
        let li = document.createElement('li');
        //Al li se asigno el amigo
        li.textContent = amigos[i];
        //Asigo el li al ul
        ul.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agregue sus amigos, por favor.");
        return;
    }

    numeroAmigoSecreto = Math.floor(Math.random() * amigos.length);

    nombreAmigoSecreto = amigos[numeroAmigoSecreto];

    document.getElementById('resultado').innerHTML = nombreAmigoSecreto;

    //Ocultar la lista de amigos
    document.getElementById('listaAmigos').setAttribute('hidden', true);
}