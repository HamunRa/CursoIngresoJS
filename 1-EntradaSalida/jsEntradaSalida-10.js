/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{

	//declarar var
	var numeroUno;
	var descuento;
	var  resultado;

	//Tomar los datos de la casilla de texto
	numeroUno = document.getElementById("txtIdImporte").value;

	//Calcular el descuento
	descuento = parseInt(numeroUno) * 25 / 100;
	resultado = parseInt(numeroUno) - parseInt(descuento);

	//Mostrar el resultado en la casilla de texto
	document.getElementById("txtIdResultado").value = resultado;

}
