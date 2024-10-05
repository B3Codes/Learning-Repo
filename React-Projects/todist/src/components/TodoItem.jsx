import React from 'react'
import { useDispatch } from 'react-redux'
import { toogleComplete, deleteTodo } from '../redux/todoSlice'

function TodoItem( {task}) {
  const dispatch = useDispatch();  // hook to dispatch actions

  const handleToggleComplete = () => {
    dispatch(toogleComplete(task.id));   // dispatch  toggleComplete action 
  }

  const handleDeleteTask = () => {
    dispatch(deleteTodo(task.id));  // dispatch deleteTodo action
  };

  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <span onClick={handleToggleComplete} style={{ cursor: 'pointer' }}>
        {task.text}
      </span>
      <button onClick={handleDeleteTask} style={{ marginLeft: '10px', cursor: 'pointer' }}>
        Delete
      </button>
    </li>
  );
}

// const TodoItem = ({task}) => {
//   return (
//     <li>{task}</li>
//   )
// }

export default TodoItem