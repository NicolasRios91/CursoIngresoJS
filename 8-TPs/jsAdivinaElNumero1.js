/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto;
var numeroingresado;
var contadorIntentos;
var contadorIntentos = 1;
function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
   numeroSecreto = Math.floor(Math.random()*100+1);// *(max - min) + min
		//alert(numeroSecreto);

}

function verificar()
{
 numeroingresado = document.getElementById("numero").value;
 while (numeroingresado != numeroSecreto)
 {
   
    if (numeroingresado < numeroSecreto)
     {
       alert("falta");
       contadorIntentos++;
       break;
     }
     else 
     {
       alert("Se paso");
       contadorIntentos++;
       break;
     }
   }
   if (numeroingresado == numeroSecreto)
   {
     document.getElementById("intentos").value = "ganaste en "+ contadorIntentos + " intentos";
   }
}

