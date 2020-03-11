import { useEffect, useState } from 'react'

export default function UseCardHook(cardId) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)
    async function fetchCard(cardId) {
      const res = await fetch(`/.netlify/functions/get-card`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cardId,
        }),
      })

      if (res.ok) {
        const { data } = await res.json()
        setData(data)
        setLoading(false)
      } else {
        const { error } = await res.json()
        setError(error)
      }
    }

    fetchCard(cardId)
  }, [cardId])
  return { loading, error, data }
}
