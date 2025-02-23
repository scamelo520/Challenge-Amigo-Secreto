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
    console.log(amigos.lenght);
    return;
}
console.log
