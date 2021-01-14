
import { SET_SEARCH_LIST, SET_LIST } from '../types/coinsTypes'

export const setList = (list) => (dispatch) => {
  dispatch({
    type: SET_LIST,
    payload: list
  })
};

export const setListSearch = (list) => (dispatch) => {
  dispatch({
    type: SET_SEARCH_LIST,
    payload: list
  })
};