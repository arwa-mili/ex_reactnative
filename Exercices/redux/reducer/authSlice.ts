import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState, AppThunk } from '../store';

interface AuthState {
    token: string | null;
}

const initialState: AuthState = {
    token: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken(state, action: PayloadAction<string | null>) {
            state.token = action.payload;
        },
    },
});

export const { setToken } = authSlice.actions;


export const loginUser = (username: string, password: string): AppThunk => async (dispatch) => {
    try {
        const response = await axios.post<{ token: string }>('http://localhost:3000/users/login', { username, password });
        dispatch(setToken(response.data.token));
    } catch (error) {
        console.error('Login failed:', error.message);

    }
};
//with queryBuilder


export const selectToken = (state: RootState) => state.auth.token;

export default authSlice.reducer;




/*import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppThunk } from '../store';

interface AuthState {
  token: string | null;
}

const initialState: AuthState = {
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string | null>) {
      state.token = action.payload;
    },
  },
});

export const { setToken } = authSlice.actions;

export default authSlice.reducer;

export const loginUser = (username: string, password: string): AppThunk => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3000/users/login', { username, password });
    dispatch(setToken(response.data.token));
  } catch (error) {
    console.error('Login failed:', error.message);
    // Handle error (e.g., show error message)
  }
};

*/



/*
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import {  AsyncThunk } from '@reduxjs/toolkit';


type RejectPayload = {
  error: string;
};
interface User {
    username: string;

}
interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    error: string | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    error: null,
};


const authenticateUser = async (userData: { username: string; password: string }): Promise<User> => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userData.username === 'arwa' && userData.password === 'password') {
                resolve({ username: userData.username });

            } else {
                reject(new Error('Invalid username or password'));
            }
        }, 1000);
    });
};

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (userData: { username: string; password: string }, { rejectWithValue }) => {
      try {
        const user = await authenticateUser(userData);
        return user;
      } catch (error) {
       
        return rejectWithValue<RejectPayload>({ error: error.message });
      }
    }
  );

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logoutUser(state) {
            state.isAuthenticated = false;
            state.user = null;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder

            .addCase(loginUser.rejected, (state, action) => {
                state.isAuthenticated = false;
                state.user = null;
                state.error = action.payload as string;
            });
    },
});

export const { logoutUser } = authSlice.actions;

export default authSlice.reducer;

*/




