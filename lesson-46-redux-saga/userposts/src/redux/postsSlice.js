import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  posts: {},
  loading: false,
}

const postsSlice = createSlice({
  name: 'posts',
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
        requestPostByUserId.pending,
        (state) => {
          state.loading = true;
        }
      )
      .addCase(
        requestPostByUserId.fulfilled,
        (state, action) => {
          state.loading = false;
          state.posts[action.payload.userId] = action.payload.posts;
        })
  }
})

export const requestPostByUserId = createAsyncThunk(
  'posts/requestPostByUserId',
  async (userId) => {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Запит не вдався: ' + response.statusText);
        }
        return response.json(); // Парсинг тіла відповіді як JSON
      });

    return {
      userId,
      posts
    };
  }
)

// export const { setCurrent, prev, next } = usersSlice.actions;
export default postsSlice.reducer;