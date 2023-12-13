// Create a Student class with the following properties:

// · id (a unique identifier for each student)

// · name (name) the name of the student

// · grade (grade) the grade of the student

// Implement the following methods in the Student class:

// · constructor() - initializes an empty array of students.

// · addStudent(name, grade) - adds a new student to the array with a unique ID. Returns the student object. {id:1 , name:'fdf, grade:'4'}

// · getStudents() - returns an array of all students.

// · getStudentById(id) - returns the student with the given ID.

// · updateStudent(id, updatedGrade) - updates the details of a student with the given ID. Returns the updated student object.

// · deleteStudent(id) - deletes the student with the given ID. Returns the deleted student object.

class Student {
  id = 1
  name = ''
  grade = ''
  constructor() {
    this.students = []
  }
  addStudent(name, grade) {
    const newstu = { id: this.id++, name: name, grade: grade }
    this.students.push(newstu)
    return newstu
  }
  getStudents() {
    return this.students
  }
  getStudentById(id) {
    return this.students.find((stu) => stu.id === id)
  }
  updateStudent(id, updatedGrade) {
    const stupdate = this.getStudentById(id)
    stupdate.grade = updatedGrade
    return stupdate
  }
  deleteStudent(id) {
    const indextodelete = this.students.findIndex((stu) => stu.id === id)
    return this.students.splice(indextodelete, 1)[0] //{ id: 2, name: 'jame', grade: 'A' } return ตัวที่ลบไป
  }
}

const s1 = new Student()
console.log(s1.addStudent('earn', 'F'))
console.log(s1.addStudent('jame', 'A'))
console.log(s1.addStudent('poy', 'B'))
console.log('______')
console.log(s1.getStudentById(3))
const s2 = new Student()
console.log(s2.addStudent('arm', 'F'))
console.log('______')
console.log(s2.updateStudent(1, 'B'))
console.log('______')
console.log(s1.getStudents())
console.log('______')
console.log(s1.deleteStudent(2))
console.log(s1.getStudents())
