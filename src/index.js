import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './components/elements'
import * as serviceWorker from './serviceWorker'

import UserProvider from './components/context/user-context'
import IsAuthContextProvider from './components/context/is-auth-context'

ReactDOM.render(
  <IsAuthContextProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </IsAuthContextProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()
