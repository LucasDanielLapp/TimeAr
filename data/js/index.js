'use strict';
/*
        IDEAS , QUE EL USUARIO PUEDA ELEGIR LA ANIMACION DE CSS

*/


//Calls 
//this calls no estan dentro de un objeto ya que quiero tener una mayor accecivilidad global de estos.
//Màs adelante si estarand dentro de un metodo
const timeClock = document.querySelector('.time-clock');
const settingsBottom = document.querySelector('.settings');
const settingsMenu = document.querySelector('.settingsMenu');
const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const segundosD = document.querySelector('.segundos');
const modeActive = document.querySelector('.mode-active');
var body = document.body;
//Como aùn no podemos modularizar por temas de servidor,lo que aremos es un objeto llamado DOM que dentro de el vayamos 
//uniendo los distintos componentes de nuestra aplicacion
class domControler{
  //Mostrar en screen
  printScreen(){
    //recordemos el one reposavility object method
    //todo lo que querramos mostrar pasara por quì , esa responsavilidad no debe ser dada por ningun otro objeto
   this.createClock();
   this.settings();
   this.themes();
  }createClock(){
    setInterval(() => {
      //Inicializando el metodo que me dara acceso al time
      // obtener la hora en la configuración regional de EE. UU
      var fechaActual = new Date();
      var hora = fechaActual.getHours();
      var minutos = fechaActual.getMinutes();
      var segundos = fechaActual.getSeconds();
      var amPm = hora >= 12 ? 'PM' : 'AM';   
      //
      hora = hora < 10 ? '0' + hora : hora;
      minutos = minutos < 10 ? '0' + minutos : minutos;
      segundos = segundos < 10 ? '0' + segundos : segundos;

      var horaFormateada = hora + ':' + minutos + ':' + segundos + ' ' + amPm;
     timeClock.innerHTML = hora + ':' + minutos + ':' ;
     segundosD.innerHTML = segundos;
     segundosD.classList.toggle('slideInUp');
    },470);
    //cuando separe los minutos , segundo y horas agregar este efecto a los minutos
    //para que el efecto sea mejor podemos aumentar ligeramenta la velocidad con la que sefresca la pantall
  }createElementF(elem,clase,contentText,contenArea){
     const name = document.createElement(elem);
     name.className = clase;
     name.textContent = contentText;
     contenArea.appendChild(name)
  }settings(){
    settingsBottom.addEventListener('click',() => {
      //Con esta clase hacemos visible el menu 
      menu.classList.toggle('control');
      //clase con la animacion
      menu.classList.toggle('bounceIn');
    })
    close.addEventListener('click',() => {
      //Con esta clase hacemos visible el menu 
      menu.classList.toggle('control');
      //clase con la animacion
      menu.classList.toggle('bounceIn');
    })
  }themes(){
    let url = 'data/img/dom.png';
    modeActive.innerHTML = '<img src="' + url +  '" ' + 'class="mode-day">';
    body.style.backgroundColor = ' #e5e7e9';
    timeClock.style.color = 'black';
    modeActive.addEventListener('click',() => {
    let url = 'data/img/luna-creciente.png';
    const modeDay = document.querySelector('.mode-day');
    modeActive.classList.toggle('active-mod');
    const activeMod = document.querySelector('.active-mod');
    modeActive.style.backgroundColor = 'black'; 
    segundosD.style.color = 'black';
    if(activeMod === null){
      let url = 'data/img/dom.png';
      modeActive.innerHTML = '<img src="' + url +  '" ' + 'class="mode-day">';
      body.style.backgroundColor = ' #e5e7e9'; 
      modeActive.style.backgroundColor = 'white'; 
      timeClock.style.color = 'black';
    }
    activeMod.innerHTML = '<img src="' + url +  '" ' + 'class="mode-day">';
    body.style.backgroundColor = '#060C15'; 
    timeClock.style.color = '#16B8C9';
    segundosD.style.color = '#16B8C9';
    })
  }
}

//call this Dom 
const Dom = new domControler();

//method
Dom.printScreen();
