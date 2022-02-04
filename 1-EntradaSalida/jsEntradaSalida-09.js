/*
Lucas Soriano Baccarelli DIV E
E/S Eje9 bis
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	//declarar var
	var numeroUno;
	var numeroDos;
	//var calcuAumento;
	var resultado;

	//tomar los datos de las casillas
	numeroUno = document.getElementById("txtIdSueldo").value;

	numeroUno = parseInt(numeroUno);

	numeroDos = prompt ("Ingrese el % del aumento");

	resultado = numeroUno * numeroDos/100;
	resultado = numeroUno + resultado;


	//calcular el aumento del sueldo
	/*calcuAumento = parseInt(numeroUno) * 10 / 100 ;
	resultado = parseInt(numeroUno) + parseInt(calcuAumento);
*/
    //mostrar el resultado
	document.getElementById("txtIdResultado").value = resultado;

}
