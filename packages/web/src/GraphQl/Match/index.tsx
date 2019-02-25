import gql from 'graphql-tag'

export const MatchesQuery = gql`
    query MatchesQuery($userId: ID!) {
        matches(userId: $userId) {
            id
            userId1
            userId2
            date
        }
    }
`
