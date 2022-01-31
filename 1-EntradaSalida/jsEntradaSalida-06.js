/*
Lucas Soriano Baccarelli DIV E
E/S Eje6
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//declarar var
	var numeroUno;
	var numeroDos;
	var sumaTotal;

	//tomar los datos de las casillas
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	//sumar las dos var
	sumaTotal = parseInt(numeroUno) + parseInt(numeroDos);

	//mostrar el resultado
	alert("El resultado es: " + sumaTotal);
}

