import { PayloadAction } from '@reduxjs/toolkit/src/createAction';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { LoginPayload } from 'common';
import { notify } from 'helper/notify';
import { handleRegister } from 'apis/auth';
export interface AuthState {
    isLoggedIn: boolean;
    logging?: boolean;
    curUser: any;
    loading: boolean;
}

const initialState: AuthState = {
    isLoggedIn: false,
    logging: false,
    curUser: undefined,
    loading: false
}
export const register = createAsyncThunk("auth/register", async (payload: LoginPayload) => {
    try {
        console.log('payload', payload)
        const res = await handleRegister(payload);
        console.log(res)
        // if (res.statusCode === 200) {
        //     notify("success", "", "");
        //     // dispatch(handleGetCurUser(res.data.accessToken))
        //     return res.data;
        // }
    } catch (error: any) {
        notify("error", error.data.message, "");
    } finally {
    }
});
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<LoginPayload>) {
            state.logging = true
        },
        // register(state, action: PayloadAction<LoginPayload>) {
        //     state.loading = true
        // },
        loginSuccess(state, action: PayloadAction<any>) {
            state.isLoggedIn = true;
            state.logging = false;
            state.curUser = action.payload
        },
        loginFailed(state) {
            state.logging = false
        },
        logout(state) {
            state.isLoggedIn = false
            state.curUser = undefined;
        }
    }
})
// Actions
export const authActions = authSlice.actions;

// Selectors
export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn
export const selectIsLogging = (state: any) => state.auth.logging

// Reducer
const authReducer = authSlice.reducer;
export default authReducer; 