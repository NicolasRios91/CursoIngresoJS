function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numerorandom;
	numerorandom = Math.floor(Math.random()*(11-1)+1);
	if (numerorandom >=9){				////MAX - MIN + MIN
		alert(numerorandom +" Excelente");
	}else if (numerorandom >4)
	{
		alert(numerorandom +" Aprobó")
	}else
	{
		alert(numerorandom +" Vamos, la proxima se puede");
	}
	

}//FIN DE LA FUNCIÓN