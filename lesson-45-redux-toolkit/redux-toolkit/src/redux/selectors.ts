import { RootState } from './store.ts'

export const counterSelector =
  (state: RootState) => state.counter.value;

export const usersSelector =
  (state: RootState) => state.users.users;

export const usersLoadingSelector =
  (state: RootState) => state.users.loading;

export const usersCurrentIdSelector =
  (state: RootState) => state.users.currentId;