var respuesta = true;
var numero;
var letra;
var numerosPares = 0;
var numerosImpares = 0;
var contadorCeros = 0;
var promedioPositivos = 0;
var contadorPositivos = 0;
var sumaNegativos = 0;
var min;
var max;
var letraMenor;
var letraMayor;
var contador=true;//para asignar max y min
var acumulador;

function mostrar()
{
do
{

    do
    {
        numero = prompt("Ingrese un numero");
        numero = parseInt(numero);
    }   while(isNaN(numero) || numero >-100 || numero<100 );
    
    do
    {
        letra = prompt("Ingrese una letra");
    }   while(!isNaN(letra));

    if (numero %2==0 && numero!=0 ) //punto 1
    {
        numerosPares++;
    }
    else //punto 2 tengo que sacar el 0 de los impares
    {
        if (numero %2!=0 && numero!=0)
        numerosImpares++;   
    }
    if (numero == 0) //punto 3
    {
        contadorCeros++;
    }
    else
    {
        if (numero >0) //punto 4
        {
            promedioPositivos +=numero;
            contadorPositivos++;
        }
        else //punto 5
        {
            sumaNegativos+=numero;
        }
    }
    if (contador)//punto 6
    {
        min = numero;
        max = numero;
        letraMayor = letra;
        letraMenor = letra;
        contador=false;
    }
    else
    {
        if (numero >max)
        {
            max = numero;
            letraMayor = letra;
        }
        else
        {
            min = numero;
            letraMenor = letra;   
        }
    }
acumulador = promedioPositivos/contadorPositivos;

respuesta = confirm("Deseas continuar?");
}while (respuesta);

console.log("Numeros pares  "+numerosPares);
console.log("Numeros impares "+ numerosImpares);
console.log("Cantidad de 0 = "+contadorCeros);
console.log("Promedio de numeros positivos "+acumulador);
console.log("Suma de negativos = " +sumaNegativos);
console.log("El numero maximo es "+max +" y su letra es "+letraMayor);
console.log("El numero minimo es "+min+" y su letra es "+letraMenor);
}

