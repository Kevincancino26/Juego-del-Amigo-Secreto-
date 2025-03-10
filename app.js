// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Varibales que especificaremos en el codigo
const amigo=[];
const nombreAmigo= document.getElementById("amigo");
const uListaAmigo= document.getElementById("listaAmigos");
const Ulresultado= document.getElementById("resultado");

// agregar a la lissta nombres y motrar en el DOM
function agregarAmigo() {
  const nombre1= nombreAmigo.value.trim(); // elimina espacios en blanco al inicio y al final
  if (nombre1=== ""){
    /**SE INVIERTE LA LOGICA UANDO LA ESCLAMACION PARA QUE EN LUGAR QUE NOS DIGA ETA LLENO. NOS DICE, NO ESTA VACIO */
    alert("Debes ingresar un nombre");
    return; // Detiene la ejecuicon de la funcion
  
  }else{
  amigo.push(nombre1);
  //uListaAmigo.innerHTML= uListaAmigo.innerHTML + nombreAmigo.value;
//simplificado con operadores += seria lo mismo que lo anterior, haciedno un temble stream
uListaAmigo.innerHTML+=`<li>${nombre1}</li>` ; //<li> ess para meter en texto o elemeto en el HTML y la version simplificada de lo anterior es +=
nombreAmigo.value= " ";
}}
/*desasrrollar una logica para seleccionar un numero aleatorio y en basse a esas logica seleccionar el nombre que correponda a dicho numero en la lista*/
function sortearAmigo() {
  let random1=Math.floor( Math.random()*amigo.length);
  let amigosecreto = amigo[random1];
  Ulresultado.innerHTML =`<li> El amigo secreto es: ${amigosecreto}</li>`;


}
