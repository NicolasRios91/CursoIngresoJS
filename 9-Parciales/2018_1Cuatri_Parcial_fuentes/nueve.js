var marca;
var peso;
var temperatura;
var temperaturaPar = 0;
var temperaturaMenorCero = 0;
var acumuladorPeso = 0;
var marcaMasPesada;
var maxPeso;
var minPeso;
var respuesta = true;
var bandera = true;
var contador = 0;

function mostrar()
{
    do
    {   
        
        marca = prompt("Ingrese la marca del producto");
       
        while (marca == "")
        {
        marca = prompt("Ingrese una marca correcta"); 
        }
       
        do
        {
            peso = prompt("Ingrese el peso entre 1 y 100");  
            peso = parseInt(peso);
        }while(isNaN(peso) || peso >100 || peso <1 );
    acumuladorPeso = acumuladorPeso + peso;
        do
        {
            temperatura = prompt("ingrese la temperatura entre -30 y 30");
            temperatura = parseInt(temperatura);
        }while(isNaN(temperatura) || temperatura <-30 || temperatura >30);
        if (temperatura %2 ==0 &&temperatura!=0)
        {
            temperaturaPar++;
        }
        if (bandera)
        {
            marcaMasPesada = marca;
            minPeso = peso;
            maxPeso = peso;
            bandera= false
        }
        else
        {
            if (peso >maxPeso)
            {
                marcaMasPesada = marca;
                maxPeso= peso;
            }
            else
            {
                if (peso < minPeso)
                {
                    minPeso = peso;
                }
            }
        }    
        if (temperatura <0)
        {
            temperaturaMenorCero++
        }   
    
    contador++;
    respuesta = confirm ("desea continuar?");
    }while (respuesta);
acumuladorPeso = acumuladorPeso/contador;
console.log("Temperaturas pares: "+ temperaturaPar);
console.log("Marca producto mas pesado: " +marcaMasPesada);
console.log("Productos conservados a -0: "+ temperaturaMenorCero);
console.log("Promedio peso productos: " +acumuladorPeso);
console.log("Peso maximo: "+ maxPeso);
 console.log("Peso minimo: "+ minPeso);
    
}
