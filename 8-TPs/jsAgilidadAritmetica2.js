/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
 var respuesta;
 var primernumero;
 var segundonumero;
 var operador;
 var resultado;
 var temporizador;
 
 function terminar()
 {
     console.log("Termino");
     alert("termino");
     comenzar();
 }
 
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
 setTimeout(terminar,4000)
 //setInterval la ejecuta varias veces
   
 
 }//FIN DE LA FUNCIÓN
 function Responder()
 {
     respuesta = document.getElementById("Respuesta").value;
     respuesta = parseInt(respuesta);
     if (respuesta == resultado)
     {
         alert("El resultado es correcto");
         comenzar();
         document.getElementById("Respuesta").value = "";
     }
     else
     {
         alert("Es incorrecto");
     }
 
 }