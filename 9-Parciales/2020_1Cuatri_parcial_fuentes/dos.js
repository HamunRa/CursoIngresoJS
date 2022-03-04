/*
Hecho en el parcial 2020, ej 2

2. Se necesita llevar el registro de un vacunatorio. Para ello se podrá registrar los datos de las
personas vacunadas mientras el usuario quiera.
De cada vacunado se solicita:
Nombre
Edad (mayor o igual a 12)
Vacuna (“rusa”, “china”, “americana”)
Si la edad esta entre 12 y 17 años ambos incluidos solo se permite la vacuna americana
Dosis (“P” en caso de ser la primera dosis o “S” en caso de ser la segunda dosis)
Genero (Femenino, Masculino)
Informar:

a- Promedio de edad de los que se vacunaron con la china.
b- Nombre y vacuna del masculino más joven.
c- De las personas que recibieron la vacuna americana que porcentaje son menores de edad
d- Porcentaje de los que están vacunados con 1 dosis sobre el total de vacunados
e- Vacuna más inoculada
*/

function mostrar()
{
  
	var nombreIngresado;
	var vacuna;
	var edad; //mayor o igual a 12
	var dosis;
	var genero;
	var vacunadosTotal = 0;

	var cantidadChina = 0;
	var acumuladorEdadChina = 0;
	var cantidadRusa = 0;
	var cantidadAmericana = 0;

	var edadMasJoven;
	var nombreMasJoven;
	var vacunaMasJoven;
	var flagMasJoven = 1;

	var vacunaAmericanaMayor = 0;
	var vacunaAmericanaMenor = 0;

	var primeraDosis = 0;

	var vacunaMasUsada;

	var respuesta = "si";
	var mensaje;

	while(respuesta == "si")
	{
		vacunadosTotal ++;

		nombreIngresado = prompt("Ingrese el nombre del vacunado/a");
		while(!(isNaN(nombreMasJoven)))
		{
			nombreIngresado = prompt("Error, reingrese el nombre del vacunado/a");
		}

		edad = prompt("Ingrese la edad del vacunado.");
		edad = parseInt(edad);

		while (isNaN(edad) || edad < 11)
		{
			edad = prompt("No puede ser menor de 12 años");
			edad = parseInt(edad);
		}

		vacuna = prompt("Ingrese la vacuna inoculada. (rusa, china o americana)");
		vacuna = vacuna.toLowerCase();

		while (vacuna != "rusa" && vacuna != "china" && vacuna != "americana")
		{
			vacuna = prompt("Error, vacuna no registrada. (rusa, china o americana)");
			vacuna = vacuna.toLowerCase();
		}
		while (vacuna != "americana" && edad < 18)
		{
			vacuna = prompt("Error, los menores solo pueden vacunarse con la americana");
			vacuna = vacuna.toLowerCase();
		}

		dosis = prompt("Ingrese la dosis dada (P o S).");
		dosis = dosis.toLowerCase();

		while (dosis != "p" && dosis != "s")
		{
			dosis = prompt("Error, debe ingresarse P para primera y S para segunda.");
			dosis = dosis.toLowerCase();
		}

		genero = prompt("Ingrese el genero del vacunado (M o F).");
		genero = genero.toLowerCase();

		while (genero != "m" && genero != "f")
		{
			genero = prompt("Error, debe ingresarse M para masculino y F para femenino.");
			genero = genero.toLowerCase();
		}

		if(genero == "m" && (flagMasJoven == 1 || edadMasJoven < edad))
		{
			edadMasJoven = edad;
			vacunaMasJoven = vacuna;
			nombreMasJoven = nombreIngresado;
			flagMasJoven = 0; 
		}

		if (dosis == "p")
		{
			primeraDosis ++;
		}

		switch(vacuna)
		{
			case "china":
				cantidadChina ++;
				acumuladorEdadChina = acumuladorEdadChina + edad;
				break;
			case "americana":
				cantidadAmericana ++;
				if (edad < 18)
				{
					vacunaAmericanaMenor ++;
				}
				break;
			case "rusa":
				cantidadRusa ++;
				break;
		}
		
		if(cantidadRusa > cantidadChina && cantidadRusa > cantidadAmericana)
		{
			vacunaMasUsada = "Rusa";
		}
		else
		{
			if (cantidadChina > cantidadRusa && cantidadChina > cantidadAmericana)
			{
				vacunaMasUsada = "China";
			}
			else
			{
				vacunaMasUsada = "Americana";
			}
		}

		respuesta = prompt("Seguir ingresando vacunados?");
		respuesta = respuesta.toLowerCase();

		while(respuesta != "si" && respuesta != "no")
		{
			respuesta = prompt("Ingrese 'si' o 'no' ");
			respuesta = respuesta.toLowerCase();
		}

	}

	mensaje = "El promedio de edad de los que se vacunaron con la china es de " + acumuladorEdadChina/cantidadChina + "<br>";
	mensaje = mensaje + "El vacunado mas joven es " + nombreMasJoven + " y se dio la " + vacunaMasJoven + "<br>";
	mensaje = mensaje + "De los que se dieron la americana, " + vacunaAmericanaMenor/cantidadAmericana * 100 + "% son menores" + "<br>";
	mensaje = mensaje + "Del total de vacunados, un " + primeraDosis/vacunadosTotal * 100 + "% tienen solo la primera dosis." + "<br>";
	mensaje = mensaje + "La vacuna mas inoculada es la " + vacunaMasUsada;

	document.write(mensaje)

}
