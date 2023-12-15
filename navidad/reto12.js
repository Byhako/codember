/*
En el Polo Norte todavía usan fotocopiadoras de papel. Los elfos las usan para copiar las cartas que los niños envían a Santa y así poder enviarlas a todos los departamentos de regalos.

Sin embargo ya son muy viejas y no funcionan muy bien. Cada vez que hacen una copia, la calidad de la copia disminuye ligeramente, un fenómeno conocido como pérdida generacional.

Necesitas detectar si una carta es una copia de otra. Las cartas son muy largas y no puedes leerlas, pero puedes compararlas con un algoritmo.

Existe una gran probabilidad de que un caracter se degrade en cada copia (¡no pasa siempre!). Y al ocurrir, la regla que sigue es:

Los caracteres de la A a la Z se degradan de mayúsculas a minúsculas (A-Z ⇒ a-z)
Las letras se degradan en una serie de caracteres en este orden: a-z ⇒ # ⇒ + ⇒ : ⇒ . ⇒
Una vez degradadas las letras en los símbolos, se pueden continuar degradando.
Ten en cuenta que el último es un espacio en blanco, no un caracter vacío.
Los caracteres que no son letras (como los dígitos) no se degradan.
Sabiendo esto y recibiendo dos cartas. La supuesta original y la copia. Debes determinar si la copia es una copia de la otra.
*/



// function checkIsValidCopy(original, copy) {
//   const signs = ['#', '+', ':', '.', ' ']

//   for (let id in original) {
//     const newOriginal = original[id].toLowerCase()
//     const idx = /[a-z]/.test(newOriginal) ? 0 : signs.indexOf(original[id])
//     const subSigns = signs.slice(idx,5)

//     if (
//       original[id] !== copy[id] &&
//       newOriginal !== copy[id] &&
//       (idx === -1 || !subSigns.includes(copy[id]))
//       ) {
//       return false
//     }
//   }

//   return true
// }

function checkIsValidCopy(original, copy) {
  const signs = ['#', '+', ':', '.', ' ']

  return Object.keys(original).every((id) => {
    const newOriginal = original[id].toLowerCase()
    const idx = /[a-z]/.test(newOriginal) ? 0 : signs.indexOf(original[id])
    const subSigns = signs.slice(idx,5)

    return (
      original[id] === copy[id] ||
      newOriginal === copy[id] ||
      (idx !== -1 && subSigns.includes(copy[id]))
    )
  })
}


console.log(checkIsValidCopy('3 #egalos', '3 .+:# #:')) // true
console.log(checkIsValidCopy('S#nta Claus', 'S#ntA ClauS')) // false
console.log(checkIsValidCopy('Santa Claus is coming', 'sa#ta Cl#us i+ comin#')) // true
console.log(checkIsValidCopy('s#nta Cla#s is coming', 'p#nt: cla#s #s c+min#')) // false (por la p inicial)
console.log(checkIsValidCopy('Santa Claus', 's#+:. c:. s')) // true
console.log(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')) // false (hay un # donde no debería)
console.log(checkIsValidCopy('Santa Claus', '###:. c:+##')) // true
