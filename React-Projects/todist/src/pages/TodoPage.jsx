import React, { useState } from 'react'
import TodoItem from '../components/TodoItem';
import styles from '../styles/TodoPage.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {addTodo} from'../redux/todoSlice';

const TodoPage = () => {
  // // using useState hook to manage the state of I/P (task) and the task list (tasks)
  // const [task, setTask] = useState('');
  // const [tasks, setTasks] = useState([]);

  // const handleAddTask = (e) => {
  //   e.preventDefault();        // prevent default form submission behaviour (reloading the page)

  //   if(task.trim()) {         // validation to prevent emmpty todo
  //     console.log(task);
  //     setTasks([...tasks, task]);  // Add the new task to the task array
  //     setTask('');  // clear the input field
  //   }
  // }

  
  // return (
  //   <div className= {styles.container}>    {/* Apply styles */}
  //   <form onSubmit={handleAddTask}>
  //     {/* Input filed and State binding */}

  //     <input 
  //       type='text'
  //       value={task}
  //       onChange={(e) => setTask(e.target.value)}
  //       placeholder='Enter a task'
  //       className={styles.input}       // Apply styles to input
  //     />

  //     <button type='submit' className={styles.button}>Add Todo</button>
  //   </form>

  //   {/* Rendering / Dispalying the list of tasks */}

  //   {console.log(tasks.length)}
  //   <ul>
  //     {tasks.map((task, index) => (
  //       <TodoItem key={index} task={task}/>       /* use TodoItem here */
        
  //     ))}
  //   </ul>



  //   </div>
  // )


  //  Using Redux

  const [task, setTask] = useState('');
  const dispatch = useDispatch();   // hook to dispatch actions
  const tasks = useSelector(state => state.todos); // select tasks from redux store

  const handleAddTask = (e) => {
    e.preventDefault();
    if(task.trim()){   // chk whether input is empty or not
      dispatch(addTodo({id:Date.now(), text: task, completed: false}));   //add new todo
      setTask('');     // clear input after adding the task
    }
  }


  return (
    <div className= {styles.container}>    {/* Apply styles */}
    <form onSubmit={handleAddTask}>
      {/* Input filed and State binding */}

      <input 
        type='text'
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder='Enter a task'
        className={styles.input}       // Apply styles to input
      />

      <button type='submit' className={styles.button}>Add Todo</button>
    </form>

    {/* Rendering / Dispalying the list of tasks */}

    {/* {console.log(tasks.length)} */}
    <ul>
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task}/>       /* use TodoItem here */
        
      ))}
    </ul>



    </div>
  );

}

export default TodoPage