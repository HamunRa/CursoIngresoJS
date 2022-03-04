/*
Hecho en el parcial 2020, ej 1

Una empresa de venta de cosméticos necesita un programa que permita la carga de productos
vendidos,
junto a los datos del vendedor. Se requiere ingresar los siguientes campos:
• Vendedor: Juan, María, Lucrecia
• Tipo producto: Perfume, Shampoo o Maquillaje
• Importe de la venta (Numero mayor que cero)
No hay un límite total de ventas, y cada vendedor puede realizar varias ventas.
Una vez finalizada la carga de productos vendidos se debe calcular la comisión del vendedor.
Si la suma de las ventas realizadas por cada vendedor está entre 5000 y 10000, la comisión será del 15%.
Si la comisión supera los 10000, la comisión será del 20%. En caso contrario la comisión será del 5%.
Se debe mostrar:
a. Promedio de ventas por cada vendedor.
b. Cantidad de perfumes que vendió María
c. El importe más barato junto con el vendedor que lo vendió.
d. El nombre del vendedor con menor comisión.
*/

function mostrar()
{
	
	var nombreVendedor;
	var tipoProducto;
	var importe;
	var respuesta;
	var mensaje;

	var acumuladorPrecioJuan = 0;
	var acumuladorPrecioMaria = 0;
	var acumuladorPrecioLucrecia = 0;
	var cantidadVentasJuan = 0;
	var cantidadVentasMaria = 0;
	var cantidadVentasLucrecia = 0;

	var perfumesMaria = 0;

	var flagProductoBarato = 1;
	var productoBarato;
	var vendedorProdBar;

	var flagMenorComision = 1;
	var menorComision;

	var comisionJuan;
	var comisionMaria;
	var comisionLucrecia;
	
	
	respuesta = "si";

	

	while(respuesta == "si")
	{

		nombreVendedor = prompt("¿Quien está vendiendo?");
		nombreVendedor = nombreVendedor.toLowerCase();

		while(nombreVendedor != "juan" && nombreVendedor != "maria" && nombreVendedor != "lucrecia")
		{
			nombreVendedor = prompt("Error, vendedor no registrado");
			nombreVendedor = nombreVendedor.toLowerCase();
		}
		
		tipoProducto = prompt("¿Que producto vendió?");
		tipoProducto = tipoProducto.toLowerCase();

		while(tipoProducto != "perfume" && tipoProducto != "shampoo" && tipoProducto != "maquillaje")
		{
			tipoProducto = prompt("Error, producto no encontrado");
			tipoProducto = tipoProducto.toLowerCase();
		}

		importe = prompt("Ingrese el importe recibido");
		importe = parseInt(importe);

		while(isNaN(importe) || importe < 1)
		{
			importe = prompt("El importe debe ser mayor a 1");
			importe = parseInt(importe);
		}

		if(flagProductoBarato == 1 || importe < productoBarato)
		{
			productoBarato = importe;
			vendedorProdBar = nombreVendedor;
			flagProductoBarato = 0;
		}

		if(nombreVendedor == "maria" && tipoProducto == "perfume")
		{
			perfumesMaria ++;
		}

		switch(nombreVendedor)
		{
			case "juan":
				acumuladorPrecioJuan = acumuladorPrecioJuan + importe;
				cantidadVentasJuan ++;
					if(acumuladorPrecioJuan > 10000)
					{
						comisionJuan = acumuladorPrecioJuan * 20/100;
					}
					else
					{
						if(acumuladorPrecioJuan > 5000)
						{
							comisionJuan = acumuladorPrecioJuan *  15/100;
						}
						else
						{
							comisionJuan =  acumuladorPrecioJuan * 5/100;
						}
					}
				break;
			case "maria":
				acumuladorPrecioMaria = acumuladorPrecioMaria + importe;
				cantidadVentasMaria ++;
				if(acumuladorPrecioMaria > 10000)
					{
						comisionMaria =  acumuladorPrecioMaria * 20/100;
					}
					else
					{
						if(acumuladorPrecioMaria > 5000)
						{
							comisionMaria = acumuladorPrecioMaria * 15/100;
						}
						else
						{
							comisionMaria = acumuladorPrecioMaria * 5/100;
						}
					}

				break;
			case "lucrecia":
				cantidadVentasLucrecia ++;
				acumuladorPrecioLucrecia = acumuladorPrecioLucrecia + importe;
				if(acumuladorPrecioLucrecia > 10000)
					{
						comisionLucrecia =acumuladorPrecioLucrecia * 20/100;
					}
					else
					{
						if(acumuladorPrecioLucrecia > 5000)
						{
							comisionLucrecia = acumuladorPrecioLucrecia * 15/100;
						}
						else
						{
							comisionLucrecia = acumuladorPrecioLucrecia * 5/100;
							
						}
					}
				break;
		}


		respuesta = prompt("Realizó otra venta?");
		respuesta = respuesta.toLowerCase();

		while(respuesta != "si" && respuesta != "no")
		{
			respuesta = prompt("Ingrese 'si' o 'no' ");
			respuesta = respuesta.toLowerCase();
		}

	}

	if(comisionLucrecia < comisionMaria && comisionLucrecia < comisionJuan)
	{
		
		menorComision = "Lucrecia";


	}
	else
	{
		if (comisionMaria < comisionJuan && comisionMaria < comisionLucrecia)
		{
			
			menorComision = "Maria";
		}
		else
		{
			
			menorComision = "Juan";
		}
	}

	mensaje = "El promedio de ventas de Juan es de: " + acumuladorPrecioJuan/cantidadVentasJuan + "<br>";
	mensaje = mensaje + "El promedio de ventas de María es de: " + acumuladorPrecioMaria/cantidadVentasMaria + "<br>";
	mensaje = mensaje + "El promedio de ventas de Lucrecia es de: " + acumuladorPrecioLucrecia/cantidadVentasLucrecia + "<br>";
	mensaje = mensaje + "María vendió " + perfumesMaria + " perfumes" + "<br>";
	mensaje = mensaje + "La venta mas barata fue de " + vendedorProdBar + " con un precio de " + productoBarato + "<br>";
	mensaje = mensaje + "El que tiene la menor comision es " + menorComision;

	document.write(mensaje);

}


/*function mostrar() {

	var vendedor;
	var producto;
	var promedio;
	var cantidadProductos;
	var precio;
	var contador;
	var shampoo;
	var perfume;
	var maquillaje;
	var descuento;
	var respuesta;

	respuesta = "si";
	shampoo = 200;
	perfume = 400;
	maquillaje = 300;
	while (respuesta == "si"){
		
	vendedor = prompt("Ingrese el nombre del vendedor (Juan, Maria, Lucrecia)");
	while (!(vendedor == "Juan" || vendedor == "Maria" || vendedor == "Lucrecia")) {
		vendedor = prompt("Error, El vendedor debe ser (Juan, Maria, Lucrecia)");
	}
	producto = prompt("Ingrese el tipo de producto (perfume, shampoo, maquillaje)");
	while (!(producto == "shampoo" || producto == "perfume" || producto == "maquillaje")) {
		producto = prompt("Error, El producto debe ser (shampoo, perfume, maquillaje)");
	}
	cantidadProductos = prompt("Ingrese la cantidad de productos a comprar");
	while (!(cantidadProductos >= 0)) {
		cantidadProductos = prompt("Error, La cantidad de productos tiene que ser mayor a 0")
	}

	cantidadProductos = parseInt(cantidadProductos);

	switch (vendedor) {
		case "Juan":
			switch (producto) {
				case "shampoo":
					if (cantidadProductos >= 0) {
						precio = shampoo * cantidadProductos;
					}
					break;
				case "perfume":
					if (cantidadProductos >= 0) {
						precio = perfume * cantidadProductos;
					}
					break;
				case "maquillaje":
					if (cantidadProductos >= 0) {
						precio = maquillaje * cantidadProductos;
					}
					break;
			}
			break;
		case "Maria":
			switch (producto) {
				case "shampoo":
					if (cantidadProductos >= 0) {
						precio = shampoo * cantidadProductos;
					}
					break;
				case "perfume":
					if (cantidadProductos >= 0) {
						precio = perfume * cantidadProductos;
					}
					break;
				case "maquillaje":
					if (cantidadProductos >= 0) {
						precio = maquillaje * cantidadProductos;
					}
					break;
			}
			break;
		case "Lucrecia":
			switch (producto) {
				case "shampoo":
					if (cantidadProductos >= 0) {
						precio = shampoo * cantidadProductos;
					}
					break;
				case "perfume":
					if (cantidadProductos >= 0) {
						precio = perfume * cantidadProductos;
					}
					break;
				case "maquillaje":
					if (cantidadProductos >= 0) {
						precio = maquillaje * cantidadProductos;
					}
					break;
			}
			break;
	}
	respuesta = prompt("Desea seguir ingresando numeros? si/no ")
		while (respuesta != "si" && respuesta != "no") {
			respuesta = prompt("Error, desea seguir ingresando numeros?si/no");
		}
}
	if (precio >= 10000) {
		descuento = precio * 20 / 100;
		descuento = precio + descuento;
	} else if (precio >= 5000 && precio <= 10000) {
		descuento = precio * 15 / 100;
		descuento = precio + descuento;
	} else {
		descuento = precio * 5 / 100;
		descuento = precio + descuento;
	}

	alert("Total vendido: " + descuento);

} 
*/