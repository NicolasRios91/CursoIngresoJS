/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
var grado;
var numero;
var resultado;


function FahrenheitCentigrados () 
{
    grado = document.getElementById("Temperatura").value;
    numero = parseInt(grado);
    resultado = Math.round((numero-32)*5/9);
    document.getElementById("Temperatura").value =numero + " grados Farenheit equivalen a " + resultado + " grados Celcius";
}

function CentigradosFahrenheit () 
{
    grado = document.getElementById("Temperatura").value;
    numero = parseInt(grado);
    resultado = Math.round((numero*9/5)+32);
    document.getElementById("Temperatura").value= numero + " grados Celcius equivalen a " + resultado + " grados Farenheit";
}
