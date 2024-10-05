import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoSlice'
//  configure redux store

export const store =  configureStore ({
  reducer:{
    todos: todoReducer,
  },
});