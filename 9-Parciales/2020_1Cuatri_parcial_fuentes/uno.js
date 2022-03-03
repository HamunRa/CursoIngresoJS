
function mostrar() {

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
