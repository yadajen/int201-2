//creat array with Array.from()
const x = [1, 2, 4, 8, 16, 32]
const y = Array.from(x) //like spread operator [...]
console.log(x)
console.log(y)
console.log(y.length)

//y and x store difference reference but having same element
//if use y=x y will be roommate of x(store same reference)
if (x === y) console.log("x===y")
else console.log("x1==y")
