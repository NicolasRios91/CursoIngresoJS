/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var importe;
    var importepar;
    var aumento;
    var resultado;
    importe=document.getElementById("sueldo").value;
    importepar=parseInt(importe);
    aumento=(10*importe)/100;
    resultado=importepar+aumento;
    document.getElementById("resultado").value=resultado;
	
}
