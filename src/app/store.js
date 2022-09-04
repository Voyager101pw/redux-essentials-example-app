import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice.js';
import usersReducer from '../features/users/usersSlice.js';
import notificationsSlice from '../features/notifications/notificationsSlice.js';
import { apiSlice } from '../features/api/apiSlice';

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    notifications: notificationsSlice,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
    // - это сделано, чтобы сохранить предыдущие redux-thunk (fetchPost fetchUsers fetchNotif...)
    // из каждого среза (слайса) и в тоже время применить вновь созданный мидлвар из apiSlice
})
