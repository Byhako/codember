/*
¡Vaya idea ha tenido Sam Elfman! Quiere ofrecer un servicio que te crea un árbol de Navidad 🎄 personalizado en cuestión de segundos.

Para crearlo nos pasan una cadena de caracteres para formar el árbol y un número que indica la altura del mismo.

Cada carácter de la cadena representa un adorno del árbol, y vamos utilizándolos de forma cíclica hasta llegar a la altura indicada. Como mínimo siempre nos pasarán uno.

Debemos devolver un string multilínea con el árbol de Navidad formado con los adornos, la altura indicada más una última línea con el tronco formado por el carácter | en el centro y, finalmente, un salto de línea \n.

Por ejemplo si recibimos la cadena "123" y el número 4 como altura, tendríamos que construir este árbol:

   1
  2 3
 1 2 3
1 2 3 1
   |

*/


function createChristmasTree(ornaments, height) {
  const numOrnaments = [...Array(height+1).keys()].reduce((a, b) => a + b)

  const caja = ornaments.repeat(numOrnaments)
  let element = 0
  let tree = ''
  let paso = 1

  while(paso <= height) {
    let spaces = ' '.repeat(height-paso)
    tree = tree + spaces
    for (let id=0 ; id<paso ; id++) {
      tree = tree + caja[element] + ' '
      element++
    }
    tree = tree.trimEnd() + '\n'
    paso++ 
  }

  tree = tree + ' '.repeat(height-1) + '|\n'

  return tree
}

console.log(createChristmasTree('123', 4))
console.log(createChristmasTree("x", 3))

