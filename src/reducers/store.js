import rootReducer from './root';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ApiMiddleware from "./api.middleware";

import { LOGIN_SUCCESS } from "./actions/types";

// export const persistStore = (s) => {
//     if(s){
//       localStorage.setItem("store", JSON.stringify(s));
//     }
//   };
  
// export const loadStore = () => {
// try{
//     const s = localStorage.getItem("store");
//     if (s  === null) return undefined;
//     return JSON.parse(s);
// }catch(e){
//     return undefined;
// }
// };

// const initialState = loadStore() || {

const initialState = {};

// for use with redux-devtools-extension installed
const composedEnhancer = composeWithDevTools(
  applyMiddleware(ApiMiddleware)
)
export const store = createStore(rootReducer, initialState, composedEnhancer);

// export const store = createStore(rootReducer, initialState, compose(
//         window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),
// ));
//export const store = createStore(rootReducer,initialState, applyMiddleware(thunk));
window.store = store;

//export default store;


