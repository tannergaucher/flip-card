import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { IsAuthContext, UserContext } from '../context'
import { Fieldset, Form, Input, Button } from '../styles'

export default function Signup() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const { setIsAuth } = useContext(IsAuthContext)
  const { setUser } = useContext(UserContext)

  const history = useHistory()

  return (
    <Fieldset disabled={loading}>
      {error && (
        <h2 style={{ color: `var(--warning)` }}>Error: {error.message}</h2>
      )}

      <Form
        onSubmit={async e => {
          e.preventDefault()
          setLoading(true)
          const res = await fetch(`/.netlify/functions/signup`, {
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
            setIsAuth(true)
            setLoading(false)
            setUser(data)
            history.push(`/`)
          } else {
            const { error } = await res.json()
            setError(error)
            setLoading(false)
            setPassword('')
          }
        }}
      >
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <Button
          type="submit"
          primary
          style={{
            background: loading ? 'grey' : '',
          }}
        >
          Sign Up
        </Button>
      </Form>
    </Fieldset>
  )
}
