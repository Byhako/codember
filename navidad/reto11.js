/*
Un palíndromo es una palabra que se lee igual hacia adelante y hacia atrás. Los elfos quieren saber si es posible formar un palíndromo haciendo, como mucho, un intercambio de letras.

Crea una función getIndexsForPalindrome que reciba una cadena de caracteres y devolverá:

Si ya es un palíndromo, un array vacío.
Si no es posible, null.
Si se puede formar un palíndromo con un cambio, un array con las dos posiciones (índices) que se deben intercambiar para poder crearlo.
*/

function getIndexsForPalindrome(word) {
  const isPalindrome = (str) => str === str.split('').reverse().join('');

  const array = word.split('')

  if (isPalindrome(word)) {
    return []
  }

  for (let i = 0; i < word.length; i++) {
    for (let j = i + 1; j < word.length; j++) {
      const newArray = [].concat(array)
      const ban = newArray[i]
      newArray[i] = newArray[j]
      newArray[j] = ban
      if (isPalindrome(newArray.join(''))) {
        return [i, j]
      }
    }
  }


  return null

}

console.log(getIndexsForPalindrome('anna')) // []
console.log(getIndexsForPalindrome('abab')) // [0, 1]
console.log(getIndexsForPalindrome('abac')) // null
console.log(getIndexsForPalindrome('aaaaaaaa')) // []
console.log(getIndexsForPalindrome('aaababa')) // [1, 3]
console.log(getIndexsForPalindrome('caababa')) // null
console.log(getIndexsForPalindrome('rotaratov')) // [4,8]


