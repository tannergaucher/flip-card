import React, { createContext, useLayoutEffect, useState } from 'react'

export const UserContext = createContext()

export default function MyUserContext({ children }) {
  const [data, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useLayoutEffect(() => {
    setLoading(true)
    const token = localStorage.getItem('token')
    token ? fetchUser(token) : setLoading(false)

    async function fetchUser(token) {
      try {
        const res = await fetch(`/.netlify/functions/get-user`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            token,
          }),
        })

        if (res.ok) {
          const { data } = await res.json()
          setUser(data)
        }

        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }
  }, [])

  return (
    <UserContext.Provider value={{ data, loading, error, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
