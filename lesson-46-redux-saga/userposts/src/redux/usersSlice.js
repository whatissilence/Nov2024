import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
  loading: false,
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // setCurrent: (state, action: PayloadAction<number>) => {
    //   state.currentId = action.payload;
    // },
    // next: (state) => {
    //   if(state.currentId + 1 <= state.users.length) {
    //     state.currentId = state.currentId + 1;
    //   }
    // },
    // prev: (state) => {
    //   if (state.currentId - 1 > 0) {
    //     state.currentId = state.currentId - 1;
    //   }
    // }
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
        (state, action) => {
          state.loading = false;
          state.users = action.payload;
        })
  }
})

export const getUsersFromServer = createAsyncThunk(
  'users/getUsersFromServer',
  async () => {
    console.log('getUsersFromServer')
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Запит не вдався: ' + response.statusText);
        }
        return response.json(); // Парсинг тіла відповіді як JSON
      });

    return users;
  }
)

// export const { setCurrent, prev, next } = usersSlice.actions;
export default usersSlice.reducer;