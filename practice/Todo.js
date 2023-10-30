// class Todo {
//   nextid = 1
//   constructor(description) {
//     this.id = Todo.nextid++
//     this.description = description
//   }
//   getToDo() {
//     return { id: this.id, description: this.description }
//   }
//   setDescription(newDescription) {
//     this.description = newDescription
//   }
// }

function TodoManagement() {
  const todos = []
  let nextId = 1
  function addTodo(desc) {
    todos.push({ id: nextId++, description: desc })
    return todos.length
  }
  function findTodo(searchId) {
    return todos.find((x) => x.id === searchId)
  }

  function findIndexTodo(searchId) {
    return todos.findIndex((x) => x.id === searchId)
  }
  function removeTodo(removeId) {
    todos.splice(findIndexTodo(removeId), 1)
  }
  function getTodos() {
    return todos
  }
  return { addTodo, findTodo, findIndexTodo, removeTodo, getTodos }
}

const doit = TodoManagement()
console.log(doit.addTodo('dgdhf'))
console.log(doit.addTodo('dgdhf'))
console.log(doit.addTodo('dgdhf'))
console.log(doit.addTodo('dgdhf'))
console.log(doit.addTodo('dgdhf'))
console.log(doit.findTodo(1))
console.log(doit.findIndexTodo(4))
doit.removeTodo(4)
console.log(doit.getTodos())
// doit = {
//   addTodo: addTodo,
//   findTodo: findTodo,
//   findIndex: findIndexTodo,
//   removeTodo: removeTodo,
// }
const { addTodo, findTodo, findIndexTodo, removeTodo } = TodoManagement()
