/*
Lucas Soriano Baccarelli DIV E
E/S Eje10 bis
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{

	//declarar var
	var numeroUno;
	var numeroDos;
	var descuento;
	var  resultado;

	//Tomar los datos de la casilla de texto y desde el prompt
	numeroUno = document.getElementById("txtIdImporte").value;

	numeroUno = parseInt(numeroUno);

	numeroDos = prompt("Ingrese el % del descuento");
	//Calcular el descuento
	descuento =  numeroUno * numeroDos / 100;
	resultado = numeroUno - descuento;

	//Mostrar el resultado
	//document.getElementById("txtIdResultado").value = resultado;

	alert("Su importe es de " + numeroUno + " el descuento es de " + descuento + " y su importe con descuento es de " + resultado)

}
