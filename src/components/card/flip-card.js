import React, { useState } from 'react'
import { animated, useSpring } from 'react-spring'

export default function FlipCard({ frontText, backText, cardId }) {
  const [flipped, setFlipped] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })

  return (
    <div onClick={() => setFlipped(!flipped)}>
      <animated.div
        className="flipcard"
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
      <animated.div
        className="flipcard"
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
  )
}
