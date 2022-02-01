/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{

	//declarar variables
	var numUno;
	var numDos;
	var calcuDiv;

	//Tomar los datos de las casillas de texto
	numUno = document.getElementById("txtIdNumeroDividendo").value;
	numDos = document.getElementById("txtIdNumeroDivisor").value;

	//Calcula el resto
	calcuDiv = parseInt(numUno) % parseInt(numDos);

	//Muestra el resultado
	alert("El resto es: " + calcuDiv);
}
