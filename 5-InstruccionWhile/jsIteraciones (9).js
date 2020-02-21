function mostrar()
{

	var contador=0;
	var mayor=0;
	var menor=0;
	var primerainteraccion=true;
	var respuesta=true;

	while(respuesta)
	{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
			while(isNaN(numero))
			{
			numero = prompt("Ingrese un numero valido");
			numero = parseInt(numero);
			
			}
			if (primerainteraccion)//BANDERA
			{
				mayor = numero;
				menor = numero;	
				primerainteraccion=false;
			}
			else
			{
				if (numero > mayor)
					{
					mayor=numero;
					}
			
				if (numero < menor)
					{
					menor= numero;
					}
			}	
	
		respuesta = confirm("Desea poner otro número?");
	}
document.getElementById("maximo").value = mayor;
document.getElementById("minimo").value = menor;

}

