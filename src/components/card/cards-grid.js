import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { FlipCard } from '../card'
import { MyCardsContext, UserContext } from '../context'

export default function CardsGrid() {
  const { data, loading, error } = useContext(MyCardsContext)

  const isShare = window.navigator.share !== undefined

  if (loading)
    return <FlipCard frontText="Loading cards" backText="Loading cards" />

  if (error)
    return <h2 style={{ color: `var(--warning)` }}>Error! ${error.message}</h2>

  if (data.cards.length === 0)
    return <h1 className="title">You haven't made any cards yet :( </h1>

  return (
    <div className="content-grid">
      {data &&
        data.cards &&
        data.cards.map(card => (
          <div className="card" key={card._id}>
            <Link
              className="nav-link"
              to={{
                pathname: `/card/${card._id}`,
                state: {
                  card,
                },
              }}
            >
              <h2 className="card-heading">{card.frontText}</h2>
              <h2 className="card-heading">{card.backText}</h2>
            </Link>
            <div style={{ padding: `0 var(--space-sm)` }}>
              <hr className="hr" style={{ width: `100%` }} />
              {isShare && <Share card={card} />}
              <Link
                to={{
                  pathname: `/edit-card/${card._id}`,
                  state: {
                    frontText: card.frontText,
                    backText: card.backText,
                    cardId: card._id,
                  },
                }}
              >
                <button className="btn">Edit</button>
              </Link>
            </div>
          </div>
        ))}
    </div>
  )
}

const Share = ({ card }) => {
  const { data } = useContext(UserContext)

  return (
    <button
      className="btn"
      onClick={() => {
        if (window.navigator.share) {
          window.navigator.share({
            title: `flipcard.fun`,
            text: `${data.user.username} sent you a flipcard!`,
            url: `https://flipcard.fun/card/${card._id}`,
          })
        }
      }}
    >
      Share
    </button>
  )
}
