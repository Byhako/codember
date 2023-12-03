// En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, añadiendo o eliminando un paso no planificado.

// Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.

// Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.


function findNaughtyStep(original, modified) {
  const list_original = original.split('')
  const list_mod = modified.split('')

  // Encuentro la lista de mayor logitud
  let list_mayor = list_original
  let list_menor = list_mod

  if (list_original.length < list_mod.length) {
    list_mayor = list_mod
    list_menor = list_original
  }


  for (let i in list_mayor) {
    if (list_mayor[i] !== list_menor[i]) {
      return list_mayor[i]
    }
  }

  return ''

}



const original = 'abcd'
const modified = 'abcde'
console.log(findNaughtyStep(original, modified)) // 'e'

const original2 = 'stepfor'
const modified2 = 'stepor'
console.log(findNaughtyStep(original2, modified2)) // 'f'

const original3 = 'xxxx'
const modified3 = 'xxoxx'
console.log(findNaughtyStep(original3, modified3)) // 'o'