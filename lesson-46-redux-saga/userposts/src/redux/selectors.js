
export const usersSelector =
  (state) => state.users.users;

export const usersLoadingSelector =
  (state) => state.users.loading;

export const postsSelector =
  userId => state => state.posts.posts[userId];

// const postsSell = function (userId) {
//   return function(state) {
//     return state.posts.posts[userId];
//   }
// }

export const postsLoadingSelector =
  (state) => state.posts.loading;
