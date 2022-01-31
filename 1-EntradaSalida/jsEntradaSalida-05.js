/*
Lucas Soriano Baccarelli DIV E
E/S Eje5
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{

	//declarar var
	var tomarEdad;
	var tomarNombre;

	//guardar los datos en las var
	tomarNombre = document.getElementById("txtIdNombre").value;

	tomarEdad = document.getElementById("txtIdEdad").value;

	//Mostrar los datos en pantalla
	alert("Usted se llama: " + tomarNombre + " y tiene " + tomarEdad + " años");
}

