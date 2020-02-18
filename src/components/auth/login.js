import { IsAuthContext, UserContext } from '../context'
import React, { useContext, useState } from 'react'

import { useHistory } from 'react-router-dom'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const { setIsAuth } = useContext(IsAuthContext)
  const { setUser } = useContext(UserContext)
  const history = useHistory()

  return (
    <fieldset disabled={loading}>
      {error && (
        <h2 style={{ color: `var(--warning)` }}>Error: {error.message}</h2>
      )}

      <form
        onSubmit={async e => {
          e.preventDefault()
          setLoading(true)
          const res = await fetch(`/.netlify/functions/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username,
              password,
            }),
          })

          if (res.ok) {
            const { data } = await res.json()
            localStorage.setItem('token', data.token)
            setUser(data)
            setLoading(false)
            setIsAuth(true)
            history.push(`/`)
          } else {
            const { error } = await res.json()
            setError(error)
            setPassword('')
            setLoading(false)
          }
        }}
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          primary
          style={{
            background: loading ? 'grey' : '',
          }}
        >
          Login
        </button>
      </form>
    </fieldset>
  )
}
