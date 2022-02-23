// import { LoginPayload } from 'common';
// import { authActions } from "app/slices/authSlice";
// import { takeLatest, call } from "redux-saga/effects";
// import { PayloadAction } from '@reduxjs/toolkit';
// import authApi, { handleRegister } from 'apis/auth/index';


// function* flowRegister(action: PayloadAction<LoginPayload>) {
//     console.log('saga', action.payload)
//     // const response:any = yield call(authApi.post, action.payload)
//     // yield put()
//     // if (response) console.log(response)
// }
export function* authSaga() {
    // yield fork(watchLoginFlow);
    // yield takeLatest(authActions.register.type, flowRegister)
}