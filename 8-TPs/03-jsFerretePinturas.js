/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
var fahre;
var centi;

function FahrenheitCentigrados () 
{
    let resultado;

	fahre = document.getElementById("txtIdTemperatura").value;

    fahre = parseFloat(fahre);

    resultado = (fahre - 32) * 5/9;
    resultado = parseInt(resultado);

    alert(fahre + " Fahrenheit son " + resultado + " centígrados")
}

function CentigradosFahrenheit () 
{
	let resultado;

    centi = document.getElementById("txtIdTemperatura").value;

    centi = parseFloat(centi);

    resultado = (centi * 9/5) + 32;

    alert(centi + " centígrados son " + resultado + " Fahrenheit")
}
