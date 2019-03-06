import gql from 'graphql-tag'

export const NewMatchSubscription = gql`
    subscription newMatch($userId: ID!) {
        newMatch(userId: $userId) {
            matchId
            match {
                date
            }
            matchedUserId
            matchedUser {
                id
                username
                age
            }
        }
    }
`
