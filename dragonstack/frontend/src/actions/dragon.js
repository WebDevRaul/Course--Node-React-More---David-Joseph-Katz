import { DRAGON } from './types';
import { BACKEND } from '../config';

export const fetchDragon = () => dispatch => {
  dispatch({ type: DRAGON.FETCH });

  return fetch(`${BACKEND.ADDRESS}/dragon/new`, {
    credentials: 'include'
  })
    .then(res => res.json())
    .then(res => {
      if (res.type === 'error') {
        dispatch({ type: DRAGON.FETCH_ERROR, message: res.message });
      } else {
        dispatch({ type: DRAGON.FETCH_SUCCESS, dragon: res.dragon });
      }
    })
    .catch(err => dispatch({ type: DRAGON.FETCH_ERROR, message: err.message }));
}