function mostrar()
{

	var contador=0;
	var numero;
	var sumapositivos=0;
	var sumanegativos=0;
	var contadorpositivos=0;
	var contadornegativos=0;
	var contadorceros=0;
	var contadorpares=0;
	var promediopositivos;
	var promedionegativos;
	var diferencia;


	//declarar contadores y variables 
	
	var respuesta=true;
	 
	while(respuesta)
	{
		do//ejecuto una vez y despues veo la condicion
		{numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
			
		}
		while(isNaN(numero));
		/*while (isNaN(numero))
		{
			numero = prompt("Ingrese un numero valido");
			numero = parseInt(numero);
			*/
		
		if (numero %2 ==0)
		{
			contadorpares++;
		}
		if (numero >0)
		{
			sumapositivos +=numero;
			contadorpositivos++;
		}
		else
		{
			if (numero == 0)
			{
				contadorceros++;
			}
		
			else
			{
			 
			sumanegativos += numero;
			contadornegativos++;
			
			}
		
		}
		/*
		if (contadornegativos==0)
		{
			sumanegativos=" No se ingresó ningún numero negativo";
		}
		if (contadorpositivos ==0)
		{
			sumapositivos= " No se ingreso ningun numero positivo";
		}
		if (contadorpares == 0)
		{
			contadorpares="No se ingreso ningun numero par"
		}
		if (contadorceros ==0)
		{
			contadorceros= "No se ingreso ningun 0";
		}
		*/
	
		if (isNaN(promedionegativos))
		{
			promedionegativos= 0;
		}
		if (isNaN(promediopositivos))
		{
			promediopositivos= 0;
		}
		respuesta = confirm("Desea ingresar otro numero?");
	}
	diferencia = sumapositivos + sumanegativos;
	if (contadorpositivos!=0)
	{
		promediopositivos = sumapositivos/contadorpositivos;
	}
	if (contadornegativos !=0)
	{
	promedionegativos = sumanegativos/contadornegativos;
	}
	document.write("Suma positivos = " + sumapositivos + "<br>" );
	document.write("Cantidad de positivos = " + contadorpositivos + "<br> ");
	document.write("Suma negativos = " + sumanegativos + "<br> ");
	document.write("Cantidad de negativos = " + contadornegativos + "<br> ");
	document.write("Cantidad de 0 = " + contadorceros + "<br> ");
	document.write("Cantidad de numeros pares = " + contadorpares + "<br> ");
	document.write("Promedio positivos = "+ promediopositivos + "<br> ");
	document.write("Promedio negativos = "+ promedionegativos + "<br> ");
	document.write("Diferencia = " + diferencia + "<br> ");

}