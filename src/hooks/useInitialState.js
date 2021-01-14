import { useState } from 'react'
import login from '../reducers/login'
// import { coinsReducer } from '../reducers/coins'

// const useInitialState = () => {
//   // const mainData = {
//   //   coinsSearch: [],
//   //   allCoins: [],
//   //   markets: [],
//   //   currentCoint: {},
//   //   token: ''
//   // }

//   // const [initialState, setState] = useState(mainData)

//   // const setList = payload => {
//   //   setState({
//   //     ...state,
//   //     coinsSearch: payload,
//   //     allCoins: payload
//   //   })
//   // }

//   // const listCoinsSearch = payload => {
//   //   setState({
//   //     ...state,
//   //     coinsSearch: payload,
//   //   })
//   // }

//   // const listMarkets = payload => {
//   //   setState({
//   //     ...state,
//   //     markets: payload
//   //   })
//   // }

//   // return {
//   //   // setList,
//   //   // listCoinsSearch,
//   //   // listMarkets,
//   //   // coinsReducer,
//   //   initialState
//   // }
// }

export default useInitialState = {
  coinsSearch: [],
  allCoins: [],
  markets: [],
  currentCoint: {},
  token: ''
}
