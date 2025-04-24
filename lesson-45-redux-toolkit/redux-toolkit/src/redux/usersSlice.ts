import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../types/User.interface.ts'

interface UsersState {
  users: User[];
  loading: boolean;
  currentId: number;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  currentId: 0,
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setCurrent: (state, action: PayloadAction<number>) => {
      state.currentId = action.payload;
    },
    next: (state) => {
      if(state.currentId + 1 <= state.users.length) {
        state.currentId = state.currentId + 1;
      }
    },
    prev: (state) => {
      if (state.currentId - 1 > 0) {
        state.currentId = state.currentId - 1;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        getUsersFromServer.pending,
        (state) => {
          state.loading = true;
        }
      )
      .addCase(
        getUsersFromServer.fulfilled,
        (state, action: PayloadAction<User[]>) => {
          state.loading = false;
          state.users = action.payload;
          state.currentId = state.users[0]?.id || 0;
        })
  }
})

export const getUsersFromServer = createAsyncThunk(
  'users/getUsersFromServer',
  async (): Promise<User[]> => {

    await new Promise(resolve => setTimeout(resolve, 3000));

    const users: User[] = await fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Запит не вдався: ' + response.statusText);
        }
        return response.json(); // Парсинг тіла відповіді як JSON
      });

    return users;
  }
)

export const { setCurrent, prev, next } = usersSlice.actions;
export default usersSlice.reducer;