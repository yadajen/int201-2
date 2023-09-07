//for i : can write,read
for (let index = 0; index < 3; index++) {
  console.log(index)
}

//for of : can read only
let nums = [10, 20, 30]
for (const num of nums) {
  console.log(num)
}
//for in : can read only
let obj = { id: 1, title: "JS" }
for (const key in obj) {
  //   console.log(key)
  console.log(`${key}:${obj[key]}`)
}
