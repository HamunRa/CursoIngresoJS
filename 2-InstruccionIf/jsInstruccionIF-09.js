function mostrar()
{
	//declarar varialbes
	var numero;
	var numeroMax;
	var numeroMin;

	//asignar valores a mis variales
	numeroMax = 10;
	numeroMin = 1;

	//hacer el numero random
	numero = Math.round(Math.random() * (numeroMax - numeroMin) + numeroMin);

	alert(numero);
}//FIN DE LA FUNCIÓN