import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { ApolloLink, split } from 'apollo-link'
import { onError } from 'apollo-link-error'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'

const httpLink = createHttpLink({
    // uri: 'http://localhost:4000/'
    uri: 'https://evening-hamlet-82255.herokuapp.com/'
})

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('token')

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    }
})

const wsLink = new WebSocketLink({
    // uri: `ws://localhost:4000/graphql`,
    uri: `ws://evening-hamlet-82255.herokuapp.com/graphql`,
    options: {
        reconnect: true
    }
})

const link = split(
    ({ query }) => {
        const { kind, operation } = getMainDefinition(query)
        return kind === 'OperationDefinition' && operation === 'subscription'
    },
    wsLink,
    httpLink
)

const errorLink = onError(({ graphQLErrors }) => {
    if (graphQLErrors) {
        graphQLErrors.map(({ message }) => console.log(message))
    }
})

export const client = new ApolloClient({
    link: ApolloLink.from([errorLink, authLink, link]),
    cache: new InMemoryCache()
})
