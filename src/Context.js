import React, { createContext, useState } from 'react'

export const Context = createContext(null)

const Provider = ({ children }) => {
  const [isAuth, SetIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  })

  const value = {
    isAuth,
    activeAuth: (token) => {
      SetIsAuth(true)
      window.sessionStorage.setItem('token', token)
    },
    removeAuth: () => {
      SetIsAuth(false)
      window.sessionStorage.removeItem('token')
    }
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default {
  Provider,
  Consumer: Context.Consumer
}
