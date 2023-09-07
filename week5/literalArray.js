const students = [
  { id: 101, name: "Somchai" },
  { id: 102, name: "John" },
  { id: 103, name: "Somsak" }
]
console.log(students.length) //3
console.log(students[0]) //get the first object of array

const studentIds = [
  [1001, 1002, 1005],
  [2001, 2002, 2007],
  [3001, 3003, 3012],
  [333]
]
console.log(studentIds.length)
console.log(studentIds[1])
console.log(studentIds[studentIds.length - 1])
console.log(studentIds[0][1]) //2D reference
