/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    
    //declaro las variables
    var precioLamp;
    var cantidadLamparas;
    var descuento;
    var marca;
    var precioFinal;
    var impIIBB;

    //obtengo los datos
    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;
    cantidadLamparas = parseInt(cantidadLamparas);

    precioLamp = 35;
    precioFinal = precioLamp * cantidadLamparas;
    descuento = 0;
    
}
   





/* 

    if (cantidadLamparas >= 6) {

        descuento = (precioFinal * 50 / 100);

    } else if (cantidadLamparas == 5) {
        if (marca == "ArgentinaLuz") {

            descuento = (precioFinal * 40 / 100);

        } else {

            descuento = (precioFinal * 30 / 100);

        }
    } else if (cantidadLamparas == 4) {
        if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") {

            descuento = (precioFinal * 25 / 100);

        } else {

            descuento = (precioFinal * 20 / 100);

        }
    } else if (cantidadLamparas == 3) {
        if (marca == "ArgentinaLuz") {

            descuento = (precioFinal * 15 / 100);

        } else if (marca == "FelipeLamparas") {

            descuento = (precioFinal * 10 / 100);

        } else {

            descuento = (precioFinal * 5 / 100);

        }
    }

    if (precioFinal > 120) {

        impIIBB = precioFinal * 10 / 100;
        precioFinal = precioFinal + impIIBB;
        alert("Usted pago " + impIIBB + " de IIBB.");

    }

    precioFinal = precioFinal - descuento;
    document.getElementById("txtIdprecioDescuento").value = precioFinal;
*/
