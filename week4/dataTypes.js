function test(one, two, three) {
  console.log(one)
  console.log(two)
  console.log(three)
}
function testCompare(one, two) {
  console.log(one === two)
}

//array store address
const a = [1, 2, 3] //store memory address
const b = [1, 2, 3] //store memory address
testCompare(a, b) //false
//a and b feel like same home model but difference place.

const c = b //alias(roommate) give memory address of b to c
testCompare(c, b) //true

console.log(`defult data`)
test(a, b, c)
c[0] = "A"
console.log(`c changing data`)
test(a, b, c)
b[1] = "B"
console.log(`b changing data`)
test(a, b, c)
a[0] = 555
console.log(`a changing data`)
test(a, b, c)

//object store address
const x = { id: 1, title: "JS" }
const y = { id: 1, title: "JS" }
const z = y
testCompare(x, y)
testCompare(y, z)

y.id = 888
test(x, y, z)

//primetive store data
let m = 5 //store 5
let n = 10 //store 10
let o = n //assign 10 to o
testCompare(o, n) //o=n -> 10=10 -> true
m = 999 //assign 999 to m
o = 1000 //assign 1000 to o
testCompare(o, n) //o=n -> 1000=10 -> false
