// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Declaracion variable para almacenar los nombres ingresados por usuario
let amigos = [];
//funcion para registrar los nombres
function agregarAmigo(){
    let agregarAmigo = document.getElementById("amigo").value.trim();
    //Validacion campo vacio
    if (agregarAmigo === '') {
        alert ('Por favor, inserte un nombre');
        return;
    }
    //Agregar nombre a la lista
    amigos.push(agregarAmigo);
    console.log(amigos);
    //Limpiar caja
    document.getElementById('amigo').value = '';
    //Actualizar la lista amigos en pantalla
    listaAmigos();
}

//funcion para obtener elemento de la lista
function listaAmigos(){
    let listaElement = document.getElementById("listaAmigos");
    //limpiar lista existente
    listaElement.innerHTML = "";
    //repetir lista
    for(let i = 0; i < amigos.length; i++){
        console.log('listaAmigos');
        //creamos un nuevo elemento para cada amigo
        let nuevoNombre = document.createElement('li');
        nuevoNombre.textContent = amigos[i];
        //agregamos los nuevos elementos a la lista
            listaElement.appendChild(nuevoNombre);
            console.log(nuevoNombre);
    }
}
function sortearAmigo(){
    //validacion que haya amigos en la lista
    if (amigos.length === 0){
        alert ("No hay amigos para sortear");
        return;
    }
    //generar nombre aleatorio de la lista de amigos
    let indiceAleatorio = Math.floor(Math.random()* amigos.length);
    console.log(indiceAleatorio);
    //obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];
    //mostrar resultado
    let resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `el amigo sorteado es:${amigoSorteado}`;
}
