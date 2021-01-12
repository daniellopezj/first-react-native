import { useState } from 'react'

const useInitialState = () => {
  const initialState = {
    coinsSearch: [],
    allCoins: [],
    markets: [],
    currentCoint: {},
    token: ''
  }

  const [state, setState] = useState(initialState)

  const setList = payload => {
    setState({
      ...state,
      coinsSearch: payload,
      allCoins: payload
    })
  }

  const listCoinsSearch = payload => {
    setState({
      ...state,
      coinsSearch: payload,
    })
  }
  const listMarkets = payload => {
    setState({
      ...state,
      markets: payload
    })
  }
  return {
    setList,
    listCoinsSearch,
    listMarkets,
    // setCurrentCoint,
    state
  }
}

export default useInitialState
