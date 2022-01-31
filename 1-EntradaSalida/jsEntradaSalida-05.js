/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{

	//declarar var
	var tomarEdad;
	var tomarNombre;

	//guardar los datos en las var
	tomarNombre = txtIdNombre.value;
	tomarEdad = txtIdEdad.value;

	alert("Usted se llama: " + tomarNombre + " y tiene " + tomarEdad + " años");
}

