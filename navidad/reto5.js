/*
Santa 🎅 está probando su nuevo trineo eléctrico, el CyberReindeer, en una carretera del Polo Norte. La carretera se representa con una cadena de caracteres, donde:

. = Carretera
S = Trineo de Santa
* = Barrera abierta
| = Barrera cerrada
Ejemplo de carretera: S...|....|.....

Cada unidad de tiempo, el trineo avanza una posición a la derecha. Si encuentra una barrera cerrada, se detiene hasta que la barrera se abra. Si está abierta, la atraviesa directamente.

Todas las barreras empiezan cerradas, pero después de 5 unidades de tiempo, se abren todas para siempre.

Crea una función que simule el movimiento del trineo durante un tiempo dado y devuelva un array de cadenas representando el estado de la carretera en cada unidad de tiempo:
*/



function cyberReindeer(road, time) {
  let p = 0
  let camino = road.split('')
  let ans = [road]
  let ban = camino[1]

  for (let i of [...Array(time-1).keys()]) {
    // abre barrera
    if (i === 4) {
      camino = camino.join('').replaceAll('|', '*').split('')
    }

    // espera en barrera cerrada
    if (camino[p+1] === '|') {
      ans.push(camino.join(''))
      continue
    }

    // avanzo
    camino[p] = ban
    ban = camino[p + 1]
    camino[p + 1] = 'S'

    ans.push(camino.join(''))
    p += 1
  }

  return ans
}



const road = 'S..|...|..'
const time = 10 // unidades de tiempo
cyberReindeer(road, time).map(i => console.log(i))

// cyberReindeer('S.|.|.', 7).map(i => console.log(i))

/* -> ans:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
*/