const nums = [-5, -6, 7, 77, 8, 9, -1, 0]
console.log(nums.sort()) //[  -1, -5, -6, 0,  7, 77,  8, 9] default sorting by string
nums.sort((num1, num2) => num1 - num2) //[-6, -5, -1,  0, 7,  8,  9, 77] ascending number sorting
console.log(nums)
nums.sort((num1, num2) => num2 - num1) //[ 77,  9,  8,  7, 0, -1, -5, -6 ]descending number sorting
console.log(nums)

const students = [
    {id:1, name:'John Lee'},
    {id:2, name:'adam Smith'},
    {id:99, name:'bon Smith'},
    {id:18, name:'fanc Smith'}
]
//sortingคือเหมือนแค่การเรียงเฉยๆแต่เราต้องบอกว่าเรียงยังไงอันไหนค่ามากกว่าน้อยกว่า
//sorting เวลาที่เราจะนิยามความหมายของการเรียง ต้องมี 1.ให้ค่าบวก(มากกว่า) 2.ให้ค่าลบ(น้อยกว่า) 3.ให้ค่า0(เท่ากัน) **ต้องมีทั้ง3กลุ่ม***
//sorting by id (ascending, descending)
console.log("sorting by id asc")
console.log(students.sort((id1,id2) => id1.id-id2.id))

console.log("sorting by id desc")
console.log(students.sort((id1,id2) => id2.id-id1.id))

//sorting by name (ascending, descending)
//แบบใช้localeCompare
const sortName = students.slice().sort((a, b) => a.name.localeCompare(b.name))
const sortNameDesc = students.slice().sort((a, b) => b.name.localeCompare(a.name))
console.log("SortName")
console.log(sortName)
console.log(sortNameDesc)
//แบบไม่ใช้localeCompare
//เราจะเรียงอะไรก็ได้แต่ขอให้ออกมาเป็นเลข3กลุ่มเสมอ
console.log(students.sort((student1,student2)=>{
    const name1 = student1.name.toLocaleLowerCase()
    const name2 = student2.name.toLocaleLowerCase()
    if(name1 > name2) return 1
    else if (name1 <name2) return -1
    else return 0
}))


//เปรียบเทียบstring
const str1 ='ann'
const str2 ='Boy'
const str3 ='Ann'

console.log(str1>str2)//true
console.log(str1<str2)//false
console.log(str1===str2)//false
console.log(str1===str3)//false
console.log(str1.toLocaleLowerCase()===str3.toLocaleLowerCase())//true
