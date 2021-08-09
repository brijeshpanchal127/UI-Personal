import { SELECT_STORE_SELECTION_DISPLAY, SELECT_STORE_FUNCTIONALITIES_DISPLAY, SELECT_STORE_POS_DISPLAY, SELECT_LOGIN_DISPLAY } from "../actions/types";

export default function displayReducer(state = { displayProfile: "LOGIN" }, action) {
    switch (action.type) {
    case SELECT_STORE_SELECTION_DISPLAY:
        return {
            ...state,
            displayProfile: "STORE_SELECTION"
        };
    case SELECT_STORE_FUNCTIONALITIES_DISPLAY:
        return {
            ...state,
            displayProfile: "STORE_FUNCTIONALITIES"
        };
    case SELECT_STORE_POS_DISPLAY:
        return {
            ...state,
            displayProfile: "STORE_POS"
        };
    case SELECT_LOGIN_DISPLAY:
        return {
            ...state,
            displayProfile: "LOGIN"
        };
    default:
        return state;
    }
}