import { PUBLIC_DRAGONS } from './types';
import { BACKEND } from '../config';

export const fetchPublicDragons = () => dispatch => {
  dispatch({ type: PUBLIC_DRAGONS.FETCH });

  return fetch(`${BACKEND.ADDRESS}/dragons/public-dragons`)
    .then(res => res.json())
    .then(json => {
      if(json.type === 'error') {
        dispatch({ type: PUBLIC_DRAGONS.FETCH_ERROR, message: json.message });
      } else {
        dispatch({ type: PUBLIC_DRAGONS.FETCH_SUCCESS, message: json.message });
      }
    })
    .catch(error => dispatch({ type: PUBLIC_DRAGONS.FETCH_ERROR, message: error.message }));
};