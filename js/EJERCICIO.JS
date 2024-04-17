
var numero1 =10; 
var numero2 = 20;

console.log( "El Resulado de la Suma: "+ numero1 + " + " + numero2 + " = " + sumar(numero1,numero2) + " Resta: "+ numero1 + " - " + numero2 + " = " + restar(numero1,numero2) + " Multiplicacion: " + numero1 + " * " + numero2 + " = " + multiplicar(numero1,numero2) + " Division: " + numero1 + " / " + numero2 + " = " + dividir(numero1,numero2));


function sumar(numero1,numero2)
{

    //se usa ParseInt para poder sumar los valores y que no se concatenen   
    
    return numero1 + numero2
}

function restar(numero1,numero2)  
{       
        //se guarda el resultado de la suma en la variable r_resta
        return numero1 - numero2
}

function multiplicar (numero1,numero2)  
{   
        // se guarda el resultado de la suma en la variable r_multi
        return numero1 * numero2
}
    function dividir(numer1,numero2)     {
       //se guarda el resultado de la suma en la variable r_divi
       return numero1 / numero2
 }
      
    