function mostrar()
{

	var contador=0;
	var acumulador=0;
	
while (contador <5)
{
	var numero=0;
	numero = prompt("Ingrese un numero");
	numero = parseInt(numero);
	while(isNaN(numero))
	{	
	numero = prompt("Ingrese un numero valido");
	numero = parseInt(numero);	
	}
	acumulador = acumulador + numero;
	contador++;
}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN