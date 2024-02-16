
import { api } from '../services/auth'
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import counterReducer from './reducer/counterSlice';
import authReducer from './reducer/authSlice';
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth:authReducer,
        [api.reducerPath]: api.reducer,

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([api.middleware])
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch)
export default store;