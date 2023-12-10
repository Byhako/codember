/*
Santa está experimentando con nuevos diseños de regalos y necesita tu ayuda para visualizarlos en 3D.

Tu tarea es escribir una función que, dado un tamaño n (entero), genere un dibujo de un regalo en 3D utilizando caracteres ASCII.

Las líneas de los regalos se dibujan con # y las caras con el símbolo que nos pasan como parámetro:
*/

function drawGift(n, symbol) {
  // Validar que n sea un número entero positivo
  if (typeof n !== "number" || !Number.isInteger(n) || n < 1) {
    console.log("n debe ser un número entero positivo");
    return;
  }

  // Dibujar la parte superior del regalo
  for (let i = 0; i < n; i++) {
    // Calcular el número de espacios y símbolos en cada línea
    let spaces = n - i - 1;
    let symbols = i + 1;
    // Dibujar la línea con espacios, # y el símbolo dado
    console.log(" ".repeat(spaces) + "#".repeat(symbols) + symbol.repeat(symbols) + "#".repeat(symbols));
  }

  // Dibujar la parte central del regalo
  for (let i = 0; i < n; i++) {
    // Calcular el número de símbolos en cada línea
    let symbols = n - i;
    // Dibujar la línea con # y el símbolo dado
    console.log("#".repeat(symbols) + symbol.repeat(symbols) + "#".repeat(symbols) + symbol.repeat(i));
  }

  // Dibujar la parte inferior del regalo
  for (let i = 0; i < n; i++) { 
    // Calcular el número de símbolos en cada línea
    let symbols = i + 2; 
    // Dibujar la línea con # y el símbolo dado
    console.log("#".repeat(symbols) + symbol.repeat(symbols) + "#".repeat(n - i - 1)); 
    // Añadir una condición para dibujar la última línea del regalo
    if (i == n - 1) {
      console.log("#".repeat(n));
    }
  }
}




drawGift(4, '+')

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

// drawGift(5, '*')
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

// drawGift(1, '^')
/*
#
*/

// Importante: Nos han dicho que siempre hay que dejar un salto de línea al final del dibujo.

// xxxxxx
// x****xx
// x****x*x
// x****x**x
// x****x***x
// xxxxxx****x
// x****x***x
// x****x**x
// x****x*x
// x****xx
// xxxxxx



//  xx
// x*x
// xx