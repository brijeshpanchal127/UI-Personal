import { SELECT_STORE_SELECTION_DISPLAY, SELECT_STORE_FUNCTIONALITIES_DISPLAY, SELECT_STORE_POS_DISPLAY, SELECT_LOGIN_DISPLAY } from "../actions/types";

export const selectDisplayLogin = (profile) => {
    return {
        type: SELECT_LOGIN_DISPLAY,
        payload: profile,
      };
}
export const selectDisplayStoreSelection = (profile) => {
    return {
        type: SELECT_STORE_SELECTION_DISPLAY,
        payload: profile,
      };
}
export const selectDisplayStoreFunctionalities = (profile) => {
    return {
        type: SELECT_STORE_FUNCTIONALITIES_DISPLAY,
        payload: profile,
      };
}
export const selectDisplayStorePos = (profile) => {
    return {
        type: SELECT_STORE_POS_DISPLAY,
        payload: profile,
      };
}