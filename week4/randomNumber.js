let x = 3.5
let y = 2
let z = 3.4
console.log(`x is ${x}, y is ${y}, z is ${z}`)
console.log(`ceiling of x is ${Math.ceil(x)}`)
console.log(`floor of x is ${Math.floor(x)}`)
console.log(`X^Y is ${Math.pow(x, y)}`)
console.log(`round of x is ${Math.round(x)}`)
console.log(`round of z is ${Math.round(z)}`)
console.log(`PI is ${Math.PI}`)

//1-6
let rand = Math.floor(Math.random() * 6) + 1
console.log(`Your dice is ${rand}`)

//10-50
let rand2 = Math.floor(Math.random() * 41) + 10
console.log(`Your random is ${rand2}`)

//100-1000
let rand3 = Math.floor(Math.random() * 901) + 100
console.log(`Your random is ${rand3}`)

//1-100
let min = 1
let max = 100
let rand4 = Math.floor(Math.random() * (max - min + 1)) + min
console.log(`Your random is ${rand4}`)

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

//optional chaining
function randomToSring(min, max) {
  return `in range ${min}-${max}, Your random is ${randomNumber(min, max)}`
}
console.log(randomToSring(1, 10))
console.log(randomToSring(10, 100))
console.log(randomToSring(100, 1000))
