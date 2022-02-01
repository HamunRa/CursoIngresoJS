/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	//declarar var
	var numeroUno;
	var calcuAumento;

	//tomar los datos de las casillas
	numeroUno = document.getElementById("txtIdSueldo").value;

	//calcular el aumento del sueldo
	calcuAumento = parseInt(numeroUno) * 10 / 100 ;

	//mostrar el resultado
	document.getElementById("txtIdResultado").value = calcuAumento;
}
