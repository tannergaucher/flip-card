import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { Header, Main, Footer } from '.'

export default function App() {
  return (
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
  )
}
