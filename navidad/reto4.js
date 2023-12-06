// En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera peculiar: las letras dentro de los paréntesis deben ser leídas al revés

// Santa necesita que estos mensajes estén correctamente formateados. Tu tarea es escribir una función que tome una cadena de texto y revierta los caracteres dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.

// Eso sí, ten en cuenta que pueden existir paréntesis anidados, por lo que debes invertir los caracteres en el orden correcto.

function decode(message) {
  let response = ''
  let start = 0
  let invertir = ''

  let response2 = ''
  let invertir2 = ''
  let start2 = 0


  for (let id in message) {
    if (message[id] === '(') {
      start = start + 1
    }
    if (message[id] === '(' && start === 1) {
      continue
    }

    if (message[id] === ')') {
      start = start - 1
    }


    if (start === 0 && invertir.length === 0) {
      response = response + message[id]
    }

    if (start !== 0) {
      invertir = invertir + message[id]
    }
    
    if (start === 0 && invertir.length !== 0) {


      if (invertir.includes('(')) {
        for (let j in invertir) {

          if (invertir[j] === '(') start2 = start2 + 1

          if (invertir[j] === '(' && start2 === 1) continue


          if (invertir[j] === ')') start2 = start2 - 1

          if (start2 === 0 && invertir2.length === 0) {
            response2 = response2 + invertir[j]
          }
      
          if (start2 !== 0) invertir2 = invertir2 + invertir[j]

          if (start2 === 0 && invertir2.length !== 0) {
            response2 = response2 + invertir2.split("").reverse().join("")
            invertir2 = ''
          }
        }

        response = response + response2.split("").reverse().join("")
        invertir = ''
      } else {
        response = response + invertir.split("").reverse().join("")
        invertir = ''
      }
    }
  }

  return response

}


function decode(message) {
  let stack = []
  let resutl = ''

  for (let letra of message) {
    if (letra === '(') {
      stack.push(resutl)
      resutl = ''
    } else if (letra === ')') {
      resutl = stack.pop() + resutl.split("").reverse().join("")
    } else {
      resutl += letra
    }
  }

  return resutl
}

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

console.log(decode('((nta)(sa))'))

