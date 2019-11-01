import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { FlipCard } from '../card'
import { useCard } from '../hooks'

const StyledCardPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

export default function CardPage() {
  const { cardId } = useParams()
  const { loading, error, data } = useCard(cardId)

  console.log(loading)

  return (
    <StyledCardPage>
      {loading && <h2>Loading card...</h2>}
      {error && <h2 style={{ color: `var(--warning)` }}>Error!</h2>}
      {data && data.card && <FlipCard card={data.card} />}
    </StyledCardPage>
  )
}
