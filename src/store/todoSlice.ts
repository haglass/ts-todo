import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs";

// 초기 값 타입 정의
export type TodoType = {
  uid: string;
  title: string;
  body: string;
  done: boolean;
  sticker: string;
  date: string;
};
// 초기 initial 값에 대한 타입
export type TodoState = {
  todoList: Array<TodoType>;
};
// store 의 state 의 초기값 셋팅
const initialState: TodoState = {
  todoList: [],
};
// store.ts 에서 활용
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    initTodoState: (state, action: PayloadAction<Array<TodoType>>) => {
      state.todoList = action.payload;
    },
    addTodoState: (state, action: PayloadAction<TodoType>) => {
      // todoList: Array<TodoType>;
      state.todoList.push(action.payload);
    },
    updateTodoState: (state, action: PayloadAction<TodoType>) => {
      // 1. 먼저 uid 를 비교해서 배열의 순서에 맞는 1개를 찾는다.
      const index = state.todoList.findIndex(
        (item) => item.uid === action.payload.uid
      );
      // 2. 해당하는 uid 의 내용을 갱신한다.

      //   state.todoList[index].uid = action.payload.uid;
      //   state.todoList[index].title = action.payload.title;
      //   state.todoList[index].body = action.payload.body;
      //   state.todoList[index].date = action.payload.date;
      //   state.todoList[index].sticker = action.payload.sticker;
      //   state.todoList[index].done = action.payload.done;
      state.todoList[index] = { ...action.payload };
    },
    deleteTodoState: (state, action: PayloadAction<TodoType>) => {
      let index = state.todoList.findIndex(
        (item) => item.uid === action.payload.uid
      );
      state.todoList.splice(index, 1);
    },
    sortTodoState: (state, action: PayloadAction<string>) => {},
    clearTodoState: (state) => {
      state.todoList = [];
    },
  },
});

export const {
  initTodoState,
  addTodoState,
  updateTodoState,
  deleteTodoState,
  sortTodoState,
  clearTodoState,
} = todoSlice.actions;

export default todoSlice.reducer;
