import { ADD_FETCHED_DATA } from '../actions/types';

export default function jargonsReducer(state = [], action) {
    switch (action.type) {
        case ADD_FETCHED_DATA:
            return action.payload;
        /*
        return {
            ...state, 
            jargons:action.payload
        };
        */
        default:
            return state;
    }
}
