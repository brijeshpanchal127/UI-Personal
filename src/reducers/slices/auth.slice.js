import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../actions/types";

export default function loginReducer(state = {
    isLoggedIn: false,
    message: "",
    auth: {},
}, action
    ) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                auth: action.payload,
            };
        case LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                auth: null,
            };
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                auth: null,
            };
        default:
            return state;
    }
}
