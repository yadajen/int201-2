//array can contain different data types ine one array
const x = [1, true, "A"]
console.log(x)
console.log(x.length) //length of array
console.log(x[0]) //get the first element of array

//array size can grow dynamically
x[x.length] = 555 //append a new element
x.push(888) //push can store data to array easily
x[1] = false
console.log(x)
console.log(x[x.length - 1]) //get the last element of array

const y = [] //empty array
let z //undefinded

console.log(`${typeof y}`)
console.log(`${typeof z}`)

if (y.length === 0) console.log("y is an empty array")
else console.log("y is not an empty array")

//use ? to optional chaining if not sure typeof data
if (z?.length === 0) console.log("z is an empty array")
else console.log("z is not an empty array")
