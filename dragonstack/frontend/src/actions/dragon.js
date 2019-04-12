import { DRAGON } from './types';

export const fetchDRAGON = () => dispatch => {
  dispatch({ type: DRAGON.FETCH });

  return fetch('http://localhost:3000/dragon/new')
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