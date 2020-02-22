import React, { createContext, useLayoutEffect, useState } from 'react'

export const IS_AUTH_CONTEXT = createContext()

export default function IsAuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false)

  useLayoutEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      setIsAuth(true)
    }
  }, [])

  return (
    <IS_AUTH_CONTEXT.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </IS_AUTH_CONTEXT.Provider>
  )
}
