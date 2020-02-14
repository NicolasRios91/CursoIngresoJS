/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var preciouno;
var preciodos;
var preciotres;
var suma;
var sumaiva;
var promedio;
var preciofinal;

function Sumar () 
{
    preciouno = document.getElementById("PrecioUno").value;
    preciouno = parseInt(preciouno);
    preciodos = document.getElementById("PrecioDos").value;
    preciodos = parseInt(preciodos);
    preciotres = document.getElementById("PrecioTres").value;
    preciotres = parseInt(preciotres);
    suma = preciouno + preciodos + preciotres;
    alert("La suma es "+suma);
}
function Promedio () 
{
    preciouno = document.getElementById("PrecioUno").value;
    preciouno = parseInt(preciouno);
    preciodos = document.getElementById("PrecioDos").value;
    preciodos = parseInt(preciodos);
    preciotres = document.getElementById("PrecioTres").value;
    preciotres = parseInt(preciotres);
    promedio = (preciouno + preciotres + preciodos)/3;
    alert ("El promedio es "+ Math.round(promedio));
}
function PrecioFinal () 
{
	preciouno = document.getElementById("PrecioUno").value;
    preciouno = parseInt(preciouno);
    preciodos = document.getElementById("PrecioDos").value;
    preciodos = parseInt(preciodos);
    preciotres = document.getElementById("PrecioTres").value;
    preciotres = parseInt(preciotres);
    sumaiva = preciouno + preciodos + preciotres;
}