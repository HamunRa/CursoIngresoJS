/*
Lucas Soriano Baccarelli DIV E
IF Eje9
*/
function mostrar() {
	//declarar variables
	var numero;
	var numeroMax;
	var numeroMin;

	//asignar los valores
	numeroMax = 10;
	numeroMin = 1;

	//hacer el numero random
	numero = Math.round(Math.random() * (numeroMax - numeroMin) + numeroMin);

	alert(numero);
}//FIN DE LA FUNCIÓN