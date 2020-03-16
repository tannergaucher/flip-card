import React from 'react'
import ReactDOM from 'react-dom'

import * as serviceWorker from './serviceWorker'

import { App } from './components/elements'
import {
  IsAuthProvider,
  MyCardsProvider,
  UserProvider,
} from './components/context'

import './index.css'

ReactDOM.render(
  <IsAuthProvider>
    <UserProvider>
      <MyCardsProvider>
        <App />
      </MyCardsProvider>
    </UserProvider>
  </IsAuthProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()
