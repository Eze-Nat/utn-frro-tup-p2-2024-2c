// Ejercicio 6: Pide dos números y escribe cuál es el mayor
function mayorDeDos() {
  let num1 = parseFloat(prompt("Ingrese el primer número:"));
  let num2 = parseFloat(prompt("Ingrese el segundo número:"));

  if (num1 > num2) {
    document.getElementById("resultado").innerHTML = `El mayor de los dos números es: ${num1}`;

  } else if (num2 > num1) {
    document.getElementById("resultado").innerHTML = `El mayor de los dos números es: ${num2}`;

  } else {
      document.getElementById("resultado").innerHTML = `Los números son iguales.`;

  }
}

// Ejercicio 7: Pide tres números y escribe cuál es el mayor
function mayorDeTres() {
  let num1 = parseFloat(prompt("Ingrese el primer número:"));
  let num2 = parseFloat(prompt("Ingrese el segundo número:"));
  let num3 = parseFloat(prompt("Ingrese el tercer número:"));

  let mayor = Math.max(num1, num2, num3);
  document.getElementById("resultado").innerHTML = `El mayor de los tres números es: ${mayor}`;

}

// Ejercicio 8: Pide un número y dice si es divisible por 2
function esDivisiblePor2() {
  let num = parseFloat(prompt("Ingrese un número:"));

  let esDivisible = (num % 2 === 0);
  document.getElementById("resultado").innerHTML = `${num} ${esDivisible ? "es" : "no es"} divisible por 2`;

}

// Ejercicio 9: Pide una frase y cuenta cuántas veces aparece la letra 'a'
function contarLetraA() {
  let frase = prompt("Ingrese una frase:");
  let contador = 0;

  for (let i = 0; i < frase.length; i++) {
      if (frase[i].toLowerCase() === 'a') {
          contador++;
      }
  }

  document.getElementById("resultado").innerHTML = `La letra 'a' aparece ${contador} veces en la frase`;

}

// Ejercicio 10: Pide una frase y escribe las vocales que aparecen
function mostrarVocales() {
  let frase = prompt("Ingrese una frase:");
  let vocales = "aeiou";
  let resultado = "";

  // Itera sobre cada carácter en la frase
  for (let i = 0; i < frase.length; i++) {
    // Verifica si el carácter es una vocal
    if (vocales.includes(frase[i].toLowerCase())) {
      resultado += frase[i];
    }
  }

  // Muestra las vocales encontradas en la frase
  document.getElementById("resultado").innerHTML = `Las vocales en la frase son: ${resultado}`;
}

// Ejercicio 11: Pide una frase y cuenta cuántas de las letras son vocales
function contarVocales() {
  let frase = prompt("Ingrese una frase:");
  let vocales = "aeiou";
  let contador = 0;

  for (let i = 0; i < frase.length; i++) {
      if (vocales.includes(frase[i].toLowerCase())) {
          contador++;
      }
  }

  document.getElementById("resultado").innerHTML = `La frase tiene ${contador} vocales`;

}

// Ejercicio 12: Pide una frase y cuenta cuántas veces aparecen cada una de las vocales
function contarCadaVocal() {
  let frase = prompt("Introduce una frase:");
  let contadorA = 0, contadorE = 0, contadorI = 0, contadorO = 0, contadorU = 0;

  for (let letra of frase.toLowerCase()) {
      if (letra === 'a') contadorA++;
      else if (letra === 'e') contadorE++;
      else if (letra === 'i') contadorI++;
      else if (letra === 'o') contadorO++;
      else if (letra === 'u') contadorU++;
  }

  // Mostrar los resultados en el HTML
  document.getElementById("resultado").innerHTML = `
      A: ${contadorA} <br>
      E: ${contadorE} <br>
      I: ${contadorI} <br>
      O: ${contadorO} <br>
      U: ${contadorU}
  `;

}

// Ejercicio 13: Pide un número y nos dice si es divisible por 2, 3, 5 o 7
function divisiblePorVarios() {
  let num = parseFloat(prompt("Ingrese un número:"));
  if (num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0) {
    document.getElementById("resultado").innerHTML = `${num} es divisible por 2, 3, 5 o 7`;
  } else {
      alert(`${num} no es divisible por 2, 3, 5 o 7`);
  }
}

// Ejercicio 14: Pide un número y nos dice por cuáles de 2, 3, 5 o 7 es divisible
function divisiblePorCuales() {
  let num = parseFloat(prompt("Ingrese un número:"));
  let divisores = [];
  if (num % 2 === 0) divisores.push(2);
  if (num % 3 === 0) divisores.push(3);
  if (num % 5 === 0) divisores.push(5);
  if (num % 7 === 0) divisores.push(7);
  
  if (divisores.length > 0) {
    document.getElementById("resultado").innerHTML = `${num} es divisible por: ${divisores.join(', ')}`;
  } else {
      alert(`${num} no es divisible por 2, 3, 5 o 7`);
  }
}

// Ejercicio 15: Escribe los divisores de un número dado
function divisores() {
  let num = parseInt(prompt("Ingrese un número:"));
  let resultado = [];
  
  // Encuentra todos los divisores del número
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      resultado.push(i);
    }
  }

  // Muestra los divisores en el elemento con id "resultado"
  document.getElementById("resultado").innerHTML = `Los divisores de ${num} son: ${resultado.join(', ')}`;
}


// Ejercicio 16: Escribe los divisores comunes de dos números dados
function divisoresComunes() {
  let num1 = parseInt(prompt("Ingrese el primer número:"));
  let num2 = parseInt(prompt("Ingrese el segundo número:"));
  let resultado = [];
  
  for (let i = 1; i <= Math.min(num1, num2); i++) {
      if (num1 % i === 0 && num2 % i === 0) {
          resultado.push(i);
      }
  }

  document.getElementById("resultado").innerHTML = `Los divisores comunes de ${num1} y ${num2} son: ${resultado.join(', ')}`;

}

// Ejercicio 17: Nos dice si un número es primo
function esPrimo() {
  let num = parseInt(prompt("Ingrese un número:"));
  let esPrimo = num > 1;
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
          esPrimo = false;
          break;
      }
  }

  document.getElementById("resultado").innerHTML = `${num} ${esPrimo ? "es" : "no es"} primo`;

}

// Ejercicio 18: Pide la edad y dice si puede conducir
function puedeConducir() {
  let edad = parseInt(prompt("Ingrese su edad:"));
  document.getElementById("resultado").innerHTML = edad >= 18 ? "Puede conducir" : "No puede conducir";

}

// Ejercicio 19: Pide una nota y muestra la calificación
function calificacion() {
  let nota = parseFloat(prompt("Ingrese su nota:"));
  if (nota >= 0 && nota < 3) document.getElementById("resultado").innerHTML = "Muy deficiente";
  else if (nota >= 3 && nota < 5) document.getElementById("resultado").innerHTML = "Insuficiente";
  else if (nota >= 5 && nota < 6) document.getElementById("resultado").innerHTML = "Suficiente";
  else if (nota >= 6 && nota < 7) document.getElementById("resultado").innerHTML = "Bien";
  else if (nota >= 7 && nota < 9) document.getElementById("resultado").innerHTML = "Notable";
  else if (nota >= 9 && nota <= 10) document.getElementById("resultado").innerHTML = "Sobresaliente";
  else document.getElementById("resultado").innerHTML = "Nota inválida";
}

// Ejercicio 20: Pide cadenas hasta que se pulse cancelar y las concatena con guión
function concatenarCadenas() {
  let cadena;
  let resultado = "";

  while ((cadena = prompt("Ingrese una cadena de texto (pulse cancelar para terminar):")) !== null) {
      if (resultado !== "") resultado += "-";
      resultado += cadena;
  }

  document.getElementById("resultado").innerHTML = `Cadenas concatenadas: ${resultado}`;

}

// Ejercicio 21: Pide números hasta que se pulse cancelar, suma los números válidos
function sumaNumeros() {
  let numero;
  let suma = 0;

  while ((numero = prompt("Ingrese un número (pulse cancelar para terminar):")) !== null) {
      if (!isNaN(numero) && numero.trim() !== "") {
          suma += parseFloat(numero);
      } else {
          alert("Entrada no válida. Por favor, ingrese un número.");
      }
  }

  document.getElementById("resultado").innerHTML = `La suma total de los números es: ${suma}`;

}

// Ejercicio 22: Calcula la letra del DNI
function calcularDNILetra() {
  const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
  let dni;

  while ((dni = prompt("Ingrese su número de DNI (o pulse cancelar para salir / terminar):")) !== null) {
      dni = parseInt(dni);
      if (!isNaN(dni) && dni >= 0 && dni <= 99999999) {
          let letra = letras[dni % 23];
          document.getElementById("resultado").innerHTML = `La letra correspondiente al DNI ${dni} es ${letra}`;

      } else {
          alert("Número de DNI no válido. Intente nuevamente.");
      }
  }
}

// Ejercicio 23: Escribe una pirámide de números
function piramide() {
  let resultado = "";
  for (let i = 1; i <= 30; i++) {
      resultado += i.toString().repeat(i) + "\n";
  }
  document.getElementById("resultado").innerHTML = resultado.replace(/\n/g, "<br>");

}

// Ejercicio 24: Escribe una pirámide inversa
function piramideInversa() {
  let num = parseInt(prompt("Ingrese un número para la pirámide inversa:"));
  let resultado = "";

  for (let i = num; i >= 1; i--) {
      resultado += i.toString().repeat(i) + "\n";
  }
  document.getElementById("resultado").innerHTML = resultado.replace(/\n/g, "<br>");

}

// Ejercicio 25: Escribe los números del 1 al 500, mostrando múltiplos de 4 y 9
function multiples500() {
  let resultado = "";
  for (let i = 1; i <= 500; i++) {
      if (i % 4 === 0 && i % 9 === 0) {
          resultado += `${i} (Múltiplo de 4 y 9)\n`;
      } else if (i % 4 === 0) {
          resultado += `${i} (Múltiplo de 4)\n`;
      } else if (i % 9 === 0) {
          resultado += `${i} (Múltiplo de 9)\n`;
      } else {
          resultado += `${i}\n`;
      }

      // Cada 5 líneas, muestra una línea horizontal
      if (i % 5 === 0) {
          resultado += "-----------------------------\n";
      }
  }
  document.getElementById("resultado").innerHTML = resultado.replace(/\n/g, "<br>");

}
