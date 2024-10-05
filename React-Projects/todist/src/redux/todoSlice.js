import { createSlice } from '@reduxjs/toolkit'

// Define the initial state
const initialState = [];

// Create slice with actions and reducers
const todoSlice = createSlice({
  name:'todos',
  initialState,
  reducers:{
    // Action to add a todo
    addTodo: (state, action) => {
      state.push(action.payload);  // Add new task to state
    },
    // Action to toogle task completion
    toogleComplete: (state, action) => {
      const todo = state.find(task => task.id === action.payload);
      if(todo){
        todo.completed = !todo.completed;
      }
    },
    // Action to delet a todo
    deleteTodo: (state, action) => {
      return state.filter(task => task.id !== action.payload); // Remove the task
    } 
  }
});

// export the actions

export const {addTodo, toogleComplete, deleteTodo} = todoSlice.actions;

// export the reducer
export default todoSlice.reducer;