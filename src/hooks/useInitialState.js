import { useState } from 'react'

const useInitialState = () => {
  const initialState = {
    coins: [],
    markets: []
  }
  const [state, setState] = useState(initialState)

  const listcoins = payload => {
    setState({
      ...state,
      coins: payload
    })
  }
  const listMarkets = payload => {
    setState({
      ...state,
      markets: payload
    })
  }
  return {
    listcoins,
    listMarkets,
    state
  }
}

export default useInitialState
