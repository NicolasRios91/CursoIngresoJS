/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
function comenzar()
{
    eleccionMaquina = Math.floor(Math.random()*(4-1)+1);
    parseInt(eleccionMaquina);
    alert(eleccionMaquina);

}//FIN DE LA FUNCIÓN
function piedra()
{
    if (eleccionMaquina == 1)
    {
        alert("Empato");
    }
    else
    {
        if (eleccionMaquina == 2)
        {
            alert("Perdió");
        }
        else
        {
            alert("Ganó");
        }
    }


}//FIN DE LA FUNCIÓN
function papel()
{
    switch (eleccionMaquina)
    {
        case(1):
        alert("ganó");
        break;
        case(2):
        alert("empató");
        break;
        case(3):
        alert("perdió");
        break;

    }

}//FIN DE LA FUNCIÓN
function tijera()
{
    switch (eleccionMaquina)
    {
        case(1):
        alert("Perdió");
        break;
        case(2):
        alert("Ganó");
        break;
        case(3):
        alert("Empató");
        break;
    }
}//FIN DE LA FUNCIÓN