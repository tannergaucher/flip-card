import React, { createContext, useLayoutEffect, useState } from 'react'

export const IsAuthContext = createContext()

export default function IsAuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false)

  useLayoutEffect(() => {
    const token = localStorage.getItem('token')

    if (token) {
      setIsAuth(true)
    }
  }, [])

  return (
    <IsAuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </IsAuthContext.Provider>
  )
}
