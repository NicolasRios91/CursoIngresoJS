function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero = 0;
	var respuesta='si';//respuesta = true
while (respuesta =="si")
{
numero = prompt("Ingrese un numero");
if (numero=null)
{
	break;
}
numero = parseInt(numero);
	while(isNaN(numero))
	{	
	numero = prompt("Ingrese un numero valido");
	numero = parseInt(numero);	
	}
acumulador = acumulador + numero;
contador++;
respuesta = prompt("Desea ingresar otro numero?");//respuesta = confirm("....")
respuesta = respuesta.toLowerCase();
}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN