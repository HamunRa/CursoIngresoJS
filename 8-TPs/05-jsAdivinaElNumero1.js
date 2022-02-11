/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto;
var contadorIntentos;
contadorIntentos = 1;
function comenzar() {
  //declarar variable

  //crear el numero random
  numeroSecreto = Math.round(Math.random() * (100 - 1) + 1);
  console.log(numeroSecreto);

}

function verificar() {
  var verificarNum;

  verificarNum = document.getElementById("txtIdNumero").value;
  verificarNum = parseInt(verificarNum);

  if (verificarNum == numeroSecreto) {

    alert("Usted es un ganador!!! y en solo " + contadorIntentos + " intentos");
    contadorIntentos = 1;

  } else if (verificarNum > numeroSecreto) {
    contadorIntentos = contadorIntentos + 1;
    alert("Se paso, intento numeros mas bajos ");

  } else if (verificarNum < numeroSecreto) {
    contadorIntentos = contadorIntentos + 1;
    alert("Falta para llegar al numero secreto ");
  }
}