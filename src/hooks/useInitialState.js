import { useState } from 'react'

const useInitialState = () => {
  const initialState = {
    coinsSearch: [],
    allCoins: [],
    markets: [],
  }
  const [state, setState] = useState(initialState)

  const listcoinsSearch = payload => {
    setState({
      ...state,
      coinsSearch: payload
    })
  }
  const listAllCoins = payload => {
    setState({
      ...state,
      allCoins: payload
    })
  }
  const listMarkets = payload => {
    setState({
      ...state,
      markets: payload
    })
  }
  return {
    listcoinsSearch,
    listMarkets,
    listAllCoins,
    state
  }
}

export default useInitialState
