import { ADD_FAVORITE_TERM, REMOVE_FAVORITE_TERM } from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        case ADD_FAVORITE_TERM:
            return [...state, action.payload];
        /*
        return {
            ...state,
            favorites: [...state.favorites, action.payload]
        };
        */
        case REMOVE_FAVORITE_TERM:
            return state.filter(e => e.name !== action.payload.name);
        default:
            return state;
    }
}
