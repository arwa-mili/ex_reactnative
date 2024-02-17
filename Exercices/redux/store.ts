
import { api } from '../services/auth';
import { api2 } from './reducer/yetAnotherSlice';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import counterReducer from './reducer/counterSlice';
import authReducer from './reducer/authSlice';
export const store = configureStore({
    reducer: {
        counter: counterReducer,

        auth: authReducer,

        api: api.reducer,
        api2: api2.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(api.middleware, api2.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch)
export default store;