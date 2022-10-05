
// if 
/*
let edad = 17;
let trago = '';

if (edad >=18){
    trago = 'cerveza';
}else{
    trago = 'jugo de manzana';
}
console.log ("trago");*/

// switch 
/*
let nivelDeSatisfaccion = 4;

switch(nivelDeSatisfaccion){
    case 1:
        console.log('Muy Descontento');
        break;
    case 2:
        console.log('No muy contento');
        break;
    case 3:
        console.log('contento');
        break;
    case 4:
        console.log('Muy contento');
        break;
    default:
        console.log('Repugnante ');                
}
*/



/* expresion else if ...*/

const cat1A = 2500; //16-25 años, hombre
const cat1B = 2350; //16-25 años, mujer
const cat2A = 2000; // 26-39 años hombre
const cat2B = 1850; // 26-39 años mujer
const cat3A = 1500; // 40-85 años  hombre
const cat3B = 1250; // 40-85 pero menos de 86 años  mujer

const generaCuota = (genero, edad) => {
    
    //Declaramos las variables
    genero = document.getElementById('genero').value;
    edad = document.getElementById('edad').value;
    let msj = '';
    let precio = 0;

    //Chequeamos si se coloco el valor de la edad

    if(edad === ''){
        msj = 'Necesitamos su EDAD para generar una CUOTA';
    }

    //Generamos el mensaje para menores de 16 años

    else if(edad < 16){
        msj = 'Todavia no puede comprar seguro de auto';
    }
 

    //Generamos la cuota para mayores a 16 pero menores a 26;    
    
    else if((edad < 26) && (genero === 'hombre')){
        msj ='El precio de su poliza es: ';
        precio = cat1A;
    }else if((edad < 26) && (genero === 'mujer')){
        msj ='El precio de su poliza es: ';
        precio = cat1B;

    //Generamos la cuota para mayores de 25 pero menores a 40
    
    } else if((edad < 40) && (genero === 'hombre')){
        msj ='El precio de su poliza es: ';
        precio = cat2A;
    } else if((edad < 40) && (genero === 'mujer')){
        msj ='El precio de su poliza es: ';
        precio = cat2B;
    }
 
    //Generamos la cuota para mujeres y hombres entre 40 y 85 años
     else if(edad >=40 && edad <=85 && genero === 'hombre'){
         msj = 'El precio de su poliza es: ';
         precio = cat3A;
     }else if(edad >=40 && edad <=85 && genero === 'mujer'){
        msj = 'El precio de su poliza es: ';
        precio = cat3B;
    } 
  
    //Generamos el mensaje para el resto de los casos
    else {
        msj = 'Lo sentimos no tenemos poliza disponible';
    }
   
    
    //Declaramos la variable para tener acceso al div del mensaje

    const cuota = document.getElementById('cuota');

    //Mostramos el precio y el mensaje si es que el precio no es 0;
   
    if(precio !== 0){
        cuota.innerHTML = `
        <div>
            <span>${msj}</span>
            <span>${precio}</span>
        </div>
        `;
    } 
    //Mostramos solamente el mensaje cuando el precio es 0;
    else {
        cuota.innerHTML = `
        <div>
            <span>${msj}</span>
        </div>
        `;
    }
}


//Ciclo For
/*

for (let i = 1; i <=4; i++){
    console.log('iteracion ${i}');
}
console.log('Fin del ciclo');
*/

// WHILE 
/*
let x = 1 ;
while (x <= 4){
    console.log('Interacion ${x}');
    x++;
}
console.log('Fin de While');
*/

// DO WHILE 
/*
let y = 1;
do {
    console.log('Interacion ${y}');
    y++;

}while (y <= 4);*/