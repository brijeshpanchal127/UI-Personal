import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./types";
import { store } from "../store";

const loginSuccess = (payload) => {
    return {
        type: LOGIN_SUCCESS,
        payload: payload
    };
}

const loginFail = (payload) => {
    return {
        type: LOGIN_FAIL,
        payload: payload
    };
}

const logout = (payload) => {
    return {
        type: LOGOUT,
        payload: payload
    };
}

export default {
    loginSuccess,
    loginFail,
    logout
}
