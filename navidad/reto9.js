/*
Están encendiendo las luces de Navidad 🎄 en la ciudad y, como cada año, ¡hay que arreglarlas!

Las luces son de dos colores: 🔴 y 🟢 . Para que el efecto sea el adecuado, siempre deben estar alternadas. Es decir, si la primera luz es roja, la segunda debe ser verde, la tercera roja, la cuarta verde, etc.

Nos han pedido que escribamos una función adjustLights que, dado un array de strings con el color de cada luz (representados con los emojis 🔴 para el rojo y 🟢 para el verde), devuelva el número mínimo de luces que hay que cambiar para que estén los colores alternos.

*/



function adjustLights(lights) {
  let compara1 = 0
  let compara2 = 0
  let patron1 = '🟢'
  let patron2 = '🔴'
  let ban = ''

  for (let l of lights) {

    if (l === patron1) {
      compara1 ++
    } else {
      compara2 ++
    }

    ban = patron1
    patron1 = patron2
    patron2 = ban

  }

  return Math.min(compara1, compara2);

}


console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']))
// -> 1

console.log(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']))
// 2

console.log(adjustLights(['🔴', '🔴', '🔴']))
// -> 1