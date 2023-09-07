const x = [1, 9, 11]
const y = [3, 5, 7]
//using sread operator [...] to copy only elements of x and y
const z = [...x, ...y] //[ 1, 9, 11, 3, 5, 7 ]
console.log(z)

const a = [1, ...y, 11] //[ 1, 3, 5, 7, 11 ]
console.log(a)

//using sread operator [...] of String its will colloect data of String to characters into array
const str = "hello world"
const collStr = [...str]
console.log(collStr)

//for of
for (const ch of collStr) {
  console.log(ch)
}
