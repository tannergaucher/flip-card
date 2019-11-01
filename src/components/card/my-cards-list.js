import React, { useContext } from 'react'
import styled from 'styled-components'

import { CardPreview } from '../card'
import { MyCardsContext } from '../context'

const StyledMyCardsList = styled.div`
  margin-top: 2rem;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    grid-gap: 1rem;
  }
`

export default function MyCardsList() {
  const { data, loading, error } = useContext(MyCardsContext)

  return (
    <StyledMyCardsList>
      {loading && <h2>Loading cards...</h2>}
      {error && (
        <h2 style={{ color: `var(--warning)` }}>Error! ${error.message}</h2>
      )}
      {data &&
        data.cards &&
        data.cards.map(card => <CardPreview key={card._id} card={card} />)}
    </StyledMyCardsList>
  )
}
