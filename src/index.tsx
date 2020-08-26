import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as RouterProvider } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { AppThemeProvider as ThemeProvider } from 'core/styles/theme'
import { GlobalStyle } from 'core/styles/global'
import { App } from 'pages/App.routing'
import { client } from 'core/apolloClient'

const rootEl = document.querySelector('#root')

ReactDOM.render(
  <ApolloProvider client={client}>
    <RouterProvider>
      <ThemeProvider>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </RouterProvider>
  </ApolloProvider>,
  rootEl
)
