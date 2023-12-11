/*



*/


// function createChristmasTree(ornaments, height) {
//   const numOrnaments = [...Array(height+1).keys()].reduce((a, b) => a + b)

//   const caja = ornaments.repeat(numOrnaments)
//   let element = 0
//   let tree = ''
//   let paso = 1

//   while(paso <= height) {
//     let spaces = ' '.repeat(height-paso)
//     tree = tree + spaces
//     for (let id=0 ; id<paso ; id++) {
//       tree = tree + caja[element] + ' '
//       element++
//     }
//     tree = tree.trimEnd() + '\n'
//     paso++ 
//   }

//   tree = tree + ' '.repeat(height-1) + '|\n'

//   return tree
// }

function createChristmasTree(ornaments, height) {
  let tree = '';

  for (let i = 1; i <= height; i++) {
    const spaces = ' '.repeat(height - i);
    const caja = ornaments.repeat(i * 2 - 1);
    const line = `${spaces}${caja.replace(/./g, '$& ')}\n`;
    tree += line;
  }

  const base = ' '.repeat(height - 1) + '|\n';
  tree += base;

  return tree;
}



console.log(createChristmasTree('123', 4))
console.log(createChristmasTree("x", 3))

