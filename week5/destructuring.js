//destructuring array
const j = [1, 3, 5, 7, 9, 11]
const [a, b, ...rest] = j //a=j[0], b=j[1], rest=[j[2], j[3], j[4], j[j.length-1]]
console.log(a) //1
console.log(b) //3
console.log(rest) //[5,7,9,11]

const x = [1, 3, 5]
const y = [2, 4, 6]
const [m] = x //m=x[0]
const [o, p] = y //o=y[0], p=y[1]
console.log(m) //1
console.log(o) //2
console.log(p) //4
//destructuring with skip element
const [, , e] = x //e=x[2]
console.log(e)
const w = [2, 4, 6, 8, 10, 12]
const [a1, , a2, , ...a3] = w //a1=w[0], skip w[1], a2=w[2], skip w[3], a3=[w[4], w[5]]
console.log(a1) //2
console.log(a2) //6
console.log(a3) //[10,12]

//destructuring with for of
const str = [..."hello world"]
for (const [ind, value] of str.entries()) {
  console.log(ind)
  console.log(value)
}
