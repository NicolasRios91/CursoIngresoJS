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
    aumento=importepar*0.10; //aumento x 0.10, en vez de usar la regla de 3 simple
    resultado=importepar+aumento;
    document.getElementById("resultado").value=resultado;
	
}
