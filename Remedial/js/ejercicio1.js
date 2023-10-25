console.log("Ejercicio 1");

function ejercicio1(radio, altura){
    let pi= 3.1416;
    area= (2 * (pi) * radio * (radio + altura)).toFixed(2);
    volumen=((pi)* (radio ** 2)* altura).toFixed(2);
    return [area,volumen];
}

