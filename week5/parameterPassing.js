//primitive parameter passing
function double(a) {
  //a=m, a=5
  a = a * 2
  return a
}
let m = 5
console.log(m)
console.log(double(m))

//object parameter passing
function update(a) {
  //a=n, a store memory addressof n because a accept array object
  //if a change value its will change at n too
  a[0] = 5555
}
const n = [1, 2, 3]
console.log(n)
update(n)
console.log(n)
