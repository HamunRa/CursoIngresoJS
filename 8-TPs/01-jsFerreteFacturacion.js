/*
Lucas Soriano Baccarelli DIV E
E/S TP1
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

//declarar variables
var numUno;
var numDos;
var numTres;
var resultado;

function Sumar () 
{
    //Tomar los datos ingresados en las casillas de texto
	numUno = document.getElementById("txtIdPrecioUno").value;
    numDos = document.getElementById("txtIdPrecioDos").value;
    numTres = document.getElementById("txtIdPrecioTres").value;

    numUno = parseInt(numUno);
    numDos = parseInt(numDos);
    numTres = parseInt(numTres);

    //Sumar todos los datos
    resultado = numUno + numDos + numTres;

    //Mostrar el resultado
    alert("El total es: " + resultado)
}
function Promedio () 
{

	//Tomar los datos ingresados en las casillas de texto
	numUno = document.getElementById("txtIdPrecioUno").value;
    numDos = document.getElementById("txtIdPrecioDos").value;
    numTres = document.getElementById("txtIdPrecioTres").value;

    numUno = parseInt(numUno);
    numDos = parseInt(numDos);
    numTres = parseInt(numTres);

    //Calcular el promedio
    resultado = (numUno + numDos + numTres) / 3;

    //mostrar resultado
    alert("El promedio es: " + resultado)

}
function PrecioFinal () 
{

	//Tomar los datos ingresados en las casillas de texto
	numUno = document.getElementById("txtIdPrecioUno").value;
    numDos = document.getElementById("txtIdPrecioDos").value;
    numTres = document.getElementById("txtIdPrecioTres").value;

    numUno = parseInt(numUno);
    numDos = parseInt(numDos);
    numTres = parseInt(numTres);

    //Calcular el precio final con iva
    resultado = (numUno + numDos + numTres) *1.21;

    //mostrar resultado
    alert("El precio final es: " + resultado)

}