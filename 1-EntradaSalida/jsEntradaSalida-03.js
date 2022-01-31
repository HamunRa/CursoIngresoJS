/*
Lucas Soriano Baccarelli DIV E
E/S Eje3
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//declarar var
	var nombreIngresado;

	//tomar el dato de la casilla
	nombreIngresado = document.getElementById("txtIdNombre").value;

	//mostrar el dato
	alert("Su nombre es " + nombreIngresado);

}


