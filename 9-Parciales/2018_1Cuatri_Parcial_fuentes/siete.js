function mostrar()
{
var nota;
var totalNotas=0;
var sexo;
var contadorMasculino =0;
var contadorFemenino =0;
var promedio;
var notaBaja;
var sexoNotaBaja;
var contadorAlumnos = 0;

while (contadorAlumnos <5)
{
contadorAlumnos++;
do
{
nota = prompt("Ingrese la nota");
nota = parseInt(nota);
totalNotas +=nota;
}while (isNaN(nota)||nota<0 || nota>10 );
do
{
    sexo = prompt("ingrese el sexo");
    sexo = sexo.toLowerCase();
}while (sexo !="f" && sexo != "m")
    
    if (contadorAlumnos==1)
    {
        notaBaja=nota;
        sexoNotaBaja= sexo;
    }
    else
    {
        if (notaBaja >nota)
        {
            notaBaja=nota;
            sexoNotaBaja=sexo;
        }
    }
    if (nota >=6 && sexo =="m")
    {
        contadorMasculino++;
    }
}
promedio = totalNotas /contadorAlumnos;
console.log("Promedio " + promedio);
console.log("nota mas baja "+ notaBaja + " " + sexoNotaBaja);
console.log("Cantidad de varones con nota mayor a 6 = "+""+ contadorMasculino+"");
}
