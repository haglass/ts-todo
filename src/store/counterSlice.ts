import { createSlice } from "@reduxjs/toolkit";
// action: 함수로서 store의 state를 업데이트한다
import type { PayloadAction } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
export type CounterState = {
  value: number;
};
const initialState: CounterState = {
  value: 0,
};
// 실제 활용할 slice생성함
export const counterSlice = createSlice({
  name: "counter",
  //   initialState: initialState,
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmout: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});
export const { increment, decrement, incrementByAmout } = counterSlice.actions;
export default counterSlice.reducer;
