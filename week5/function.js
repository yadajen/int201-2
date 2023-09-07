//1.function declaration
function concat(str1, str2) {
  return str1 + str2
}
//calling function, excute function
console.log(concat("hello", "world")) //helloworld

//2.function expression
const toLower = function (str) {
  return str.toLowerCase()
}
console.log(toLower("HELLOWORLD"))

const doSomething = toLower //-> function
const y = toLower("HEY") //hey -> String
console.log(doSomething("HI")) //hi
console.log(y)
console.log(typeof doSomething) //funtion
console.log(typeof y) //string

//doIt -> Higher-Order Function
const doIt = function (op, str1, str2) {
  //parameter passing
  //op=concat, str1='good', str2='moring'
  return op(str1, str2)
}

console.log(doIt(concat, "good", "moring")) //goodmoring
console.log(doIt(toLower, "GOOD", "MORNING")) //good

// a, m -> Higher-Order Function
function a() {
  return toLower
}
const m = a()
console.log(m("GGEZ"))
