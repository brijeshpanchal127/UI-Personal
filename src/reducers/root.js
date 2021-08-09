import { combineReducers } from 'redux';
import jargonsReducer from './slices/jargon.slice';
import favoritesReducer from './slices/favorite.slice';
import apisReducer from './slices/api.slice';
import landingReducer from './slices/landing.slice';
import loginReducer from './slices/auth.slice';
import displayReducer from './slices/display.slice';

export default combineReducers({
    landing: landingReducer,
    login: loginReducer,
    display: displayReducer
    // jargons: jargonsReducer,
    // favorites: favoritesReducer,
    // apis: apisReducer
});

