import { FlipCard } from '../card'
import React from 'react'
import { useCard } from '../hooks'
import { useParams } from 'react-router-dom'

export default function CardPage({ pageContext }) {
  const { cardId } = useParams()

  const { loading, error, data } = useCard(cardId)

  if (loading)
    return (
      <div style={{ height: `50vh`, display: `flex`, alignItems: `center ` }}>
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
    <div
      className="padding"
      style={{
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        height: `50vh`,
        width: `50vw`,
      }}
    >
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
