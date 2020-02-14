/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     var lampara;
     var marcalampara;
     var precio;
     var descuento;
     var precioydescuento;
     var resultado;
     precio = 35;
     lampara = document.getElementById("Cantidad").value;
     marcalampara = document.getElementById("Marca").value;
     descuento =0;

if (lampara >= 6)
{
    descuento = 0.5;
    
}
    else 
    {
        if (lampara == 5 && marcalampara== "ArgentinaLuz")
        {
        descuento = 0.4;
        }
        else 
        {
            if (lampara == 5)// SE PUEDE SACAR LA CONDICION "!= ARGENTINA LUZ"
            {
                descuento = 0.3;
            }
            else 
            {
                if (lampara == 4 && (marcalampara == "ArgentinaLuz" || marcalampara == "FelipeLamparas"))
                {
                    descuento = 0.25;
                }
                else
                {
                    if (lampara == 4 && !(marcalampara == "ArgentinaLuz" || marcalampara == "FelipeLamparas"))
                    {
                        descuento = 0.2;
                    }
                    else
                    {
                        if (lampara == 3 && marcalampara == "ArgentinaLuz")
                        {
                            descuento = 0.15;
                        }
                        else
                        {
                            if (lampara == 3 && marcalampara == "FelipeLamparas")
                            {
                                descuento = 0.1;
                            }
                            else
                            {
                                if (lampara == 3 && (marcalampara!= "ArgentinaLuz" && marcalampara != "FelipeLamparas"))
                                {
                                    descuento = 0.05;
                                }                            
                            }
                        }
                    }
                }
            }
        }
    }
    precioydescuento = (lampara*precio)*descuento;
    resultado = (lampara*precio)- precioydescuento;
    if (resultado > 120)
    {
    document.getElementById("precioDescuento").value = resultado + (resultado*0.1) + " Pago un impuesto del 10% equivalente a " + resultado*0.1;
    }
    else
    {
    document.getElementById("precioDescuento").value= resultado;
    }
    
}
