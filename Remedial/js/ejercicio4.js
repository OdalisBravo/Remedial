console.log("ejercicio 4");

function ejercicio4(sueldo) {
    var nuevo_Sueldo;
  
    if (sueldo < 1000) {
      nuevo_Sueldo = sueldo * 0.15;
    } else {
      nuevo_Sueldo = sueldo * 0.12;
    }
  
    nuevo_Sueldo = nuevo_Sueldo.toFixed(2);
  
    return nuevo_Sueldo;
  }