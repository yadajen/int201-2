//create array with Array.of()
const x = Array.of(10) //store 10 to array
console.log(x) //[10]
console.log(x.length) //1

const y = Array.of(x)
console.log(y) //[[10]]
console.log(y.length) //1

const z = Array.of("1", 1 + 1, true)
console.log(z) //['1',2,true]
console.log(z.length) //3
