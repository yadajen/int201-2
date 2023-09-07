let str1 = "apple"
let str2 = "Apple"
let str3 = "APPLE"
let str4 = "apple"

//checking by ASCII code -> Google : ascii table binary
console.log(str1 === str2) //'a'==='A' ->  false
console.log(str1 !== str2) //'a'!=='A' -> true
console.log(str1 === str4) //'a'==='a', 'p'==='p', 'p'==='p', 'l'==='l', 'e'==='e' -> true
console.log(str1 < str2) //'a'<'A' => 97<65 -> false

console.log(str1.includes("App"))
console.log(str1.includes("app"))

//includes with case insensitive
console.log(str1.toLowerCase().includes("App".toLowerCase()))
console.log(str1.toUpperCase().includes("App".toUpperCase()))
