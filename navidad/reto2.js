// En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto limitado de materiales.

// Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.

// Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.

function manufacture(gifts, materials) {
  const regalos = []

  for (let i in gifts) {
    let valid = true
    const letras = gifts[i].split('')
    for (let j in letras) {
      if (!materials.includes(letras[j])) {
        valid = false
        break
      }
    }
    if (valid) regalos.push(gifts[i])
  }

  return regalos
}


const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'
console.log(manufacture(gifts, materials)) // ["tren", "oso"]