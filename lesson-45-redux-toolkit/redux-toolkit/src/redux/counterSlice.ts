import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
    add: (state, action: PayloadAction<number>) => {
      state.value = state.value + action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        incrementAsync.pending,
        () => {
          console.log('Promise pending ...');
        }
      )
      .addCase(
        incrementAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          console.log('Promise fulfilled ...');
          state.value = state.value + action.payload;
        })
  }
})

export const incrementAsync = createAsyncThunk(
  'counter/incrementAsync',
  async (myCount: number): Promise<number> => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    return myCount;
  }
)

export const { increment, decrement, add } = counterSlice.actions;
export default counterSlice.reducer;