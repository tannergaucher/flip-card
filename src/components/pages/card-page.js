import { FlipCard } from '../card'
import React from 'react'
import { useCard } from '../hooks'
import { useParams } from 'react-router-dom'

export default function CardPage({ pageContext }) {
  const { cardId } = useParams()

  const { loading, error, data } = useCard(cardId)

  if (loading)
    return (
      <div>
        <br />
        <FlipCard frontText="Loading card" backText="Loading card" />
      </div>
    )

  if (error)
    return (
      <h2 className="padding" style={{ color: `var(--warning)` }}>
        Error!
      </h2>
    )

  return (
    <div className="padding">
      <br />
      {data && data.card && (
        <FlipCard
          frontText={data.card.frontText}
          backText={data.card.backText}
          cardId={data.card._id}
        />
      )}
    </div>
  )
}
