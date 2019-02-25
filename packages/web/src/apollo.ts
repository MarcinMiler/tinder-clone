import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { ApolloLink } from 'apollo-link'
import { onError } from 'apollo-link-error'

const httpLink = createHttpLink({
    uri: 'http://localhost:4000/'
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

const errorLink = onError(({ graphQLErrors }) => {
    if (graphQLErrors) {
        graphQLErrors.map(({ message }) => console.log(message))
    }
})

export const client = new ApolloClient({
    link: ApolloLink.from([errorLink, authLink, httpLink]),
    cache: new InMemoryCache()
})
