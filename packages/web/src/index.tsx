import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloProviderHooks } from 'react-apollo-hooks'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle, theme } from '@tinder/components'
import { Routes } from './Routes'
import { client } from './apollo'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <ApolloProvider client={client}>
        <ApolloProviderHooks client={client}>
            <React.Suspense fallback={<div>loading</div>}>
                <ThemeProvider theme={theme}>
                    <>
                        <GlobalStyle />
                        <Routes />
                    </>
                </ThemeProvider>
            </React.Suspense>
        </ApolloProviderHooks>
    </ApolloProvider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
