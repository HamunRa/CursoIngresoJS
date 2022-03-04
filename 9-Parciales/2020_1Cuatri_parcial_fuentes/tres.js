/*
Hecho en el parcial 2020, ej 3

3. Llegan vuelos con vacunas de distintos lugares del mundo
Mientras el usuario quiera se debe registrar de cada vuelo:
-Origen (“Asia”, “Europa”, “América”)
-Cantidad de vacunas (entre 500000 y 2500000)
-Costo del vuelo (entre 1 millón y 5 millones de pesos)
Informar:
a- El origen que envió menor cantidad de vacunas
b- El total sin descuentos a pagar por los gastos de los viajes

c- Si en total se recibieron mas de 10 millones de vacunas se hace
un descuento de 25%, Si se recibieron entre 5 y 10 millones (inclusive) el
descuento es del 15% con menor cantidad no hay descuento.
Informar si hubo descuento de cuanto fue y el importe final con
Descuento.

*/

function mostrar()
{
	var respuesta = "si";
	var mensaje; 

	var origen;
	var cantidadVacunas;
	var costo;

	var menorCantidad;
	var origenMenorCantidad;
	var flagMenorCantidad = 1;

	var totalCostoSD = 0; // SD = sin descuento

	var cantidadTotal = 0;
	var descuento;
	var costoFinal;

	var totalAsia = 0;
	var totalAmerica = 0;
	var totalEuropa = 0;

	


	while(respuesta == "si")
	{

		origen = prompt("De donde viene el avion?")
		origen = origen.toLowerCase();

		while(origen != "asia" && origen != "europa" && origen != "america")
		{
			origen = prompt("Origen no valido.")
			origen = origen.toLowerCase();
		}

		cantidadVacunas = prompt("Ingrese la cantidad de vacunas");
		cantidadVacunas = parseInt(cantidadVacunas);

		while(isNaN(cantidadVacunas) || cantidadVacunas < 500000 || cantidadVacunas > 2500000)
		{
			cantidadVacunas = prompt("La cantidad debe ser entre 500000 y 2500000");
			cantidadVacunas = parseInt(cantidadVacunas);
		}

		costo = prompt("Ingrese el costo del vuelo");
		costo = parseInt(costo);

		while(isNaN(costo) || costo < 1000000 || costo > 5000000)
		{
			costo = prompt("El costo debe ser entre un millon y cinco millones");
			costo = parseInt(costo);
		}

		if(flagMenorCantidad == 1)
		{
			menorCantidad = cantidadVacunas;
			origenMenorCantidad = origen;
			flagMenorCantidad = 0;
		}


		totalAsia = totalAsia + cantidadVacunas;
		
		totalEuropa = totalEuropa + cantidadVacunas;
		
		totalAmerica = totalAmerica + cantidadVacunas;
		
		totalCostoSD = totalCostoSD + costo;
		cantidadTotal = cantidadTotal + cantidadVacunas;

		respuesta = prompt("Ingresar mas datos?");
		respuesta = respuesta.toLowerCase();

		while(respuesta != "si" && respuesta != "no")
		{
			respuesta = prompt("Ingrese 'si' o 'no' ");
			respuesta = respuesta.toLowerCase();
		}

		if (cantidadTotal >= 10000000)
		{
			descuento = 25;
		}
		else
		{
			if(cantidadTotal >= 5000000)
			{
				descuento = 15;
			}
			else
			{
				descuento = 0;
			}
		}

		costoFinal = totalCostoSD - (totalCostoSD * descuento/100)
	}
	
	if(totalAsia < totalEuropa && totalAsia < totalAmerica)
		{
			origenMenorCantidad = "Asia";
		}
		else
		{
			if(totalEuropa < totalAsia && totalEuropa < totalAmerica)
			{
				origenMenorCantidad = "Europa";
			}
			else
			{
				origenMenorCantidad = "America";
			}
		}

	mensaje = "El origen que envió menos vacunas es " + origenMenorCantidad + "<br>";
	mensaje = mensaje + "Si no se aplican descuentos, el costo de los viajes seria $" + totalCostoSD + "<br>";
	if (descuento == 0)
	{
		mensaje = mensaje + "No se llegó a la cantidad necesaria de vacunas para aplicar un descuento.";
	}
	else
	{
		mensaje = mensaje + "Pero al llegar a la cantidad de " + cantidadVacunas + " de vacunas, se aplica un " + descuento + "% de descuento, siendo el precio final $" + costoFinal;
	}

	document.write(mensaje);
}

