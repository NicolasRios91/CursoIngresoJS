function mostrar()
{
//tomo la edad  
var edad;
edad = document.getElementById("edad").value;
var estadocivil;
estadocivil = document.getElementById("estadoCivil").value;
if (!(edad < 18 && estadocivil != "Soltero")) {
    alert ("Es soltero y no es menor");
}
	


}//FIN DE LA FUNCIÓN