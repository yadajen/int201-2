let someone = "" //empty string
let who //undefined
console.log(typeof someone) //string
let discount = 0
let x = 5
console.log(x) //5
if (someone) {
  who = "member"
  discount = 0.1
  let x = 1
  console.log(x) //1
} else {
  who = "guest"
  discount = 0.05
  let x = 2
  console.log(x) //2`
}
console.log(x) //5
console.log(who)
console.log(discount)
// if-else expression
// who = someone ? "member" : "guest"
// //someone ? (who = "member") : (who = "guest")
// console.log(who)
