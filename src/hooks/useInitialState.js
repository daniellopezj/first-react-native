import { useState } from 'react'

const useInitialState = () => {
  const initialState = {
    coins: []
  }
  const [state, setState] = useState(initialState)

  const listcoins = payload => {
    setState({
      ...state,
      coins: payload
    })
  }
  return {
    listcoins,
    state
  }
}

export default useInitialState
