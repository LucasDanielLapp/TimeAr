"use strict";
//llamas//
const timeReloj = document.querySelector(".time-reloj");

//Inicializando el metodo que me dara acceso al time
// obtener la hora en la configuración regional de EE. UU.
setInterval(() => {
  var today = new Date();
  var now = today.toLocaleTimeString('en-US')  
  timeReloj.innerHTML = now ;   
},100);

