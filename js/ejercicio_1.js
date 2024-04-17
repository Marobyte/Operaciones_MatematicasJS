function mostrar()
{
let numero1 = document.getElementById("num1").value; 
let numero2 = document.getElementById("num2").value; 
//se verifica que no sea igual a cero
if((numero1==0) || (numero1==numero2) || numero2 == 0 || numero1 < numero2 ) 
{
        let informe = "Debe Ingresar un numero Mayor a cero '0', y que no sea igual al ya ingresado, el primero numero no puede ser menor al segundo";
        alert(informe);      
}
else 
{    
        //se guarda el resultado de la suma en la variable r_suma
    //se usa ParseInt para poder sumar los valores y que no se concatenen   
    let r_suma = parseInt(numero1) + parseInt(numero2);
          
        //se guarda el resultado de la suma en la variable r_resta
    let r_resta = numero1 - numero2;
     
        // se guarda el resultado de la suma en la variable r_multi
    let r_multi = numero1 * numero2;
     
       //se guarda el resultado de la suma en la variable r_divi
    let r_divi = numero1 / numero2;
      
    // se imprime el resultado de las operaciones

      let informe = "El Resulado de las operaciones es: Suma: "+ numero1 + " + " + numero2 + " = " + r_suma + " Resta: "+ numero1 + " - " + numero2 + " = " + r_resta + " Multiplicacion: " + numero1 + " * " + numero2 + " = " + r_multi + " Division: " + numero1 + " / " + numero2 + " = " + r_divi;
      console.log(informe);
      
    }
}






