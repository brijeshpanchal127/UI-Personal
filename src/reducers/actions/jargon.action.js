import { ADD_FETCHED_DATA } from './types.js';

export const addFetchedData = data => { 
    return {
      type: ADD_FETCHED_DATA,
      payload: data
    };
  }
  