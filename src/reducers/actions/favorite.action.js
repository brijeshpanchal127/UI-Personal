import { ADD_FAVORITE_TERM, REMOVE_FAVORITE_TERM } from './types.js';

export const addToFavorite = (data) => {
  return {
    type: ADD_FAVORITE_TERM,
    payload: {
      name: data.name,
      description: data.description
    }
  }
};

export const removeFromFavorite = name => {
  return {
    type: REMOVE_FAVORITE_TERM,
    payload: {
      name
    }
  }
}

