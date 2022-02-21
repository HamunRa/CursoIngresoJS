/*
Lucas Soriano Baccarelli DIV E
E/S TP2
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

//declrar variables
var largo;
var ancho;
var radio;
var resultado;
function Rectangulo() {

    //tomar los datos de las casillas
    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    resultado = largo * 2 + ancho * 2;
    resultado = resultado * 3;

    alert("La cantidad de alambre necesitada es de: " + resultado + " m");
    ;
}
function Circulo() {
    let area;
    let alambre;
    PI = Math.PI;

    //tomar el dato de la casilla
    radio = document.getElementById("txtIdRadio").value;

    radio = parseInt(radio);

    //calcular el area
    area = PI * radio * radio;
    alambre = area * 3;

    alert("La cantidad de alambre necesitada es de: " + alambre + " m");
}
function Materiales() {
    let bolsas;
    let cal;

    //tomar los datos de las casillas
    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);
    bolsas = parseInt(bolsas);
    cal = parseInt(cal);

    bolsas = 2;
    cal = 3;

    //calcular la cantidad de bolsas y de cal
    resultado = largo * ancho;
    bolsas = resultado * bolsas;
    cal = resultado * cal;

    alert("La cantidad de bolsas de cemento es de: " + bolsas + " y la cantidad de cal es de: " + cal)

}