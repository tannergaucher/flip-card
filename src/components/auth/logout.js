import React, { useContext } from 'react'

import { IS_AUTH_CONTEXT, MY_CARDS_CONTEXT, USER_CONTEXT } from '../context'

export default function Logout() {
  const { setIsAuth } = useContext(IS_AUTH_CONTEXT)
  const { setUser } = useContext(USER_CONTEXT)
  const { setMyCards } = useContext(MY_CARDS_CONTEXT)

  return (
    <button
      className="btn"
      style={{ margin: `0` }}
      onClick={() => {
        localStorage.removeItem('token')
        setIsAuth(false)
        setUser(null)
        setMyCards(null)
      }}
    >
      Logout
    </button>
  )
}
