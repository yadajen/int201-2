const students = [
  {
    name: 'Sophia',
    attendance: [true, true, false, true, true],
    testScores: [88, 92, 85, 78, 90],
  },
  {
    name: 'Mason',
    attendance: [true, true, true, true, false],
    testScores: [70, 82, 88, 75, 62],
  },
  {
    name: 'Isabella',
    attendance: [true, false, false, true, true],
    testScores: [68, 71, 70, 60, 78],
  },
  {
    name: 'Liam',
    attendance: [true, true, true, true, true],
    testScores: [90, 87, 92, 88, 95],
  },
  {
    name: 'Olivia',
    attendance: [true, true, true, true, false],
    testScores: [72, 78, 75, 80, 62],
  },
]
function getAttendanceRate(student) {
  let count = 0
  for (let i = 0; i < student.attendance.length; i++) {
    if (student.attendance[i]) count++
  }
  return (count / student.attendance.length) * 100
}

console.log(
  getAttendanceRate({
    name: 'Isabella',
    attendance: [true, false, false, true, true],
    testScores: [68, 71, 70, 60, 78],
  })
)

function getAvgScore(student) {
  return (
    student.testScores.reduce((sum, current) => sum + current, 0) /
    student.testScores.length
  )
}
console.log(
  getAvgScore({
    name: 'Isabella',
    attendance: [true, false, false, true, true],
    testScores: [68, 71, 70, 60, 78],
  })
)

function underPerformStudent(students) {
  arr = []
  for (let i = 0; i < students.length; i++) {
    if (getAttendanceRate(students[i]) < 80 && getAvgScore(students[i]) < 70) {
      arr.push({
        name: students[i].name,
        attendanceRate: getAttendanceRate(students[i]),
        avgScore: getAvgScore(students[i]),
      })
    }
  }
  return arr
}
console.log(underPerformStudent(students))

function findFileExtension(filename) {
  return filename.substring(filename.lastIndexOf('.'))
}
console.log(findFileExtension('sample.ex.jpeg'))

function isImageFileExtension(filename) {
  if (filename === null || filename === undefined) return false
  //.png, .jpg, .jpeg, .gif, .svg
  return (
    filename.endsWith('.png') ||
    filename.endsWith('.jpg') ||
    filename.endsWith('.jpeg') ||
    filename.endsWith('.gif') ||
    filename.endsWith('.svg')
  )
}
console.log(isImageFileExtension())
