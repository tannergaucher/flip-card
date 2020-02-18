import { FlipCard } from '../card'
import React from 'react'
import { useCard } from '../hooks'
import { useParams } from 'react-router-dom'

export default function CardPage() {
  const { cardId } = useParams()
  const { loading, error, data } = useCard(cardId)

  if (loading) return <h2>Loading card...</h2>

  if (error) return <h2 style={{ color: `var(--warning)` }}>Error!</h2>

  return <>{data && data.card && <FlipCard card={data.card} />}</>
}
