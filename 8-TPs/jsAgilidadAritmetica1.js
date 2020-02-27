/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var primernumero;
var segundonumero;
var operador;
var resultado;


function comenzar()
{
    primernumero = Math.floor(Math.random()*(10-1)+1);
    segundonumero = Math.floor(Math.random()*(10-1)+1);
    document.getElementById("PrimerNumero").value = primernumero;
    document.getElementById("SegundoNumero").value = segundonumero;
    operador = Math.floor(Math.random()*(5-1)+1);
    switch (operador)
    {
        case(1):
        document.getElementById("Operador").value= "+"
        resultado = primernumero + segundonumero;
        break;
        case(2):
        document.getElementById("Operador").value= "-"
        resultado = primernumero - segundonumero;
        break;
        case(3):
        document.getElementById("Operador").value= "/"
        resultado = primernumero / segundonumero;
        break;
        case(4):
        document.getElementById("Operador").value= "*"
        resultado = primernumero * segundonumero;
        break;
    }

  

}//FIN DE LA FUNCIÓN
function Responder()
{
    respuesta = document.getElementById("Respuesta").value;
    respuesta = parseInt(respuesta);
    if (respuesta == resultado)
    {
        alert("El resultado es correcto");
        document.getElementById("Respuesta").value = "";
        comenzar();
    }
    else
    {
        alert("Es incorrecto");
    }

}//FIN DE LA FUNCIÓN
