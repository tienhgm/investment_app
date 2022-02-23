import { LoginPayload } from 'common/index';
import { sendPost, sendPatch } from "apis/axios";
export const handleRegister = (account: LoginPayload) => sendPost('/accounts/register', account)
export const handleLogin = (account: LoginPayload) => sendPost('/accounts/login', account) 