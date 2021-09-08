import {
  SELECT_STORE,
  CACHE_STORES_DATA,
  SELECT_CURRENT_FUNCTION,
  DISPLAY_MESSAGE,
} from "./types";

export const selectStore = (storeLocation) => {
  return {
    type: SELECT_STORE,
    payload: storeLocation,
  };
};
export const selectCurrentFunction = (currentFunction) => {
  return {
    type: SELECT_CURRENT_FUNCTION,
    payload: currentFunction,
  };
};
export const cacheStoresData = (payload) => {
  return {
    type: CACHE_STORES_DATA,
    payload: payload,
  };
};
export const MessageData = (payload) => {
  return {
    type: DISPLAY_MESSAGE,
    payload: payload,
  };
};
