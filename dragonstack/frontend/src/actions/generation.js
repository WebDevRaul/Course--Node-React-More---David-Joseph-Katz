import { GENERATION } from './types';
import { BACKEND } from '../config';

export const fetchGeneration = () => dispatch => {
  dispatch({ type: GENERATION.FETCH });

  return fetch(`${BACKEND.ADDRESS}/generation`)
    .then(res => res.json())
    .then(res => {
      if (res.type === 'error') {
        dispatch({ type: GENERATION.FETCH_ERROR, message: res.message });
      } else {
        dispatch({ type: GENERATION.FETCH_SUCCESS, generation: res.generation });
      }
    })
    .catch(err => dispatch({ type: GENERATION.FETCH_ERROR, message: err.message }));
}