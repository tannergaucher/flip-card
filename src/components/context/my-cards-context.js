import React, {
  createContext,
  useContext,
  useLayoutEffect,
  useState,
} from 'react'

import { IsAuthContext } from '.'

export const MyCardsContext = createContext()

export default function MyMyCardsContext({ children }) {
  const [data, setMyCards] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { isAuth } = useContext(IsAuthContext)

  useLayoutEffect(() => {
    setLoading(true)
    const token = localStorage.getItem('token')

    token ? fetchMyCards(token) : setLoading(false)

    async function fetchMyCards(token) {
      try {
        const res = await fetch(`/.netlify/functions/get-my-cards`, {
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
          setMyCards(data)
          setLoading(false)
        }
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }
  }, [isAuth])

  return (
    <MyCardsContext.Provider value={{ data, setMyCards, loading, error }}>
      {children}
    </MyCardsContext.Provider>
  )
}
