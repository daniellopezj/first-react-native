import { useState } from 'react'
import { getStorage } from '../libs/storage'

const useAuthState = () => {
  let token;
  getStorage('token').then(res => {
    token = res
  }
  )
  const initialAuthState = {
    isLogin: !!token,
    token: token
  }

  const [state, setState] = useState(initialAuthState)

  const Login = payload => {
    setState({
      ...state,
      isLogin: true,
      token: payload
    })
  }

  const LogOut = () => {
    setState({
      ...state,
      isLogin: false,
      token: null
    })
  }
  return {
    LogOut,
    Login,
    state
  }
}

export default useAuthState
