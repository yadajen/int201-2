//Higher-Order Functions
function add(n1, n2) {
  return n1 + n2
}
const sum = add //assign function add to sum
const result = add(2, 3) //excute function add(assign return value of function excuted)

console.log(result)

function sayGoodBye() {
  return "GoodBye"
}
function doSomething() {
  return sayGoodBye
}
const doIt=doSomething()
console.log(doIt)
