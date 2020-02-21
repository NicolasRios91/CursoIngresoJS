function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta= true;
while (respuesta)
{

numero = prompt("Ingrese un numero");
numero = parseInt(numero);
	while(isNaN(numero))
	{	
	numero = prompt("Ingrese un numero valido");
	numero = parseInt(numero);	
	}
		if (numero >0)
		{	
			positivo+=numero
		}
		else
		{
			negativo*=numero;
			contador++;
		}
		if (contador == 0)
		{
			negativo ="No ingreso ningun numero";
		}
respuesta = confirm("Desea ingresar otro numero?");
}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN