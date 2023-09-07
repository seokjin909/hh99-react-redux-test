import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

// initial state
const initialState = {
  todos: [
    {
      id: uuidv4(),
      title: "리액트",
      body: "리액트를 배워봅시다",
      isDone: false,
    },
    {
      id: uuidv4(),
      title: "자바",
      body: "자바를 배워봅시다",
      isDone: true,
    },
  ],
};

const getTodos = (state) => state.todos;

export const getTodoByID = (state, id) => {
  const todos = getTodos(state);
  return todos.find((todo) => todo.id === id);
};

const todosSlice = createSlice({
  name: "toDos",
  initialState,
  reducers: {
    add: (state, action) => {
      state.todos.push({
        id: action.payload.id,
        title: action.payload.title,
        body: action.payload.body,
        isDone: false,
      });
    },
    remove: (state, action) => {
      const newDeleteTodo = state.todos.filter((item) => item.id !== action.payload);
      return {
        todos: newDeleteTodo,
      };
    },
    update: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isDone = !todo.isDone;
      }
    },
  },
});

export const { add, remove, update } = todosSlice.actions;

export default todosSlice.reducer;
