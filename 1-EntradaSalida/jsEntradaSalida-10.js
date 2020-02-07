/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
    var importepar;
    var descuento;
    var resultado;
    importe=document.getElementById("importe").value;
    importepar=parseInt(importe);
    descuento=importepar*0.25; // forma de sacar el porcentaje de descuento
    resultado=importepar-descuento;
    document.getElementById("resultado").value=resultado;
}
