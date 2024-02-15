import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';

import counterReducer from './reducer/counterSlice';
import authReducer from './reducer/authSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer

    },
});

export default store;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export type RootState = ReturnType<typeof store.getState>;

