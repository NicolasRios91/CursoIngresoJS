/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
var numero1;
var numero2;
var numero1par;
var numero2par;




function sumar()
{	
    numero1=document.getElementById("numeroUno").value;
    numero1par=parseInt(numero1);
    numero2=document.getElementById("numeroDos").value;
    numero2par=parseInt(numero2);
    resultado=numero1par+numero2par;
    alert("La suma es "+ resultado);
}

function restar()
{
    numero1=document.getElementById("numeroUno").value;
    numero1par=parseInt(numero1);
    numero2=document.getElementById("numeroDos").value;
    numero2par=parseInt(numero2);
    resultado=numero1par-numero2par;
    alert("La resta es "+ resultado);
    
}

function multiplicar()
{ 
    numero1=document.getElementById("numeroUno").value;
    numero1par=parseInt(numero1);
    numero2=document.getElementById("numeroDos").value;
    numero2par=parseInt(numero2);
    resultado=numero1par*numero2par;
    alert("La multiplicacion es "+ resultado);
}

function dividir()
{
    numero1=document.getElementById("numeroUno").value;
    numero1par=parseInt(numero1);
    numero2=document.getElementById("numeroDos").value;
    numero2par=parseInt(numero2);
	resultado=numero1/numero2;
    alert("La division es "+ resultado);
}

