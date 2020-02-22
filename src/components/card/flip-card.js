import React, { useState } from 'react'
import { animated, useSpring } from 'react-spring'

import styled from 'styled-components'

const StyledCard = styled.div`
  .c {
    position: absolute;
    left: 0;
    right: 0;
    transform: translate(50%, -50%);
    padding: var(--space-sm);
    margin: var(--space-sm);
    border-radius: var(--radius);
    box-shadow: var(--elevation-3);
    background: var(--bg-2);
    text-align: center;
    cursor: pointer;
    will-change: transform, opacity;
  }
`

export default function FlipCard({ frontText, backText, cardId }) {
  const [flipped, setFlipped] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })

  return (
    <StyledCard onClick={() => setFlipped(!flipped)}>
      <animated.div
        className="c"
        style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
      >
        <h1
          className="text--xxxl"
          style={{
            wordBreak: `break-all`,
          }}
        >
          {frontText}
        </h1>
      </animated.div>
      <div>
        <animated.div
          className="c"
          style={{
            opacity,
            transform: transform.interpolate(t => `${t} rotateX(180deg)`),
          }}
        >
          <h1
            className="text--xxxl"
            style={{
              wordBreak: `break-all`,
            }}
          >
            {backText}
          </h1>
        </animated.div>
      </div>
    </StyledCard>
  )
}
