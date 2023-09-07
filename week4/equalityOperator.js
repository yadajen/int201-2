if (undefined === null) console.log("undefined===null")
else console.log("undefined!==null")

//dont care type check only value
if ("2" == 2) console.log(`'2'==2`)
else console.log(`'2'!=2`)

//check type first,and check value
if ("2" === 2) console.log(`'2'===2`)
else console.log(`'2'!==2`)

if (2 === 2) console.log(`3===2`)
else console.log(`3!==2`)

//nullish Coalescing (??)
//[] represents an empty array
//{} reporesents an empty object
let nums = [1, 2, 3]
let arr
arr = nums ?? []
console.log(nums)
console.log(arr)