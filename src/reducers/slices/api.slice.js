import { API_START, API_END } from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case API_START:
      return {
        ...state,
        isLoadingData: true
      };
    case API_END:
      return {
        ...state,
        isLoadingData: false
      };
    default:
      return state;
  }
}


