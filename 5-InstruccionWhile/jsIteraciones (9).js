function mostrar()
{

	var contador=0;
	var mayor=0;
	var menor=0;
	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')
	{
		contador++;
		var numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		while(isNaN(numero))
		{
		numero = prompt("Ingrese un numero valido");
		numero = parseInt(numero);
		}
		if (numero > mayor)
		{
			mayor=numero;
		}
		if (numero <menor)
		{
			menor=numero;
		}
		respuesta = prompt("Desea seguir?");
		respuesta = respuesta.toLowerCase();
	}
document.getElementById("maximo").value = mayor;
document.getElementById("minimo").value = menor;

}//FIN DE LA FUNCIÓN