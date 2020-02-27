var respuesta = true;
var numero;
var letra;
var numerosPares=0;
var numerosImpares =0;
var contadorCeros = 0;
var promedioPositivos;
var SumaPositivos;
var contadorPositivos;
var sumaNegativos=0;

function mostrar()
{
do
{
{
    do
    {
        numero = prompt("Ingrese un numero");
        numero = parseInt(numero);
    }   while(isNaN(numero && numero >-100 && numero<100 ));
    
    do
    {
        letra = prompt("Ingrese una letra");

    }   while(!isNaN(letra));
    if (numero %2==0)
    {
        numerosPares++;
    }
    else
    {
        numerosImpares++;
    }
    if (numero ==0)
    {
        contadorCeros++;
    }
    if (numero >0)
    {
        SumaPositivos +=numero;
    }
    else
    {
        sumaNegativos+=numero;
    }

}
respuesta = confirm("Deseas continuar?");
}while (respuesta);
console.log("Numeros pares  "+numerosPares);
console.log("Numeros impares "+ numerosImpares);
console.log("Cantidad de 0 = "+contadorCeros);
console.log()
}
