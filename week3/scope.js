let x = 1
console.log(x)
{
  let x = 5
  console.log(x)
  var y = 111
}
console.log(y)
x = 10
console.log(x)
function doIt() {
  if (1) {
    let x = 555
    console.log(x)
  } else {
    console.log(`not 1`)
  }
  console.log(x) /////////
}

doIt()
console.log(x) //////

function doSomething() {
  let x = "A"
  console.log(x)
}
doSomething()
console.log(x) //////////

let m = 1
console.log(typeof m)
console.log(typeof String(m))
console.log(typeof Boolean(m))

if (1) console.log(`implicit coversation is working`)
