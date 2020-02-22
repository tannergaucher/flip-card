import React, {
  createContext,
  useContext,
  useLayoutEffect,
  useState,
} from 'react'

import { IS_AUTH_CONTEXT } from '.'

export const MY_CARDS_CONTEXT = createContext()

export default function MyCardsProvider({ children }) {
  const [data, setMyCards] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { isAuth } = useContext(IS_AUTH_CONTEXT)

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
    <MY_CARDS_CONTEXT.Provider value={{ data, loading, error, setMyCards }}>
      {children}
    </MY_CARDS_CONTEXT.Provider>
  )
}
