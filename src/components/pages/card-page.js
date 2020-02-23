import { useHistory, useParams } from 'react-router-dom'

import { FlipCard } from '../card'
import React from 'react'
import { useCard } from '../hooks'

export default function CardPage() {
  const history = useHistory()

  if (history.location.state && history.location.state.card) {
    return <MyCard card={history.location.state.card} />
  }

  return <FetchedCard />
}

function MyCard({ card }) {
  return (
    <>
      <br />
      <FlipCard frontText={card.frontText} backText={card.backText} />
    </>
  )
}

function FetchedCard() {
  const { cardId } = useParams()
  const { loading, error, data } = useCard(cardId)

  if (loading)
    return (
      <>
        <br />
        <FlipCard frontText="Loading card" backText="Loading card" />
      </>
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
