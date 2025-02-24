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
    console.log(amigos.length);
    //Actualizar la lista amigos en pantalla
    listaAmigos();

    //funcion para obtener elemento de la lista
    function listaAmigos(){
        let listaElement = document.getElementById("listaAmigos");
        //limpiar lista existente
        listaElement.innerHTML = "";
        //repetir lista
        for(let i = 0; i < amigos.length; i++){
            console.log('listaAmigos');       
                }
        //creamos un nuevo elemento para cada amigo
        let nuevoNombre = document.createElement('li');
        nuevoNombre.textContent = amigos;
        //agregamos los nuevos elementos a la lista
        listaElement.appendChild(nuevoNombre);
        console.log(nuevoNombre);
    } 
}
console.log
