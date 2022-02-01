/*
Lucas Soriano Baccarelli DIV E
E/S Eje7
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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

function restar()
{
	//declarar var
	var numeroUno;
	var numeroDos;
	var restaTotal;

	//tomar los datos de las casillas
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	//restar las dos var
	restaTotal = parseInt(numeroUno) - parseInt(numeroDos);

	//mostrar el resultado
	alert("El resultado es: " + restaTotal);
}

function multiplicar()
{ 
	//declarar var
	var numeroUno;
	var numeroDos;
	var multiTotal;

	//tomar los datos de las casillas
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	//multiplicar las dos var
	multiTotal = parseInt(numeroUno) * parseInt(numeroDos);

	//mostrar el resultado
	alert("El resultado es: " + multiTotal);
}

function dividir()
{
	//declarar var
	var numeroUno;
	var numeroDos;
	var diviTotal;

	//tomar los datos de las casillas
	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	//dividir los datos de las var
	diviTotal = parseInt(numeroUno) / parseInt(numeroDos);

	//mostrar el resultado
	alert("El resultado es: " + diviTotal);
}