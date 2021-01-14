
import { SET_SEARCH_LIST, SET_LIST } from '../types/coinsTypes'

const initialState = {
  allCoins: [],
  coinsSearch: []
}

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_LIST:
      console.log('Saludando desde coins reducer')
      return { ...state, allCoins: payload }
    case SET_SEARCH_LIST:
      console.log('Saludando desde SET_SEARCH_LIST redurec')
      return { ...state, coinsSearch: payload }
    default:
      return state
  }
}
