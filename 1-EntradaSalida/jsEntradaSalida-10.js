/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{

	//declarar var
	var numeroUno;
	var calcuDescuento;
	var  resultado;

	//Tomar los datos de la casilla de texto
	numeroUno = document.getElementById("txtIdImporte").value;

	//Calcular el descuento
	calcuDescuento = parseInt(numeroUno) * 25 / 100;
	resultado = parseInt(numeroUno) - parseInt(calcuDescuento);

	//Mostrar el resultado en la casilla de texto
	document.getElementById("txtIdResultado").value = resultado;

}
