import { SELECT_STORE, CACHE_STORES_DATA, SELECT_CURRENT_FUNCTION, DISPLAY_MESSAGE } from "../actions/types";

export default function landingReducer(state = {
  //storeSelected: false, 
  selectedStore: null,
  storesData: {
    storeProfile: {
      "OPEN POS": []
    },
    storeLocations: []
  },
  messages: null,
  currentStoreFunction: null
}, action
) {
  switch (action.type) {
    case SELECT_STORE:
      return {
        ...state,
        //storeSelected: true,
        selectedStore: action.payload,
      };
    case CACHE_STORES_DATA:
      console.log("slice layer: cacheStoreLocations");
      console.log(action.payload.storeLocations);
      return {
        ...state,
        storesData: action.payload,
      };
    case SELECT_CURRENT_FUNCTION:
      return {
        ...state,
        currentStoreFunction: action.payload,
      };
    case DISPLAY_MESSAGE:
      return {
        ...state,
        messages: action.payload.messages,
      };
    default:
      return state;
  }
}
