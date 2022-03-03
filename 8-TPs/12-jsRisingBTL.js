/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso() {
	//definicion de variables
	var edadIngresada;
	var sexoIngresado;
	var estadoCivil;
	var sueldo;
	var nacionalidad;
	var numeroLegajo;

	edadIngresada = prompt("Ingrese su edad");
	edadIngresada = parseInt(edadIngresada);
	while (!(edadIngresada > 17 && edadIngresada < 91)) {
		edadIngresada = prompt("Error, debe ingresar su edad");
		edadIngresada = parseInt(edadIngresada);
	}
	document.getElementById("txtIdEdad").value = edadIngresada;

	sexoIngresado = prompt("Ingrese su sexo “M” para masculino y “F” para femenino")
	sexoIngresado = sexoIngresado.toUpperCase();
	while (sexoIngresado != "M" || sexoIngresado != "F") {
		sexoIngresado = prompt("Error, ingrese su sexo “M” para masculino y “F” para femenino")
		sexoIngresado = sexoIngresado.toUpperCase();
	}
	document.getElementById("txtIdSexo").value = sexoIngresado;

}
