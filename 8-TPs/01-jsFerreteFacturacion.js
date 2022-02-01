/*1.	Para el departamento de facturación:
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
    alert("El tolta es: " + resultado)
}
function Promedio () 
{
    let promedio;

	//Tomar los datos ingresados en las casillas de texto
	numUno = document.getElementById("txtIdPrecioUno").value;
    numDos = document.getElementById("txtIdPrecioDos").value;
    numTres = document.getElementById("txtIdPrecioTres").value;

    numUno = parseInt(numUno);
    numDos = parseInt(numDos);
    numTres = parseInt(numTres);

    //Mostrar el promedio
    resultado = numUno + numDos + numTres;
    promedio = resultado / 3 ;

    //mostrar resultado
    alert("El promedio es: " + promedio)

}
function PrecioFinal () 
{
    let iva;

	//Tomar los datos ingresados en las casillas de texto
	numUno = document.getElementById("txtIdPrecioUno").value;
    numDos = document.getElementById("txtIdPrecioDos").value;
    numTres = document.getElementById("txtIdPrecioTres").value;

    numUno = parseInt(numUno);
    numDos = parseInt(numDos);
    numTres = parseInt(numTres);

    //Mostrar el promedio
    resultado = numUno + numDos + numTres;
    iva = resultado * 21/100;
    iva = resultado + iva;

    alert("El precio con iva es: " + iva)

}