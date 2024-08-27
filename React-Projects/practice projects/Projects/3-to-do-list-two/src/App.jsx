import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItems from "./components/TodoItems"
import "./App.css"

function App() {

  const todoItemsList = [{
    name: 'Buy Milk',
    dueDate: '10/04/2024'
  },
{
    name: 'Go to college',
    dueDate: '10/04/2024'
},{
  name: 'Study',
  dueDate: 'right now'
}]

  // return <center className="todo-container">
    
  //   <AppName></AppName>

  //   <AddTodo/>
  //   <div className="items-container">
  //   {/* <TodoItem1/> */}
  //   <TodoItem todoName = 'Buy Milk' todoDate ='10/04/2024'/>
  //   <TodoItem todoName = 'Go to college' todoDate ='10/04/2024'/>
  //   {/* <TodoItem2/> */}
  //   </div>

    
  // </center>

  return <center className="todo-container">
    
    <AppName></AppName>

    <AddTodo/>
    <div className="items-container">
    <TodoItems todoItemsList = {todoItemsList}></TodoItems>
    </div>

    
  </center>
}

export default App
